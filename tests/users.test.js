const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const dotenv =require('dotenv');

dotenv.config();

chai.use(chaiHttp);
const { expect } = chai;

describe('Users Route', () => {
    before(async () => {
        mongoose.connect(process.env.MONGO, { useFindAndModify: false, useCreateIndex: true });
        mongoose.set('strictQuery', false);
        //console.log('Connected to MongoDB');
    });

    after(async () => {
        await mongoose.connection.close();
        //console.log('Disconnected from MongoDB');
    });

    it('should return 200 OK for /api/users and get all users', async function () {
        this.timeout(5000);
        const module = await import('../api/index.js');
        const app = module.default;
        try {
            const res = await chai.request(app).get('/api/users');
            //console.log(res);
            expect(res).to.have.status(200);
        } catch (error) {
            console.log(error)
            throw error;
        }
    });

    it('should return 200 OK for /api/users/:id and return user "nastya"', async function () {
        this.timeout(5000);
        const module = await import('../api/index.js');
        const app = module.default;
        try {
            const res = await chai.request(app).get('/api/users/6554f43122f2754148663cfe');
            //console.log(res);
            expect(res).to.have.status(200);
        } catch (error) {
            throw error;
        }
    });
});
