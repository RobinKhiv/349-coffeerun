
(function (window) {
    'use strict';
    window.FireBaseConfig = {
        apiKey: 'AIzaSyBXXOvmezrXfQB5Y0ZTVeSuceFOjl3VBVg',
        authDomain: 'coffeerun-76695.firebaseapp.com',
        projectId: 'coffeerun-76695',
        storageBucket: 'coffeerun-76695.appspot.com',
        messagingSenderId: '110435468418',
        appId: '1:110435468418:web:1f18ec84726f3a4167209b'
    };

    'use strict';
    var App = window.App || {};

    var FirebaseConfig = {
        apiKey: 'AIzaSyBXXOvmezrXfQB5Y0ZTVeSuceFOjl3VBVg',
        authDomain: 'coffeerun-76695.firebaseapp.com',
        projectId: 'coffeerun-76695',
        storageBucket: 'coffeerun-76695.appspot.com',
        messagingSenderId: '110435468418',
        appId: '1:110435468418:web:1f18ec84726f3a4167209b'
        //databaseURL: "https://coffee-run-4eca9-default-rtdb.firebaseio.com",
       // measurementId: "G-933SYZQ242"
    };

    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);

    window.App = App;
  })(window);
  