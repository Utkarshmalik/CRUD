const express = require('express')

require('./db/moongose');


const app = express()
const port = process.env.PORT || 3000
const User = require('./models/user')


/*
here just for testing try to update the user using asyncn await and then count

now try to do this using async await

User.findByIdAndUpdate("5e53db9aed3502e211d1dd24", { name: "Ramanris" }).then((user) => {

  User.countDocuments({ name: "Ramanris" }).then(data => console.log(data))
})
  .catch(err => console.log(err))


//here i have done the same thing  beautifully using async and await

const updateUserForMe = async (id,name) => {
  const user = await User.findByIdAndUpdate("5e53db9aed3502e211d1dd24", { name })
  const count = await User.countDocuments({ name });

  return count;
}

updateUserForMe(id,name).then(data => console.log(data))
  .catch(err => console.log(err))

*/

app.use(express.json())

app.get('/users', (req, res) => {

  User.find(data => { })
    .then(data => res.send(data))
})

app.get('/users/:id', (req, res) => {

  const _id = req.params.id;

  User.findById(_id).then(data => {

    if (!data)
      res.status(400).send()

    res.send(data)
  })
    .catch(err => {

      res.status(500)
      res.send(err)
    })

})

app.post('/users', (req, res) => {

  console.log(req.body)
  const user = new User(req.body)

  user.save().then(data => {
    console.log(data)
    res.send(user)
  })
    .catch(err => {
      res.status(400)
      res.send(err)

    })
})


app.listen(port, () => {
  console.log("server is up on port" + port)
})


