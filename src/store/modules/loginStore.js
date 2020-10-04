import router from '../../router/index.js'

const actions = {

signUp() {
    
},
signIn(email, password) {
    console.log(password);
    localStorage.setItem('user-token', email);
    router.push("/");
},
getLoggedUser() {
    localStorage.getItem('user-token');
},

}

// mutations
const mutations = {
setLoggedUser(state, loggedUser) {
    state.loggedUser = loggedUser
},
}

export default {
    namespaced: true,
    actions,
    mutations,
}