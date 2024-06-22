import { setCartona, Games } from "./games.js";
import { Details } from "./details.js";
// Default Display Games
getGames("mmorpg");
// Choose Games Category
const category = document.querySelectorAll(".nav-item a");
for (let x = 0; x < category.length; x++) {
  category[x].addEventListener("click", function () {
    for (let i = 0; i < category.length; i++) {
      category[i].classList.remove("active");
    }
    category[x].classList.add("active");
    getGames(category[x].innerHTML);
  });
}
// Get Games
async function getGames(info) {
  document.getElementById("loading").classList.remove("d-none");
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c8025297camsh21bebf3b85cf40bp110e4fjsn3b778e1dfe6e",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const res = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${info}`,
    options
  );
  const data = await res.json();
  for (let i = 0; i < data.length; i++) {
    const g = new Games(
      data[i].id,
      data[i].title,
      data[i].platform,
      data[i].thumbnail,
      data[i].short_description.split(" ").slice(0, 10).join(" "),
      data[i].genre
    );
    g.displayGames();
  }
  setCartona("");
  document.getElementById("loading").classList.add("d-none");
}
// Get ID
myRow.addEventListener("click", function (e) {
  const num = Number(e.target.id);
  if (isNaN(num) == false) {
    document.querySelector(".bg-det").classList.replace("d-none", "d-block");
    document.querySelector("main").classList.replace("d-block", "d-none");
    getDetails(num);
  }
});
// Get Details
async function getDetails(gameId) {
  document.getElementById("loading").classList.remove("d-none");
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c8025297camsh21bebf3b85cf40bp110e4fjsn3b778e1dfe6e",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const res = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
    options
  );
  const detail = await res.json();
  const d = new Details(
    detail.title,
    detail.genre,
    detail.platform,
    detail.status,
    detail.description,
    detail.game_url,
    detail.thumbnail
  );
  d.displayDetail();
  document.getElementById("loading").classList.add("d-none");
}
// Close Details
const close = document.getElementById("close");
close.addEventListener("click", function () {
  document.querySelector("main").classList.replace("d-none", "d-block");
  document.querySelector(".bg-det").classList.replace("d-block", "d-none");
});
