const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const dotenv =require('dotenv');

dotenv.config();

chai.use(chaiHttp);
const { expect } = chai;

describe('Restaurants Route', () => {
    before(async () => {
        mongoose.connect(process.env.MONGO, { useFindAndModify: false, useCreateIndex: true });
        mongoose.set('strictQuery', false);
        //console.log('Connected to MongoDB');
    });

    after(async () => {
        await mongoose.connection.close();
        //console.log('Disconnected from MongoDB');
    });

    it('should return 200 OK for /api/restaurants and get all restaurants', async function () {
        this.timeout(5000);
        const module = await import('../api/index.js');
        const app = module.default;
        try {
            const res = await chai.request(app).get('/api/restaurants');
            //console.log(res);
            expect(res).to.have.status(200);
        } catch (error) {
            console.log(error)
            throw error;
        }
    });

    it('should return 200 OK for /api/restaurants/find/:id and return cafe "Barashka"', async function () {
        this.timeout(5000);
        const module = await import('../api/index.js');
        const app = module.default;
        try {
            const res = await chai.request(app).get('/api/restaurants/find/6554f8f422f2754148663df4');
            //console.log(res);
            expect(res).to.have.status(200);
        } catch (error) {
            throw error;
        }
    });

    it('should return 200 OK for /api/restaurants', async function () {
        this.timeout(5000);
        const module = await import('../api/index.js');
        const app = module.default;
        const newRestaurant = {
            name: "Test Name",
            type: "Test Type",
            city: "Test City",
            address: "Test Address",
            distance: "Test Distance",
            title: "Test Title",
            desc: "Test Desc",
            rating: 9.9,
            cheapestPrice: "$$$"
        };
        try {
            const res = await chai.request(app)
                .post('/api/restaurants')
                .send(newRestaurant);

            expect(res).to.have.status(200);
            expect(res.body).to.have.property('name').equals(newRestaurant.name);
            expect(res.body).to.have.property('type').equals(newRestaurant.type);
            expect(res.body).to.have.property('city').equals(newRestaurant.city);
            expect(res.body).to.have.property('address').equals(newRestaurant.address);
            expect(res.body).to.have.property('distance').equals(newRestaurant.distance);
            expect(res.body).to.have.property('title').equals(newRestaurant.title);
            expect(res.body).to.have.property('rating').equals(newRestaurant.rating);
            expect(res.body).to.have.property('cheapestPrice').equals(newRestaurant.cheapestPrice);

        } catch (error) {
            throw error;
        }
    });
});
