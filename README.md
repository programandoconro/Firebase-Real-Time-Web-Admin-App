https://progamandoconro.github.io/Firebase-Real-Time-Web-Admin-App/

# Firebase-Real-Time-Web-Admin-App
Panel de Administración para escribir, leer y eliminar data en tiempo real a partir de Firebase utilizando ```React JS```. Este panel de Administración es parte del proyecto ```React-Native``` para Android disponible en: https://github.com/progamandoconro/React-Native-Restaurant-Reservation-App

### Clona este repositorio y ve al directorio creado: 

    git clone https://github.com/progamandoconro/Firebase-Real-Time-Web-Admin-App
    cd Firebase-Real-Time-Web-Admin-App
    
### Agrega tus credenciales de Firebase al archivo ```firebaseService.js``` ubicado en ```src/store/firebaseService.js```   
    
    var firebaseConfig = {

    apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: ""
    };

### Instala la App y las dependencias con: 
   
    npm install 
    
### Corre la App con:

    npm start

### Funcionalidades:

* Firebase Login.
* Firebase Real-Time Database.
* Escribe, lee y elimina data en tiempo real a partir de ```Firebase```. 
* Administra Reservaciones realizada por Usuarios de la App móvil para Android (https://github.com/progamandoconro/React-Native-Restaurant-Reservation-App).
