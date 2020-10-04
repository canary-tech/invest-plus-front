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
                            <input type="text" class="form-control" id="exampleInputName" 
                                   aria-describedby="emailHelp" placeholder="Entre com seu nome" v-model="newUser.name">
                        </div>                        
                        <div class="form-group text-left text-muted">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" 
                                   aria-describedby="emailHelp" placeholder="Enter email" v-model="newUser.email">
                        </div>
                        <div class="form-group text-left text-muted">
                            <label for="exampleInputPhone">Celular</label>
                            <input type="text" class="form-control" id="exampleInputPhone" 
                                   aria-describedby="emailHelp" placeholder="Entre com seu email" v-model="newUser.phoneNumber">
                        </div>                        
                        <div class="form-group text-left text-muted">
                            <label for="exampleInputPassword1" >Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" 
                                   placeholder="Senha" v-model="newUser.password">
                        </div>
                        <div class="form-group text-left text-muted">
                            <label for="exampleInputPassword2" >Confirme sua senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword2" 
                                   placeholder="Confirmação da Senha" v-model="newUser.confirmPassword">
                        </div>                        
                        <div class="custom-control custom-checkbox mr-sm-2 mb-3 " >
                            <input type="checkbox" class="custom-control-input" id="checkbox0" v-model="newUser.acceptTerms">
                            <label class="custom-control-label text-secondary" for="checkbox0">Declaro que Li e Aceito os termos!</label>
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
            }
        }
    },
    methods: {
        ...mapActions({
            signUp: "loginStore/signUp",
        }),
        onSubmit() {
            this.signUp(this.newUser);
        }
    }
}
</script>

<style scoped>

</style>