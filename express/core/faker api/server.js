const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');


const createUser = () => {
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
    };
};

const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
};
app.get('/api/users/new', (req, res) => {
    const user = createUser();
    res.json(user);
});

app.get('/api/companies/new', (req, res) => {
    const company = createCompany();
    res.json(company);
});

app.get('/api/user/company', (req, res) => {
    const user = createUser();
    const company = createCompany();
    res.json({ user, company });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
