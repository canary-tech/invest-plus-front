import router from '../../router/index.js'
import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
    AuthenticationDetails,
  } from "amazon-cognito-identity-js";

const USER_TOKEN = 'user-token';
const VUE_APP_COGNITO_USER_POOL_ID = process.env.VUE_APP_COGNITO_USER_POOL_ID;
const VUE_APP_COGNITO_CLIENT_ID = process.env.VUE_APP_COGNITO_CLIENT_ID;

const actions = {

    signUp({state}, newUser) {
        console.log(state);
        // localStorage.setItem(NEW_USER, JSON.stringify(newUser));
        // router.push("/login");
        
        var poolData = {
            UserPoolId: VUE_APP_COGNITO_USER_POOL_ID,
            ClientId: VUE_APP_COGNITO_CLIENT_ID
          };
          
          var userPool = new CognitoUserPool(poolData);
          var attributeList = [];

          var attributeEmail = new CognitoUserAttribute({ Name: "email", Value: newUser.email });
          var attributePhoneNumber = new CognitoUserAttribute({ Name: "phone_number", Value: newUser.phone_number });
          var attributeName = new CognitoUserAttribute({ Name: "name", Value: newUser.name });
          attributeList.push(attributeEmail);
          attributeList.push(attributePhoneNumber);
          attributeList.push(attributeName);

          userPool.signUp( 
                newUser.email,
                newUser.password,
                attributeList,
                null,
                (err, result) => {
                    if (err) {
                        console.log(err);
                        alert(err.message);
                        return;
                    }
                    var cognitoUser = result.user;
                    console.log(cognitoUser);
                    router.push("/login");
                }
          );        
    },
    signIn({state}, login) {
        console.log(state);
        // let userLogged = JSON.parse(localStorage.getItem(NEW_USER));
        // console.log(userLogged);
        // console.log(login.password);
        // console.log(userLogged.password);
        // console.log(login.password === userLogged.password);
        // console.log(login.email === userLogged.email && login.password === userLogged.password);
        // if(login.email === userLogged.email && login.password === userLogged.password) {
        //     localStorage.setItem(USER_TOKEN, login.email);
        //     router.push("/");
        // } else {
        //     console.log("Usuario ou senha invalidos");
        // }
        var authenticationData = {
            Username: login.email,
            Password: login.password,
          };
          var authenticationDetails = new AuthenticationDetails(authenticationData);
          var poolData = { UserPoolId: VUE_APP_COGNITO_USER_POOL_ID,ClientId: VUE_APP_COGNITO_CLIENT_ID };
          var userPool = new CognitoUserPool(poolData);
          var userData = { Username: login.email, Pool: userPool };
          var cognitoUser = new CognitoUser(userData);
         
          cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
              //localStorage.setItem('access_token', result.getAccessToken().getJwtToken());
              //localStorage.setItem('id_token', result.getIdToken().getJwtToken());
              localStorage.setItem(USER_TOKEN, JSON.stringify(result));
              //commit('setLoggedUserUser', result.getIdToken().payload);
              router.push("/");
            },
            onFailure: function (err) {
               console.log(err);
               alert(err.message);
            },           
          });        

    },
    getLoggedUser() {
        localStorage.getItem(USER_TOKEN);
    },
    logOut() {
        localStorage.removeItem(USER_TOKEN);       
    }

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