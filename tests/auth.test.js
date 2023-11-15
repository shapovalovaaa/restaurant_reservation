const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')

dotenv.config();

chai.use(chaiHttp);
const { expect } = chai;

describe('Auth Route', () => {
    before(async () => {
        mongoose.connect(process.env.MONGO, { useFindAndModify: false, useCreateIndex: true });
        mongoose.set('strictQuery', false);
        //console.log('Connected to MongoDB');
    });

    after(async () => {
        await mongoose.connection.close();
        //console.log('Disconnected from MongoDB');
    });

    it('should return 200 OK for /api/auth/register', async function () {
        this.timeout(5000);
        const module = await import('../api/index.js');
        const app = module.default;
        const newUser = {
            username: "Test Name",
            email: "Test Email",
            password: "Test Password",
            country: "Test Country",
            city: "Test City",
            phone: "Test Phone",
            isAdmin: true
        };
        try {
            const res = await chai.request(app)
                .post('/api/auth/register')
                .send(newUser);

            expect(res).to.have.status(200);
            expect(res.text).to.include("User has been created.")
            //console.log("Response text: " + res.text)
        } catch (error) {
            throw error;
        }
    });

    it('should return 200 OK for /api/auth/login', async function () {
        this.timeout(5000);
        const module = await import('../api/index.js');
        const app = module.default;
        const user = {
            username: "Test Name",
            password: "Test Password",
            country: "Test Country",
            email: "Test Email",
            city: "Test City",
            phone: "Test Phone"
        };
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
        try {
            const res = await chai.request(app)
                .post('/api/auth/login')
                .set('Authorization', `Bearer ${token}`)
                .send(user);

            expect(res).to.have.status(200);
            expect(res.body.details).to.have.property('username').equals(user.username)
            expect(res.body.details).to.have.property('email').equals(user.email)
            expect(res.body.details).to.have.property('country').equals(user.country)
            expect(res.body.details).to.have.property('city').equals(user.city)
            expect(res.body.details).to.have.property('phone').equals(user.phone)
            
        } catch (error) {
            throw error;
        }
    });
});
