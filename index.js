addEventListener("DOMContentLoaded", main);

function main() {
  animate();
  setInterval(animate, 6000);
  const search = document.getElementById("search");
  const resultsContainer = document.getElementById("result-section");

  riddles.forEach((e) => {
    const result = document.createElement("div");
    result.setAttribute("class", "result");
    const riddle = e["teka-teki"];
    const answer = e["jawaban"];

    result.innerHTML = `
        <div>
        <p>Teka Teki :</p>
        <p class="teka-teki">${capitalize(riddle)}</p>
        </div>
        <div>
        <p>Jawaban :</p>
        <p class="answer">${answer}</p>
        </div>
        `;
    resultsContainer.appendChild(result);
  });

  search.addEventListener("keyup", () => {
    const searchRiddle = search.value.toLowerCase();
    const riddles = document.querySelectorAll(".result");

    riddles.forEach((riddle) => {
      const isiRiddle = riddle.firstElementChild.textContent.toLowerCase();
      if (isiRiddle.indexOf(searchRiddle) != -1) {
        riddle.setAttribute("style", "display: block;");
      } else {
        riddle.setAttribute("style", "display: none !important;");
      }
    });
  });
}

function capitalize(word) {
  const arr = word.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(" ");
  return str2;
}

function searchRiddle() {
  riddles.forEach((e) => {
    const riddle = e["teka-teki"];
    return riddle;
  });
}

function animate() {
  const span = document.querySelector("header p span");

  setTimeout(() => {
    span.textContent = "MOS";
  }, 0);
  setTimeout(() => {
    span.textContent = "MPLS";
  }, 2000);
  setTimeout(() => {
    span.textContent = "PKKMB";
  }, 4000);
}

function add() {
  const riddle = document.getElementById("add").value;
  const answer = document.getElementById("answer").value;
  riddles.push({
    "teka-teki": riddle,
    jawaban: answer,
  });
  console.log(riddles[riddles.length - 1]);
  alert("Teka teki berhasil ditambahkan");
}
