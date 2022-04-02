const express = require('express')
const app = express()



app.get('', (req, res) => {
  res.send('Hello Express is here!')
})


app.get('/weather', (req, res) => {

  console.log(req)
  console.log(req.query)
  res.send(JSON.stringify(req.query));

})


app.listen(3000, () => {
  console.log("Server is up on port 3005");
})