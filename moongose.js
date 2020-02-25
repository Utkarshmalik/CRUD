const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})



const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.length < 2)
        throw new Error("Invlaid name")
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  }
})

const me = new User({
  name: 'dcddcw',
  email: "Cdc@gmail.com"
})

me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log('Error!', error)
})
