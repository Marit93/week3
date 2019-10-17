// let but1 = document.getElementById("but");
// but1.addEventListener("click", myFunction);

// // function myFunction() {
// //   document.getElementById("joke").innerHTML = ;
// // }

// async function getJoke() {
//   const data = "https://icanhazdadjoke.com/";
//   const res = await fetch(data, {
//     method: "GET",
//     headers: {
//       Accept: "application/json"
//     }
//   })
//     // .then(res => res.json())
//     .then(res => res.text())
//     .then(text => console.log(text))
//     .catch(error => console.log(error));
//   return await res;
// }
// getJoke().then(responseJSON => {
//    function myFunction() {
//   document.getElementById("joke").innerHTML = responseJSON;
// }});

let but1 = document.getElementById("but");
but1.addEventListener("click", myFunction);
function myFunction() {
  getJoke().then(responseJSON => {
    document.getElementById("joke").innerHTML = responseJSON;
  });
}
async function getJoke() {
  const data = "https://icanhazdadjoke.com/";
  const res = await fetch(data, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
    // .then(res => res.json())
    .then(res => res.text())
    .then(text => (document.getElementById("joke").innerHTML = text))
    .catch(error => console.log(error));
  return await res;
}
// async function getJoke() {
//     const data = "https://icanhazdadjoke.com/";
//     const res = await fetch(data, {
//       method: "GET",
//       headers: {
//         Accept: "application/json"
//       }
//     })
//       .then(res => res.json())
//       .catch(error => console.log(error));
//     return await res;
//   }
//   getJoke().then(responseJSON => {
//       // verander hier nog iets aan je data als je dat zou willen
//       // In dit geval heb je maar 1 grapje
//       const jokeObject = responseJSON
//       putJokeInHTML(jokeObject)
//   })
//   putJokeInHTML(jokeObject){
//     document.getElementById("joke").innerHTML = jokeObject.joke)
//   }
