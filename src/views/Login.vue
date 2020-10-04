<template>
    <center style="padding-top: 70px;">
        <div class="col-xl-6 col-xs-12 col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title text-info">Invest Plus</h2>
                    <!-- <h6 class="card-subtitle"> Login </h6>  -->
                    <form class="mt-4" v-on:submit.prevent="onSubmit">
                        <div class="form-group text-left text-muted">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" 
                                   aria-describedby="emailHelp" placeholder="Enter email" v-model="login.email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group text-left text-muted">
                            <label for="exampleInputPassword1" >Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" 
                                   placeholder="Password" v-model="login.password">
                        </div>
                        <div class="custom-control custom-checkbox mr-sm-2 mb-3 " >
                            <input type="checkbox" class="custom-control-input" id="checkbox0" value="check">
                            <label class="custom-control-label text-secondary" for="checkbox0">Check Me Out !</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Entrar</button>
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
            }
        }
    },
    methods: {
        ...mapActions({
            signIn: "loginStore/signIn",
        }),
        onSubmit() {
            this.signIn(this.login.email, this.login.password);
        }
    }
}
</script>

<style scoped>

</style>