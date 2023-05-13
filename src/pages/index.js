import "./index.css";
import appearGoblin from "../components/appearGoblin.js";
import clickCell from "../components/clickCell.js";
// console.log(document.querySelector('.cell-active'))

const cells = Array.from(document.querySelectorAll(".cell")); // находим все ячейки игрового поля

setInterval(appearGoblin, 1000);

cells.forEach((e) => e.addEventListener("click", clickCell));