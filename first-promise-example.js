const promiseCallback = (resolve, reject) => {
  const error = false;
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

  reject(data.error);
};

function promiseFunction() {
  return new Promise();
}
