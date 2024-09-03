let firebaseConfig = {
    // Enter your firebase credentials
    // Your web app's Firebase configuration
    apiKey: "AIzaSyAwlqFN31OmYB2qs0DwFlqYageb9f4N-9I",
    authDomain: "blogging-website-9a178.firebaseapp.com",
    projectId: "blogging-website-9a178",
    storageBucket: "blogging-website-9a178.appspot.com",
    messagingSenderId: "1033732512155",
    appId: "1:1033732512155:web:e1bd859827defcd7cae93e"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

// let auth = firebase.auth();