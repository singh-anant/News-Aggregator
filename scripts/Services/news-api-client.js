// It will contain network call code...
import { URL } from "../Utils/helper.js";
export async function networkCall() {
  try {
    const response = await fetch(URL); //Block
    const object = await response.json(); //Deserialization //Block
    return object; //Wrap Promise
  } catch (error) {
    console.log("Error occurred-:", error);
    throw error;
  }

  // OLD STYLE
  /*  const URL =
    "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
  const promise = fetch(URL);
  promise
    .then(function (response) {
      const promise1 = response.json(); //Deserialization
      promise1
        .then((data) => console.log("Data is-:", data))
        .catch((err) => console.log("JSON parse error-", err));
    })
    .catch(function (error) {
      console.log("Error is-" + error);
    }); */
}
