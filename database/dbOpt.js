const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const mysql = require('mysql');

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

// var knex = require('knex')({
// 	client: 'mysql',
// 	connection: {
// 		host: "db4free.net",
// 		user: "qusay97",
// 		password: '12345678',
// 		insecureAuth: true,
// 		database: 'test_charity'
// 	}
// });

var dbConnection = mysql.createConnection({
  host: "db4free.net",
  user: "corei4",
  password: 'corei4corei4',
  insecureAuth: true,
  database: 'charity_rbk'
})
dbConnection.connect(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Connected')
  }
})
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
			"amount_received": 0,
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
		knex.select().table('charities').then(result => {
			console.log(`successful display ${result}`)
			res.json(result)
		}).catch(err => {
			console.log(`error => ${err}`)
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
			.innerJoin('payments', 'payments.id', 'charity_to_id')
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
	getUserInfoID: function (id, res) {
		knex.select('firstName', 'lastName', 'email', 'telephone', 'imgUrl', 'userTypeId').from('users').where({ 'id': id })
			.then(result => {
				console.log(`successful display ${result}`)
				res.json(result)
			}).catch(err => {
				console.log(`error => ${err}`)
			});
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
			// "amount_received": 0,
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
		var that = this;
		knex('charities').sum('payments.donation_amount as summed')
			.innerJoin('payments', 'payments.charity_to_id', 'charities.id')
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
	donationsMadeByUser: function (req, res) {
		knex.column('*', { DonId: 'payments.id' }).select().from('payments')
			.innerJoin('charities', 'charities.id', 'payments.charity_to_id')
			.innerJoin('users', 'users.id', 'payments.user_id')
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
  addDonation: function (req, res) {
	console.log(req.body, 'here add charities DB')
	knex('payments').insert({
		"user_id": req.body.user_id,
		"card_number": req.body.card_number,
		"expire_date": req.body.expire_date,
		"owner": req.body.owner,
		"cvc_code": req.body.cvc_code,
		"donation_amount": req.body.donation_amount,
		"charity_to_id": req.body.charity_to_id
	}).then(result => {
		res.send(result);
		console.log(`successful insert ${result}`)
	}).catch(err => {
		console.log(`error => ${err}`)
	});
}


}
