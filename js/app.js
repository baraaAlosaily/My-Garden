let formSec = document.getElementById("form");
let tableSec = document.getElementById("table");

Garden.all = [];

if (!localStorage.getItem("newform")) {
  localStorage.setItem("newform", Garden.all);
  createHeader();
} else {
  createHeader();
  Garden.all = JSON.parse(localStorage.getItem("newform"));
  render();
}
imag = [
  {
    src: "./img/Alstroemerias.jpeg",
  },
  {
    src: "./img/Alstroemerias.jpeg",
  },
  { src: "./img/Alstroemerias.jpeg" },
  { src: "./img/Alstroemerias.jpeg" },
  { src: "./img/Alstroemerias.jpeg" },
  { src: "./img/Alstroemerias.jpeg" },
  { src: "./img/Alstroemerias.jpeg" },
];

function Garden(name, img, sea) {
  this.name = name;
  this.img = img;
  this.sea = sea;
  Garden.all.push(this);
}

formSec.addEventListener("submit", addNewRose);

function addNewRose(e) {
  e.preventDefault();
  name = imag.src;
  img = e.target.img.value;
  sea = e.target.sea.value;

  new Garden(name, img, sea);
  localStorage.setItem("newform", JSON.stringify(Garden.all));
  render();
}

function createHeader() {
  tableSec.innerHTML = `
  <tr>
  <th>#</th>
  <th>Image</th>
  <th>Name</th>
  <th>Season</th>
  </tr>`;
}

function render() {
  newArray = JSON.parse(localStorage.getItem("newform"));
  total = "";
  createHeader();
  for (let index = 0; index < newArray.length; index++) {
    myCode = `<tr>
  <td><span id='${index}'>x</span></td>
  <td>${newArray[index].name}</td>
  <td>${newArray[index].img}</td>
  <td>${newArray[index].sea}</td>
  </tr>`;
    total += myCode;
  }
  tableSec.innerHTML += total;
}

tableSec.addEventListener("click", removeitem);
function removeitem(e) {
  if (e.target.tagName == "SPAN") {
    newArray.splice(e.target.id, 1);
    localStorage.setItem("newform", JSON.stringify(newArray));
    Garden.all = newArray;
    render();
  }
}

function clearAll() {
  Garden.all = [];
  localStorage.setItem("newform", JSON.stringify(Garden.all));
  render();
}
