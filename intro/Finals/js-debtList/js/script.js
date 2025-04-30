const names = document.getElementById("names");
const utang = document.getElementById("utang");
const list = document.getElementById("nakautangs");
const save = document.getElementById("save");

save.addEventListener("click", function () {
  const nameValue = names.value;
  const utangValue = utang.value;

  if (nameValue !== "" && utangValue !== "") {
    const newUtang = document.createElement("li");
    newUtang.textContent = `${nameValue} - \t ${utangValue}`;

    list.appendChild(newUtang);

    names.value = "";
    utang.value = "";
  } else {
    alert("Sino yang may utang, at saan ang utang niya? Gawin mo ulit");
  }
});

