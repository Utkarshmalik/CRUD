const myPromise = new Promise((resolve, reject) => {

  setTimeout(() => {

    //resolve("The asynchronous data is here ")

    reject("OOPS! Error Occured ")

  }, 3000)

})


myPromise.then((data) => { console.log(data) })
  .catch(err => console.log(err))