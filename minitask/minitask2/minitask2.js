function handleJsonSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const jsonObject = {};

  formData.forEach((value, key) => {
    jsonObject[key] = value;
  });

  const encodedJson = new URLSearchParams(jsonObject).toString();

  document.getElementById("output").textContent = encodedJson;
}
