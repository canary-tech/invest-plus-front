import router from '../../router/index.js'

const NEW_USER = 'new-user';
const USER_TOKEN = 'user-token';

const actions = {

    signUp({state}, newUser) {
        console.log(state);
        localStorage.setItem(NEW_USER, JSON.stringify(newUser));
        router.push("/login");
    },
    signIn({state}, login) {
        console.log(state);
        let userLogged = JSON.parse(localStorage.getItem(NEW_USER));
        console.log(userLogged);
        console.log(login.password);
        console.log(userLogged.password);
        console.log(login.password === userLogged.password);
        console.log(login.email === userLogged.email && login.password === userLogged.password);
        if(login.email === userLogged.email && login.password === userLogged.password) {
            localStorage.setItem(USER_TOKEN, login.email);
            router.push("/");
        } else {
            console.log("Usuario ou senha invalidos");
        }
    },
    getLoggedUser() {
        localStorage.getItem(NEW_USER);
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