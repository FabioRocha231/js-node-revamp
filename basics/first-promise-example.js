const promiseCallback = (resolve, reject) => {
  const error = true;
  let data = {
    data: {
      firstName: 'Fabio',
      lastName: 'HR Filho',
    },
    status: 200,
    error: null,
  };
  if (!error) resolve(data);

  data = {
    status: 400,
    error: 'Not Found',
  };

  reject(data);
};

function promiseFunction() {
  return new Promise(promiseCallback);
}

const successHandler = (data) => {
  console.log(data);
};

const errorHandler = (error) => {
  console.log(error.error);
  console.log(error.status);
};
promiseFunction().then(successHandler).catch(errorHandler);
