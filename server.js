const app = require('./app');

const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello, welcome to library backend, Designed by Souhardya Kundu');
});