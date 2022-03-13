function getComputerChoices() {
  const comp = Math.random();
  if (comp < 0.34) return "gunting";
  if (comp >= 0.34 && comp < 0.67) return "batu";
  return "kertas";
}

function getResults(comp, player) {
  if (player == comp) return "SERI";
  if (player == "batu") return comp == "gunting" ? "MENANG" : "KALAH";
  if (player == "gunting") return comp == "kertas" ? "MENANG" : "KALAH";
  if (player == "kertas") return comp == "batu" ? "MENANG" : "KALAH";
}

function roll() {
  const imgComputer = document.querySelector(".img-computer");
  const image = ["gunting", "kertas", "batu"];
  let i = 0;
  const timeStart = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - timeStart > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "bahan/minigames/" + image[i++] + ".JPG");
    if (i == image.length) i = 0;
  }, 100);
}

const selectGunting = document.querySelector(".gunting");
selectGunting.addEventListener("click", function () {
  const computerChoices = getComputerChoices();
  const playerChoices = selectGunting.className;
  const result = getResults(computerChoices, playerChoices);

  roll();

  setTimeout(function () {
    const imgComputer = document.querySelector(".img-computer");
    imgComputer.setAttribute("src", "bahan/minigames/" + computerChoices + ".JPG");

    const info = document.querySelector(".info");
    info.innerHTML = result;
  }, 1000);
});

const selectBatu = document.querySelector(".batu");
selectBatu.addEventListener("click", function () {
  const computerChoices = getComputerChoices();
  const playerChoices = selectBatu.className;
  const result = getResults(computerChoices, playerChoices);

  roll();

  setTimeout(function () {
    const imgComputer = document.querySelector(".img-computer");
    imgComputer.setAttribute("src", "bahan/minigames/" + computerChoices + ".JPG");

    const info = document.querySelector(".info");
    info.innerHTML = result;
  }, 1000);
});

const selectKertas = document.querySelector(".kertas");
selectKertas.addEventListener("click", function () {
  const computerChoices = getComputerChoices();
  const playerChoices = selectKertas.className;
  const result = getResults(computerChoices, playerChoices);

  roll();

  setTimeout(function () {
    const imgComputer = document.querySelector(".img-computer");
    imgComputer.setAttribute("src", "bahan/minigames/" + computerChoices + ".JPG");

    const info = document.querySelector(".info");
    info.innerHTML = result;
  }, 1000);
});
