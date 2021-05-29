const mongoose = require('mongoose');

const MONGOURI =
	'mongodb+srv://Anton:30Kaziks_04@cluster0.nqpo5.mongodb.net/test';

const InitiateMongoServer = async () => {
	try {
		await mongoose.connect(MONGOURI, {
			useNewUrlParser: true,
		});
		console.log('Connected to DB !!');
	} catch (e) {
		console.log(e);
		throw e;
	}
};
//InitiateMongoServer();

module.exports = InitiateMongoServer;
