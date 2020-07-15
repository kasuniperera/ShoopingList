import firebase from 'firebase';
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZqIdVfNw3GrIuzX2g-VOCona998pxUbg",
    authDomain: "shoppinglist-82a86.firebaseapp.com",
    databaseURL: "https://shoppinglist-82a86.firebaseio.com",
    projectId: "shoppinglist-82a86",
    storageBucket: "shoppinglist-82a86.appspot.com",
    messagingSenderId: "116323741463",
    appId: "1:116323741463:web:2c0866ce0b8d8428201152"
}


class Fire{
    constructor(callback){
        this.init(callback);
    }
    init(callback){
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                callback(null,user);
            }else{
                firebase
                    .auth()
                    .signInAnonymously()
                    .catch(error => {
                        callback(error);
                });
            }
        });
    }

    addList(list){
        let ref = this.ref;
        ref.add(list);
    }

    updateList(list){
        let ref = this.ref;
        ref.doc(list.id).update(list);
    }

    getLists(callback){
        let ref = this.ref.orderBy('name');

        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = [];

            snapshot.forEach(doc => {
                lists.push({id: doc.id, ...doc.data()});
            });

            callback(lists);
        });
    }

    get userId(){
        return firebase.auth().currentUser.uid;
    }

    get ref(){
        return firebase
        .firestore()
        .collection('users')
        .doc(this.userId)
        .collection("lists");
    }

    detach(){
        this.unsubscribe();
    }

    
}

export default Fire;
