const btnDec = document.getElementById("decrease");
const btnInc = document.getElementById("increase");
const number = document.querySelector(".qty > div > p");
const errMsg = document.querySelector(".qty > div > p:nth-child(4)");

const minQtyReached = new Event("minqtyreached");

btnDec.addEventListener("click", function () {
  if (Number(number.textContent) === 0) {
    errMsg.dispatchEvent(minQtyReached);
    return;
  }
  number.textContent = Number(number.textContent) - 1;
});

btnInc.addEventListener("click", () => {
  if (btnDec.disabled) {
    btnDec.disabled = false;
  }

  if (
    // errMsg.checkVisibility({
    // //   visibilityProperty: true,
    // })
    errMsg.checkVisibility()
  ) {
    errMsg.style.display = "none";
  }
  number.textContent = Number(number.textContent) + 1;
});

errMsg.addEventListener("minqtyreached", function () {
  this.style.display = "block";
  btnDec.disabled = true;
});

function colorRandomizer(element) {
  console.log(element);
  function randomizer() {
    const number = Math.floor(Math.random() * 255);
    return number;
  }
  const newColor = `rgb(${randomizer()}, ${randomizer()}, ${randomizer()})`;
  //   console.log(newColor);
  element.style.background = newColor;
}

function colorRandomizer2(event) {
  console.log(event.target);
  function randomizer() {
    const number = Math.floor(Math.random() * 255);
    return number;
  }

  const newColor = `rgb(${randomizer()}, ${randomizer()},${randomizer()})`;
  console.log(newColor);
  event.target.style.background = newColor;
}

document.querySelectorAll(".box").forEach((el) => {
  el.addEventListener("click", function (event) {
    // event.stopPropagation();
    colorRandomizer(this);
  });
});

// document.querySelector(".parent").addEventListener("click", colorRandomizer2);
