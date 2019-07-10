<template>
    <div class="row">
        <div class="col" id="sendForm">
            <h4 class="mb-3">email</h4>
            <form class="needs-validation" novalidate v-on:submit.prevent="onSubmit">
                <div class="row">
                    <div class="col-md-12 mb-3">
                        <label for="email">Email <span class="text-muted">(Required)</span></label>
                        <input type="email" class="form-control" id="email" v-model="sendData.email" value="" required="required"
                            placeholder="you@example.com,you@example.com,...">
                        <div class="invalid-feedback">
                            Please enter a valid email address.
                        </div>
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="email">Subject <span class="text-muted">(Required)</span></label>
                        <input type="text" class="form-control" id="subject" v-model="sendData.subject" value="" required="required" placeholder="Hi">
                        <div class="invalid-feedback">
                            Please enter subject.
                        </div>
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="email">Text <span class="text-muted">(Optional)</span></label>
                        <textarea class="form-control" id="body" v-model="sendData.body" rows="10"></textarea>
                        <div class="invalid-feedback"></div>
                    </div>
                </div>
                <hr class="col">
                <button class="btn btn-primary btn-lg btn-block" type="submit">Send</button>
            </form>
            <div>{{ sendResponse }}</div>
        </div>
    </div>
</template>

<script>
    // form-validation.js
    (function () {
        'use strict'
        window.addEventListener('load', function () {
            var forms = document.getElementsByClassName('needs-validation')
            Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
        }, false)
    }())

    export default {
        data() {
            return {
                sendData: {
                    email: '',
                    subject: 'test title',
                    body: 'test body ' + Math.random().toString(36).substring(2, 6)
                }
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch('sendEmailAction', this.sendData);
            }
        },
        computed: {
            sendResponse () {
                return this.$store.state.sendResponse
            }
        }
    }
</script>