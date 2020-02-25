const mongodb = require('mongodb')
const { MongoClient, ObjectID } = mongodb


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {

  if (error)
    return console.log("Unable to connect to database")

  const db = client.db(databaseName)


  //CRUD Operations 


  //CREATE

  //   db.collection('users').insertOne({
  //     name: 'Hardik  Malik',
  //     age: 27
  //   }), (error, result) => {
  //     console.log(result.ops)
  //   }



  //READ

  // db.collection('users').findOne({ name: "Utkarsh Malik" }, (error, result) => {

  //   if (error)
  //     return console.log("Error Occured")

  //   console.log(result)

  // })

  //How to read documents by id

  db.collection("users").findOne({ _id: new ObjectID("5e5394c2f0466bd9b101ed19") }, (error, data) => {

    console.log(data)
  })

  //this returns a cursor to which we can apply methods

  db.collection("users").find({ age: 27 }).toArray(((error, users) => {

    console.log(users)

  }))


  //update operations


  db.collection('users').updateOne({
    _id: new ObjectID("5e5394c2f0466bd9b101ed19")
  }, {

      $set: {
        name: 'Mike'
      }
    }).then(data => console.log(data))
    .then(err => console.log(err))


  db.collection('users').deleteMany({
    age: 27
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })


})








