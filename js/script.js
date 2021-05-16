  // Script for input range styling  duration song and volume
  window.onload = function () {
    const el = document.querySelector(".range");
    const el2 = document.querySelector(".volume")
    el.addEventListener("change", (e) => {

      el.style.setProperty("--value", el.value);
      el.style.setProperty("--min", el.min === "" ? "0" : el.min);
      el.style.setProperty("--max", el.max === "" ? "100" : el.max);
      el.style.setProperty("--value", el.value);
    });
    el2.addEventListener('change', (e) => {
      el2.style.setProperty("--value", el2.value);
      el2.style.setProperty("--min", el2.min === "" ? "0" : el2.min);
      el2.style.setProperty("--max", el2.max === "" ? "100" : el2.max);
      el2.style.setProperty("--value", el2.value);
    })

  };