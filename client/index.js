const baseURL = "http://localhost:4000/api/";

const createFortune = (body) => {
  console.log(body);
  axios.post(`http://localhost:4000/api/fortune/`, body).then((res) => {
    console.log(res.data);
    alert("New fortune added: " + res.data);
  });
};

const destruct = () => {
  axios.delete(`${baseURL}fortune/`).then((res) => {
    alert(res.data);
  });
};

document.getElementById("complimentButton").onclick = function () {
  axios.get(`${baseURL}compliment/`).then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("fortuneButton").onclick = () => {
  axios.get(`${baseURL}fortune/`).then((res) => {
    let fortune = res.data;
    alert(fortune);
  });
};

document.getElementById("pokemonButton").onclick = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=200`).then((res) => {
        console.log(res.data.results)
        let randomI = Math.floor(Math.random()*res.data.results.length)
        console.log(randomI)
        let randomPokemon = res.data.results[randomI].name
        console.log(randomPokemon)
        alert(`You are ${randomPokemon}!`)
    })
}

document.getElementById("addFortune").onsubmit = submitHandler;
document.getElementById("addFortuneBtn").onclick = submitHandler;
document.getElementById("changeThemeButton").onclick = changeThemeFunction;
document.getElementById("deleteFortunes").onclick = selfDestruct;

function changeThemeFunction() {
  document.querySelector(".container").classList.toggle("dark");
  document.querySelector("button").classList.toggle("dark");
  document.getElementById("fortuneButton").classList.toggle("dark");
  document.getElementById("changeThemeButton").classList.toggle("dark");
  document.getElementById("deleteFortunes").classList.toggle("dark");
  document.getElementById("addFortuneBtn").classList.toggle("dark");
}

function submitHandler(e) {
  e.preventDefault();
  console.log("clicked!");

  let newFortune = document.querySelector("#addFortune");

  let bodyObj = {
    newFortune: newFortune.value,
  };
  console.log(bodyObj);
  createFortune(bodyObj);

  newFortune.value = "";
}

function selfDestruct() {
  console.log("self destruct initiated");
  document.querySelector(".container").classList.add("red");
  document.querySelector("button").classList.add("red");
  document.getElementById("fortuneButton").classList.add("red");
  document.getElementById("changeThemeButton").classList.add("red");
  document.getElementById("deleteFortunes").classList.add("red");
  document.getElementById("addFortuneBtn").classList.add("red");
  destruct();
}
