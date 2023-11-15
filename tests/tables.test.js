const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const dotenv =require('dotenv');

dotenv.config();

chai.use(chaiHttp);
const { expect } = chai;

describe('Tables Route', () => {
    before(async () => {
        mongoose.connect(process.env.MONGO, { useFindAndModify: false, useCreateIndex: true });
        mongoose.set('strictQuery', false);
        //console.log('Connected to MongoDB');
    });

    after(async () => {
        await mongoose.connection.close();
        //console.log('Disconnected from MongoDB');
    });

    it('should return 200 OK for /api/tables and get all tables', async function () {
        this.timeout(5000);
        const module = await import('../api/index.js');
        const app = module.default;
        try {
            const res = await chai.request(app).get('/api/tables');
            //console.log(res);
            expect(res).to.have.status(200);
        } catch (error) {
            console.log(error)
            throw error;
        }
    });

    it('should return 200 OK for /api/tables/find/:id and return "Double Table"', async function () {
        this.timeout(5000);
        const module = await import('../api/index.js');
        const app = module.default;
        try {
            const res = await chai.request(app).get('/api/tables/6554f55e22f2754148663d1c');
            //console.log(res);
            expect(res).to.have.status(200);
        } catch (error) {
            throw error;
        }
    });

    it('should return 200 OK for /api/tables/:restaurantId', async function () {
        this.timeout(5000);
        const module = await import('../api/index.js');
        const app = module.default;
        const newTable = {
            title: "Test Table",
            desc: "Test Description",
            maxPeople: 2
        };
        try {
            const res = await chai.request(app)
                .post('/api/tables/6554f74c22f2754148663d90')
                .send(newTable);
            
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('title').equals(newTable.title);
            expect(res.body).to.have.property('desc').equals(newTable.desc);
            expect(res.body).to.have.property('maxPeople').equals(newTable.maxPeople);
           
        } catch (error) {
            throw error;
        }
    });
});
