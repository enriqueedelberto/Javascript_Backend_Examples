let mongoose = require('mongoose');


const server = 'cluster0-oifky.gcp.mongodb.net';
const database = 'test';
const user = 'enrique';
const password = 'jNiXpHPIBREEhc8M';

const connectionString = `mongodb://${user}:${password}@cluster0-shard-00-00-oifky.gcp.mongodb.net:27017,cluster0-shard-00-01-oifky.gcp.mongodb.net:27017,cluster0-shard-00-02-oifky.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;
//const connectionString = `mongodb://${user}:${password}@${server}/${database}`;
mongoose.connect(connectionString);


let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },

});

module.exports = mongoose.model('Customer', CustomerSchema);