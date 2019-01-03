var mysql = require('mysql');
const importer = require('node-mysql-importer');
//install my sql

//Note: to insert tht the database credential
importer.config({
  host: "db4free.net",
  user: "qusay97",
  password: '12345678',
  insecureAuth: true,
  database: 'test_charity'
})

module.exports = {
  initializeDB: function(req, res){
    importer.importSQL('/Users/rbk12/Desktop/Thesis-Project/database/Initialize.sql').then( () => {
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
