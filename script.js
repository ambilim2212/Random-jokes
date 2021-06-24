const button = document.querySelector("button");
const jokeText = document.querySelector("p");

document.addEventListener("DOMContentLoaded", getJokes)

// button.addEventListener("click", getJokes());

// async function getJokes()
// {
//    const jokeData = fetch( 'https://icanhazdadjoke.com/', {
//         headers: {
//            'Accept': 'application/json'
//         }
//    }); 
//    const jokeObj = await jokeData.json();
//    jokeText.innerHTML = jokeObj.joke;

// }

button.addEventListener("click", getJokes);

function getJokes  () {
   const jokeData = fetch(`https://api.chucknorris.io/jokes/random`)
   .then(res => res.json())
   .then(data => {
      let jokes = data.value;
      console.log(data);
      jokeText.innerHTML = jokes;
   })
}
 