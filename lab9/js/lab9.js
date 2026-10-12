// name: Buddie Powell
// Date: 04/26/26
// class: Advanced Javascript Monday/Wednesday 10:30AM-12:10 PM

// init function to create and handle promises
const init = () => {
  // 1st Promise resolves after 1.5 seconds with "hello world"
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello world");
    }, 1500);
  });

  // 2nd Promise rejects after 0.5 seconds with "unable to resolve the request"
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("unable to resolve the request"));
    }, 500);
  });

  // Handling the promises
  // the first promise will log "hello world" after 1.5 seconds
  promise1
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });

  // the second promise will log the error message after 0.5 seconds

  promise2
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

// loads the init function when the window finishes loading to set up the application
window.onload = init;
