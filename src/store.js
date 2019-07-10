import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sendResponse: ''
  },
  mutations: {
    sendEmailMutation (state, sendData) {
        state.sendResponse = 'sending...';

        var cryptoJS = require("crypto-js");
        var time = Math.floor(Date.now() / 1000);
        var token = Math.random().toString(36).substring(2, 6) + cryptoJS.MD5(cryptoJS.enc.Utf8.parse(time)).toString() + Math.random().toString(36).substring(2, 5);

        axios({
            method: 'POST',
            url: process.env.VUE_APP_MAIL_API,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-Authorization': token,
                'X-Timestamp': time
            },
            data: {
                'query': `mutation mailer {
                    mailer(mails: "${sendData.email}", subject: "${sendData.subject}", body: "${sendData.body}") {
                      status
                      msg
                    }
                  }
                  `
            }
        })
        .then(function (response) {
            state.sendResponse = response.data;
        })
        .catch(function (error) {
            state.sendResponse = error;
        });
    }
  },
  actions: {
    sendEmailAction ({commit}, sendData) {
        commit('sendEmailMutation', sendData);
    }
  }
})
