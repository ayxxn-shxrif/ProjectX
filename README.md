# express-members-only

A application in which every user can view posted messages, but only logged in "club members" can see who posted them. The purpose of this project was to learn more about authentication with [passport.js](https://www.passportjs.org/). Made with [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) along with [pug](https://pugjs.org/language/plain-text.html) for creating view templates. [MongoDB](https://www.mongodb.com/) was used for a database along with [mongoose](https://mongoosejs.com/) ODM for modeling the application.

##### There will be up to 30s response delay upon entering the website due to render.com free tier restrictions.
### Live: [https://express-members-only-c8zw.onrender.com](https://express-members-only-c8zw.onrender.com)


## How to run server locally:
- Clone repository.
- Run ``npm install`` command in your terminal.
- Create .env file
- In .env file set up new environmental variable named ``MONGODB_URL`` and paste your own mongoDB connection link.
- Run ``npm run start`` command in your terminal.
- Server will listen to requests from ``localhost:3000``.

## Features
- Model View Controller pattern based application.
- Authentication with use of [passport.js](https://www.passportjs.org/).
- Password encryption with [bcrypt.js](https://www.npmjs.com/package/bcryptjs).
- User session.
- Application data models based on [mongoose's](https://mongoosejs.com/) schema based solution.
- POST requests validation with [express-validator](https://express-validator.github.io/docs/).
- User sign up option.
- Login functionality.
- Logout functionality.
- Password confirmation custom validation.
- Username duplication prevention.
- Option to add new message for logged in users.
- Option to 'join the club' after entering secret password.
- Display messages for all users but display author only for 'club members'.
- Option to delete messages only for user that is an admin.

### Dependencies Used:
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
- [passport.js](https://www.passportjs.org/)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [MongoDB](https://www.mongodb.com/)
- [async](https://www.npmjs.com/package/async)
- [express-validator](https://express-validator.github.io/docs/)
- [date-fns](https://date-fns.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [pug](https://pugjs.org/language/plain-text.html)

#### Dev dependencies:
- [nodemon](https://www.npmjs.com/package/nodemon)