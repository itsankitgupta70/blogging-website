// Initialize the FirebaseUI Widget using Firebase.
let ui = new firebaseui.auth.AuthUI(auth);
let login = document.querySelector('.login');

const setupLoginButton = () => {
    ui.start("#loginUI", {
        callbacks: {
            signINSuccessWithResult: function(authResult, redirectURL) {
                console.log(authResult);
                return false;
            }
        },
        signInFlow: "popup",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    })
}