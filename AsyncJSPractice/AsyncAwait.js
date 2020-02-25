

const doSomeWork = async () => {
  throw new Error("Error Occured")
  //return "utkarsh"
}


doSomeWork().then(data => console.log(data))
  .catch(err => console.log(err))