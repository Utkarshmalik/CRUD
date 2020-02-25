const express = require('express')

require('./db/moongose');


const app = express()
const port = process.env.PORT || 3000
const User = require('./models/user')




app.use(express.json())

app.post('/users', async (req, res) => {

  const user = new User(req.body)

  try {
    const newUser = await user.save()

    if (!newUser)
      res.status(404).send()

    res.send(newUser)
  }
  catch (e) {
    res.status(500).send()
  }
})


app.get('/users', async (req, res) => {

  try {
    const users = await User.find(data => { })

    if (!users)
      res.status(404).send()

    res.send(users)
  }
  catch (e) {
    res.status(500).send(e)
  }

})


app.get('/users/:id', async (req, res) => {

  const _id = req.params.id;
  try {
    const user = await User.findById(_id);

    if (!user)
      res.status(404).send()

    res.send(user)
  }
  catch (e) {
    res.status(500).send()
  }
})



app.patch('/users/:id', async (req, res) => {

  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'age']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    res.status(400).send({ error: "Invalid updates" })
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!user)
      res.status(404).send()

    res.send(user)
  }
  catch (e) {
    res.status(400).send(e)
  }
})

app.delete('/users/:id', async (req, res) => {


  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user)
      res.status(404).send()

    res.send(user)
  }
  catch (e) {
    res.status(500).send()
  }

})



app.listen(port, () => {
  console.log("server is up on port" + port)
})


