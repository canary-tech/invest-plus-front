<template>
    <center style="padding-top: 70px;">
        <div class="col-xl-6 col-xs-12 col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title text-success">Invest Plus</h2>
                    <!-- <h6 class="card-subtitle"> Login </h6>  -->
                    <form class="mt-4" v-on:submit.prevent="onSubmit">
                        <div class="form-group text-left text-muted ">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control"  id="exampleInputEmail1" ref="email"
                                    v-bind:class="{ 'is-invalid': fieldsValidation.hasErrorEmail }"
                                   aria-describedby="emailHelp" placeholder="" v-model="login.email">
                            <small id="emailHelp" class="form-text text-danger" v-if="fieldsValidation.hasErrorEmail">Email Obrigatório</small>
                        </div>
                        <div class="form-group text-left text-muted">
                            <label for="exampleInputPassword1" >Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" ref="password"
                                   v-bind:class="{ 'is-invalid': fieldsValidation.hasErrorPassword }"
                                   placeholder="" v-model="login.password">
                            <small id="emailHelp" class="form-text text-danger" v-if="fieldsValidation.hasErrorPassword">Senha Obrigatório</small>
                        </div>
                        <div class="custom-control custom-checkbox mr-sm-2 mb-3 " >
                            <input type="checkbox" class="custom-control-input" id="checkbox0" value="check">
                            <label class="custom-control-label text-secondary" for="checkbox0">Check Me Out !</label>
                        </div>
                        <div class="custom-control custom-checkbox mr-sm-2 mb-3 " >
                            <button type="submit" class="btn btn-primary">Entrar</button>
                        </div>
                        <div class="custom-control custom-checkbox mr-sm-2 mb-3 " >
                            <router-link to="/sign-up" class="small">Ainda não tem uma Conta? Clique aqui</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </center>
</template>                    

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            login: {
                email: "",
                password: "",
            },
            fieldsValidation: {
                hasErrorEmail: false,
                hasErrorPassword: false
            }
        }
    },
    methods: {
        ...mapActions({
            signIn: "loginStore/signIn",
        }),
        onSubmit() {
            if(this.validate(this.login.email, this.login.password)) {
                this.signIn(this.login);
            }
        },
        validate(email, password) {
            let isValid = true;
            if(!password) {
                this.fieldsValidation.hasErrorPassword = true;
                isValid = false;
                this.$refs.password.focus();
            } else {
                this.fieldsValidation.hasErrorPassword = false;
            }   
            if(!email) {
                this.fieldsValidation.hasErrorEmail = true;
                isValid = false;
                this.$refs.email.focus();
            } else {
                this.fieldsValidation.hasErrorEmail = false;
            } 
            return isValid;
        }
    },
    mounted: function() {
        this.login.email =  this.$route.query.email;
        if(this.login.email) {
            this.$refs.password.focus();
        } else {
            this.$refs.email.focus();
        }
    }
}
</script>

<style scoped>

</style>
