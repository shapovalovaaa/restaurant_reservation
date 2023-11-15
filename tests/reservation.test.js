const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const dotenv =require('dotenv');

dotenv.config();

chai.use(chaiHttp);
const { expect } = chai;

describe('Reservation Route', () => {
    before(async () => {
        mongoose.connect(process.env.MONGO, { useFindAndModify: false, useCreateIndex: true });
        mongoose.set('strictQuery', false);
        //console.log('Connected to MongoDB');
    });

    after(async () => {
        await mongoose.connection.close();
        //console.log('Disconnected from MongoDB');
    });

    // возможность просмотра списка броней   
    it('should return 200 OK for /api/reservation and get all reservation', async function () {
        this.timeout(5000);
        const module = await import('../api/index.js');
        const app = module.default;
        try {
            const res = await chai.request(app).get('/api/reservation');
            //console.log(res);
            expect(res).to.have.status(200);
        } catch (error) {
            console.log(error)
            throw error;
        }
    });

    // возможность просмотра информации о брони 
    it('should return 200 OK for /api/reservation/find/:id and return reservation from user nastya', async function () {
        this.timeout(5000);
        const module = await import('../api/index.js');
        const app = module.default;
        try {
            const res = await chai.request(app).get('/api/reservation/find/6554fa058a80a0e6f871a9cf');
            //console.log(res);
            expect(res).to.have.status(200);
        } catch (error) {
            throw error;
        }
    });

    // возможность добавления новой брони 
    it('should return 200 OK for /api/reservation', async function () {
        this.timeout(5000);
        const module = await import('../api/index.js');
        const app = module.default;
        const newReservation = {
            userId: "Test Id",
            userName: "Test Name",
            userEmail: "Test Email",
            restaurantId: "Test Rest Id",
            tableId: "Test Table Id"
        };
        try {
            const res = await chai.request(app)
                .post('/api/reservation')
                .send(newReservation);
            
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('userId').equals(newReservation.userId);
            expect(res.body).to.have.property('userName').equals(newReservation.userName);
            expect(res.body).to.have.property('userEmail').equals(newReservation.userEmail);
            expect(res.body).to.have.property('restaurantId').equals(newReservation.restaurantId);
            expect(res.body).to.have.property('tableId').equals(newReservation.tableId);
        } catch (error) {
            throw error;
        }
    });
});
