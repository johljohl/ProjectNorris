const cnApi = "https://api.chucknorris.io/jokes/random";

const norrisJoke = document.querySelector(".jokes");

let sounds = new Audio("components/sound/lol2.wav");

function newJokeClick() {
  getChuckNorris();
}

async function getChuckNorris() {
  let data = await fetch(cnApi);
  console.log(data.status);
  if (data.ok) {
    console.log("system ready");
    json = await data.json();
    console.log(json);
    console.log(json.value);
    drawChuck();
  }
}

function drawChuck() {
  joke = json.value;
  sounds.play();
  norrisJoke.innerHTML = `${joke}`;
}

function init() {
  console.log("connected");
  const newJoke = document.getElementById("newJoke");
  newJoke.addEventListener("click", newJokeClick);
}

init();
