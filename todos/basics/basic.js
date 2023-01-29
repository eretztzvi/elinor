const express = require("express");

const app = express();

const port = 4005;

// CRUD operations
// Create - POST
// Read - GET
// Update - PUT / PATCH
// Delete - DELETE

const checkIfThereIsMilk = async (milk) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        const isMilk = milk;
        if (isMilk) {
          resolve();
        } else {
          reject();
        }
      },
      2000
    );
  });
};

app.get("/milk", async (request, response) => {
  try {
    await checkIfThereIsMilk(false);
    response.send("There Is Milk!!!");
  } catch (err) {
    response.status(500).send("There in no Milk!");
  }
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
