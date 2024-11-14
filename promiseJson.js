// Écriture du code fourni par
// https://developer.mozilla.org/en-US/docs/Web/API/Response/json

console.log("PromiseJson.js running");


function tstJson(){
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  fetchPromise
    .then((reponse) => {
      return reponse.json();
    })
    .then((json) => {
      console.log(json[0].name);
      outListWin(json[0].name);
    });
  }