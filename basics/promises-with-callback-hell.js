import fs from 'fs';
fs.readFile(param1, param2, (error, data) => {
  if (!error) {
    fs.writeFile(paramsWrite, (error, data) => {
      if (!error) {
        fs.readFile(paramsRead, (error, data) => {
          if (!error) {
            console.log();
          }
        });
      }
    });
  }
});

// Refactored by FabioRocha231
fs.readFile(param1, param2, (error, data) => {
  if (!error) {
    console.log(data);
    return;
  }

  console.log('An error occurred, trying to create file');

  fs.writeFile(paramsWrite, (error, data) => {
    if (error) {
      console.log('An error occurred!...');
      return;
    }

    fs.readFile(paramsRead, (error, data) => {
      if (error) {
        console.log('An error occurred!..., finishing process!');
        return;
      }
      console.log(data);
    });
  });
});
