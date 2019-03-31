import firebase from "firebase";

const config = {

};
try {
  firebase.app();
} catch (error) {
  firebase.initializeApp(config);
}

export default firebase;
