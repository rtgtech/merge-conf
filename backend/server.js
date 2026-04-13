const express = require('express');
const authRoutes = require('./src/features/auth/auth.routes');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('API running');
});

app.listen(5000, () => console.log('Server running'));