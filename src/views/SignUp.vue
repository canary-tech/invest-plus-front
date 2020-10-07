<template>
    <center style="padding-top: 70px;">
        <div class="col-xl-6 col-xs-12 col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title text-primary">Invest Plus</h2>
                    <h6 class="card-subtitle"> Cadastro </h6> 
                    <form class="mt-4" v-on:submit.prevent="onSubmit">
                        <div class="form-group text-left text-muted">
                            <label for="exampleInputName">Nome</label>
                            <input type="text" class="form-control" id="exampleInputName" ref="name"
                                   v-bind:class="{ 'is-invalid': fieldsValidation.hasErrorName }"
                                   aria-describedby="emailHelp" placeholder="Entre com seu nome" v-model="newUser.name">
                        </div>                        
                        <div class="form-group text-left text-muted">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" ref="email"
                                   v-bind:class="{ 'is-invalid': fieldsValidation.hasErrorEmail }"
                                   aria-describedby="emailHelp" placeholder="Enter email" v-model="newUser.email">
                        </div>
                        <div class="form-group text-left text-muted">
                            <label for="exampleInputPhone">Celular</label>
                            <input type="text" class="form-control" id="exampleInputPhone" ref="phone_number"
                                   v-bind:class="{ 'is-invalid': fieldsValidation.hasErrorPhoneNumber }"
                                   aria-describedby="emailHelp" placeholder="Entre com seu email" v-model="newUser.phone_number">
                        </div>                        
                        <div class="form-group text-left text-muted">
                            <label for="exampleInputPassword1" >Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" ref="password"
                                   v-bind:class="{ 'is-invalid': fieldsValidation.hasErrorPassword }"
                                   placeholder="Senha" v-model="newUser.password">
                        </div>
                        <div class="form-group text-left text-muted">
                            <label for="exampleInputPassword2" >Confirme sua senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword2" ref="confirmPassword"
                                   v-bind:class="{ 'is-invalid': fieldsValidation.hasErrorConfirmPassword }"
                                   placeholder="Confirmação da Senha" v-model="newUser.confirmPassword">
                            <small id="emailHelp" class="form-text text-danger" v-if="fieldsValidation.hasErrorConfirmPassword">Confirmação de Senha não Confere</small>
                        </div>                        
                        <div class="custom-control custom-checkbox mr-sm-2 mb-3 " >
                            <input type="checkbox" class="custom-control-input" v-bind:class="{ 'is-invalid': fieldsValidation.hasErrorAcceptTerms }" id="checkbox0" v-model="newUser.acceptTerms" ref="acceptTerms">
                            <label class="custom-control-label text-secondary"  v-bind:class="{ 'text-danger': fieldsValidation.hasErrorAcceptTerms }" for="checkbox0">Declaro que Li e Aceito os termos!</label>
                        </div>
                        <div class="custom-control custom-checkbox mr-sm-2 mb-3 " >
                            <button type="submit" class="btn btn-primary">Salvar</button>
                        </div>
                        <div class="custom-control custom-checkbox mr-sm-2 mb-3 " >
                            <router-link to="/login" class="small">Já tem sua conta? Clique aqui para fazer o Login.</router-link>
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
            newUser: {
                name: "",
                email: "",
                phone_number: "",
                password: "",
                confirmPassword: "",
                acceptTerms: false
            },
            fieldsValidation: {
                hasErrorName: false,
                hasErrorEmail: false,
                hasErrorPhoneNumber: false,
                hasErrorPassword: false,
                hasErrorConfirmPassword: false,
                hasErrorAcceptTerms: this.acceptTerms
            }            
        }
    },
    methods: {
        ...mapActions({
            signUp: "loginStore/signUp",
        }),
        onSubmit() {
            if(this.validate(this.newUser)) {
                this.signUp(this.newUser);
            }
        },
        validate(user) {
            let isValid = true;            
            if (!user.acceptTerms) {
                this.fieldsValidation.hasErrorAcceptTerms = true;
                isValid = false;
                this.$refs.acceptTerms.focus();
            } else {
                this.fieldsValidation.hasErrorAcceptTerms = false;
            }            

            if (user.password !== user.confirmPassword) {
                this.fieldsValidation.hasErrorConfirmPassword = true;
                isValid = false;
                this.$refs.confirmPassword.focus();
            } else {
                this.fieldsValidation.hasErrorConfirmPassword = false;
            }            
            if(!user.password) {
                this.fieldsValidation.hasErrorPassword = true;
                isValid = false;
                this.$refs.password.focus();
            } else {
                this.fieldsValidation.hasErrorPassword = false;
            }  
            if(!user.phone_number) {
                this.fieldsValidation.hasErrorPhoneNumber = true;
                isValid = false;
                this.$refs.phone_number.focus();
            } else {
                this.fieldsValidation.hasErrorPhoneNumber = false;
            }      
            if(!user.email) {
                this.fieldsValidation.hasErrorEmail = true;
                isValid = false;
                this.$refs.email.focus();
            } else {
                this.fieldsValidation.hasErrorEmail = false;
            }    
            if(!user.name) {
                this.fieldsValidation.hasErrorName = true;
                isValid = false;
                this.$refs.name.focus();
            } else {
                this.fieldsValidation.hasErrorName = false;
            }                 
            return isValid;
        }        
    }
}
</script>

<style scoped>

</style>