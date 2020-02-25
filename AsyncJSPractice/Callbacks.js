const doWorkAfterCallback = (workAfterCallback) => {
  setTimeout(() => {
    workAfterCallback("data from asynchronous action");
  }, 2000)
}


doWorkAfterCallback((data) => {
  console.log(data)
})





//perform a asynchronous operation 
//and after it is  performed perform a task from the result obtained from the data
