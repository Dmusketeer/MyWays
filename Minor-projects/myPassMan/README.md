# Password Manager
## PROBLEM STATEMENT
    You need to create a server side application with Express JS and EJS for UI templates, which acts as password manager, in which users can save login passwords of different websites.

## <i>DESCRIPTION</i>
    Users can login into their account and add passwords of different websites and retrieve them when needed. The passwords should be encrypted in some form and should not be stored as plain text in the database .You can create an express server with mongoDB for storing user account details and user’s passwords in encrypted format. You can use the NodeJS crypto module for encryption and decryption. Use Google manifest declaration for building a chrome browser extension.

## <i>INSTRUCTION</i>
    1.Create a NodeJS project with Express and Ejs.
    2.Create pages and forms for login, register, store passwords and viewing passwords with ejs.
    3.Use MongoDb official connector or Mongoose for connecting mongodb to the express application.
    4.Save user credentials into MongoDb as hashed (SHA256) on registration.
    5.And while login check matches for password hash in database and hash of given password.
    6.Encrypt the login passwords using a key of relevant length .
    7.Decrypt the passwords with the same key.
    8.Connect the ReactJS frontend project with the express http server created using Axios.
    9.Give an PORT where the application would be exposed.