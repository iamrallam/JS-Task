function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const apiUrl = "https://jsonplaceholder.typicode.com/users";

fetchData(apiUrl)
  .then((data) => {
    console.log("Data fetched", data);
  })
  .catch((error) => {
    console.error("Error", error);
  });
