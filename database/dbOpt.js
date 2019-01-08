const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const config = require('../config');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: "db4free.net",
    user: "corei4",
    password: 'corei4corei4',
    insecureAuth: true,
    database: 'charity_rbk'
  }
});

function generateJwt() {
  return jwt.sign({
    id: this._id,
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName,
  }, config.jwtSecret);
};

function generateHashPassword(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


module.exports = {
  signUp: function (req, res) {
    const password = generateHashPassword(req.body.password);
    const email = req.body.email;
    const telephone = req.body.telephone;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const image = req.body.image;
    knex('users').select().where('email', email).then(function (rows) {
      if (rows.length === 0) {
        knex('users').insert({ firstName: firstName, lastName: lastName, email: email, password: password, telephone: telephone, imgUrl: image, userTypeId: 2 }).then(result => {
          console.log(`successful insert ${result}`)
        })
      } else {
        throw "User already exists!";
      }
    }).catch(err => {
      console.log(`error => ${err}`);
    });
  },
  signIn: function (req, res) {
    var email = req.body.email
    knex.select('password').from('users').where('email', email)
      .then(function (result) {
        if (result.length > 0) {
          bcrypt.compare(req.body.password, result[0].password, function (err, isMatch) {
            if (err) {
              return res.send({
                success: false,
                message: 'Password is incorrect.'
              })
            }
            if (isMatch) {
              knex.select('firstName', 'lastName', 'email', 'telephone', 'imgUrl', 'userTypeId', 'id').from('users').where({ 'email': email })
                .then(function (result) {
                  return res.send({
                    success: true,
                    message: 'Password is correct.',
                    token: jwt.sign({
                      result
                    }, 'secret')
                  })
                })
            }
          })
        }
      });
  },
  addCharity: function (req, res) {
    console.log(req.body, 'here add charities DB')
    knex('charities').insert({
      "name": req.body.name,
      "amount": req.body.amount,
      "description": req.body.description,
      "location": req.body.location,
      "image": req.body.image,
      "owner_id": req.body.owner_id
    }).then(result => {
      console.log(`successful insert ${result}`)
    }).catch(err => {
      console.log(`error => ${err}`)
    });
  },
  getAllChar: function (req, res) {
    knex.select().table('charities').then((err, result) => {
      console.log('Get all charities');
      if (result) {
        res.send(result)
        return result;
      } else {
        res.send(err)
      }
    });
  },
  getUserChar: function (req, res) {
    knex('charities').select().where('owner_id', req.body.owner_id).then((err, result) => {
      console.log('Get user charities');
      if (result) {
        res.send(result)
      } else {
        res.send(err)
      }
    });
  },
  delChar: function (req, res) {
    knex('charities')
      .del()
      .where({ 'id': req.body.id }).then(result => {
        console.log(`successful delete ${result}`)
        res.send(true);
      }).catch(err => {
        console.log(`error => ${err}`)
        res.send(err)
      });
  },
  updateChar: function (req, res) {
    knex('charities')
      .where({ 'id': req.body.id })
      .update({
        "name": req.body.name,
        "amount": req.body.amount,
        "description": req.body.description,
        "location": req.body.location,
        "image": req.body.location,
        "owner_id": 1
      })
      .then(result => {
        console.log(`successful update ${result}`)
        res.send("update suc.")
      }).catch(err => {
        console.log(`error => ${err}`)
        res.send(err)
      });
  },
  addDonation: function (req, res) {
    knex('Donations').insert({
      "donated_amount": req.body.donated_amount,
      "user_id": 1,
      "charities_id": req.body.charities_id
    }).then(result => {
      console.log(`successful insert ${result}`)
    }).catch(err => {
      console.log(`error => ${err}`)
    });
  },
  sumDonationByCharId: function (req, res) {
    knex('Donations')
      .sum('donated_amount')
      .where({ 'charities_id': req.body.charities_id }).then(result => {
        console.log(`successful Sum Amounts ${result}`)
        res.send(result)
      }).catch(err => {
        console.log(`error => ${err}`)
        res.send(err)
      });
  },
  updateUserType: function (req, res) {
    knex('users')
      .where({ 'email': req.body.email })
      .update({
        userTypeId: 3
      }).then(result => {
        console.log(`successful update ${result}`)
        res.send("update suc.")
      }).catch(err => {
        console.log(`error => ${err}`)
        res.send(err)
      });
  },
  donationsToCharity: function (req, res) {
    knex('charities')
      .innerJoin('Donations', 'Donations.donation_to', 'charities.id')
      .innerJoin('payments', 'payments.id', 'Donations.donated_amount')
      .where('charities.id', req.body.charities_id)
      .then(function (data) {
        res.send(data);
      });
  },
  editUserInfo: function (req, res) {
    knex('charities')
      .where({ 'id': req.body.id })
      .update({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "phoneNumber": req.body.phoneNumber,
        "image": req.body.image,
      })
      .then(result => {
        console.log(`successful update ${result}`)
        res.send("update suc.")
      }).catch(err => {
        console.log(`error => ${err}`)
        res.send(err)
      });
  },
  getUserInfo: function (req, res) {
    var email = req.body.email;
    knex.select('firstName', 'lastName', 'email', 'telephone', 'imgUrl', 'userTypeId').from('users').where({ 'email': email })
  },

  decodeJwt: function (req, res) {
    var token = req.body.token;
    jwt.verify(token, "secret", function (err, decoded) {
      console.log(decoded)
      res.json(decoded.result)
    })
  },
  userOrganizations: function (req, res) {
    knex.column('*', { userId: 'users.id' }).select().from('users')
      .innerJoin('usertype', 'users.userTypeId', "usertype.id")
      .where('usertype.user_type', "organization")
      // .select('users')
      .then(function (data) {
        res.send(data);
      });
  },
  // becomeOrganization
  becomeOrganization: function (req, res) {
    console.log(req.body, 'here add charities DB')
    knex('Request').insert({
      "name": req.body.name,
      "about": req.body.about,
      "description": req.body.description,
      "location": req.body.location,
      "user_id": Number(req.body.userId)
    }).then(result => {
      console.log(`successful insert ${result}`)
    }).catch(err => {
      console.log(`error => ${err}`)
    });

  },
  getRequests: function (req, res) {
    knex.select().table('Request').then((err, result) => {
      console.log('Get all Request');
      if (result) {
        res.send(result)
        return result;
      } else {
        res.send(err)
      }
    });
  },
  DonationAmountSummed: function (req, res) {
    knex('charities').sum('payments.amount_pay')
      .innerJoin('Donations', 'Donations.donation_to', 'charities.id')
      .innerJoin('payments', 'payments.id', 'Donations.donated_amount')
      .where('charities.id', req.body.charities_id)
      .then(function (data) {
        res.send(data);
      });
  },
  getUserInfo: function (req, res) {
    var email = req.body.email;
    knex.select('firstName', 'lastName', 'email', 'telephone', 'imgUrl', 'userTypeId').from('users').where({ 'email': email })
  },
  donationsMadeByUser: function (req, res) {
    knex.column('*', { DonId: 'Donations.id' }).select().from('Donations')
      .innerJoin('charities', 'charities.id', 'Donations.donation_to')
      .innerJoin('payments', 'payments.id', 'Donations.donated_amount')
      .innerJoin('users', 'users.id', 'Donations.user_id')
      .where('users.id', req.body.user_id)
      .then(function (data) {
        res.send(data);
      });
  },

  // SELECT * FROM Donations INNER JOIN charities ON charities.id = Donations.donation_to
  // INNER JOIN payments ON payments.id = Donations.donated_amount INNER JOIN users ON users.id = Donations.user_id WHERE users.id = 2;
  getRequests: function (req, res) {
    knex.select().table('Request').then((err, result) => {
      console.log('Get all Request');
      if (result) {
        res.send(result)
        return result;
      } else {
        res.send(err)
      }
    });
  },
  DonationAmountSummed: function (req, res) {
    var that = this;
    knex('charities').sum('payments.amount as summed')
      .innerJoin('Donations', 'Donations.donation_to', 'charities.id')
      .innerJoin('payments', 'payments.id', 'Donations.donated_amount')
      .where('charities.id', req.body.charities_id)
      .then(function (data) {
        console.log(data[0].summed)
        console.log(req.body.charities_id)
        var obj = {
          "summed": data[0].summed,
          "charities_id": req.body.charities_id
        }

        return knex('charities')
          .where('charities.id', req.body.charities_id)
          .update({
            amount_received: data[0].summed
          })
      });
  },
  getUserInfo: function (req, res) {
    var email = req.body.email;
    knex.select('firstName', 'lastName', 'email', 'telephone', 'imgUrl', 'userTypeId').from('users').where({ 'email': email })
  },
  donationsMadeByUser: function (req, res) {
    knex.column('*', { DonId: 'Donations.id' }).select().from('Donations')
      .innerJoin('charities', 'charities.id', 'Donations.donation_to')
      .innerJoin('payments', 'payments.id', 'Donations.donated_amount')
      .innerJoin('users', 'users.id', 'Donations.user_id')
      .where('users.id', req.body.user_id)
      .then(function (data) {
        res.send(data);
      });
  }
}

  // donationsMadeByUser: function(req, res){
  //     knex('Donations')
  //     .innerJoin('charities','Donations.donation_to',"charities.id")
  //     .where('Donations.donation_to', req.body.charities_id)
  //     .then(function(data){
  //         res.send(data);
  //     });
  // }

  //   SELECT * FROM charities INNER JOIN Donations ON Donations.donation_to = charities.id join payments on payments.id=Donations.donated_amount WHERE charities.id = 2;
  // SELECT sum(payments.amount_pay) as 'summed' FROM charities INNER JOIN Donations ON Donations.donation_to = charities.id join payments on payments.id=Donations.donated_amount WHERE charities.id = 2;
  // SELECT sum(payments.amount_pay) as 'summed' FROM charities INNER JOIN Donations ON Donations.donation_to = charities.id join payments on payments.id=Donations.donated_amount WHERE charities.id = 2;

//   SELECT * FROM charities INNER JOIN Donations ON Donations.donation_to = charities.id join payments on payments.id=Donations.donated_amount WHERE charities.id = 2;
// SELECT sum(payments.amount) as 'summed' FROM charities INNER JOIN Donations ON Donations.donation_to = charities.id join payments on payments.id=Donations.donated_amount WHERE charities.id = 2;
// SELECT sum(payments.amount) as 'summed' FROM charities INNER JOIN Donations ON Donations.donation_to = charities.id join payments on payments.id=Donations.donated_amount WHERE charities.id = 2;


