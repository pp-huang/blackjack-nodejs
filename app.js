const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const sequelize = require('./src/config/database');
const userRoutes = require('./src/routes/userRoutes');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);

// alter --> updates the databae to make it match the models defined in the application
sequelize.sync().then(() => {
    console.log('Database synced successfully');
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
