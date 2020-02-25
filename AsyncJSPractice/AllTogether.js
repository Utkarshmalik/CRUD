const add = (a, b) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (a < 0 || b < 0)
        reject("Any of the number cannot be negative")
      resolve(a + b);
    }, 2000)
  })
}


//suppose i have to add 1+3+5+7

// //now this looks poors 
// add(1, 3).then(data => {
//   add(data, 5).then(data => add(data, 7)).then(data => console.log(data))
// }).catch(err => console.log(err))


//now let us try to imporve this using async await

//async functions

const addForMe = async () => {
  const x1 = await add(1, 3);
  const x2 = await add(x1, 5);
  const x3 = await add(x2, 7);

  return x3;
}

addForMe().then(data => console.log(data))
  .catch(err => console.log(err))





