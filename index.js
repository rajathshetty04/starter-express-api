const express = require('express')
const app = express()

app.use(express.json())

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.post('/examples', (req, res) => {
  // Create a new example
  const example = {
    name: req.body.name,
    age: req.body.age,
  };

  res.json(example);
});

app.listen(process.env.PORT || 3000 , () => {
  console.log('Server is listening on port 3000');
});
