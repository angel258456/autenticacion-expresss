var express = require("express");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var router = express.Router();
var db = require("../services/db");

passport.use(
  new LocalStrategy(function verify(email, password, cb) {
    try  { 
        let resultado=await db.query(
        `SELECT * FROM usuarios WHERE email =${email}`
         )
        const data = helper.emptyOrRows(resultado)[0]
        if (!data){
            return cb(null, false, {
                message: "Incorrect username or password.",
            });
        }
        if(!data.contra==password){
            return cb(null, false, {
                message: "Incorrect username or password.",
            });
        }
        return cb(null, row);
    }
    catch(err){
        return cb(err)
    }
    
    // db.query(
    //   "SELECT * FROM usuarios WHERE email = ?",
    //   [email],
    //   function (err, row) {
    //     if (err) {
    //       return cb(err);
    //     }
    //     if (!row) {
    //       return cb(null, false, {
    //         message: "Incorrect username or password.",
    //       });
    //     }

    //     crypto.pbkdf2(
    //       password,
    //       row.salt,
    //       310000,
    //       32,
    //       "sha256",
    //       function (err, hashedPassword) {
    //         if (err) {
    //           return cb(err);
    //         }
    //         if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
    //           return cb(null, false, {
    //             message: "Incorrect username or password.",
    //           });
    //         }
    //         return cb(null, row);
    //       }
    //     );
    //   }
    // );
  })
);

module.exports = router;
