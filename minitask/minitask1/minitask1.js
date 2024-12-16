function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const encodedData = new URLSearchParams(formData).toString();

  document.getElementById("output").textContent = encodedData;
}
