var mysql = require('mysql');
const importer = require('node-mysql-importer');
//install my sql

//Note: to insert tht the database credential
importer.config({
  host: "db4free.net",
  user: "corei4",
  password: 'corei4corei4',
  insecureAuth: true,
  database: 'charity_rbk'
})

module.exports = {
  initializeDB: function(req, res){
    importer.importSQL('./database/Initialize.sql').then( () => {
      console.log('Initialized successfully');
      return res.json({
        code: 1
      });
    }).catch( err => {
      console.log(`error: $(err)`);
      return res.json({
        code: -99,
        error: err
      });
    });
  }
};
