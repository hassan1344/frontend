function handleClick(query) {
  console.log(query);
  var formData = new FormData();
  formData.append("json1", JSON.stringify(query));
  fetch("http://127.0.0.1/playground/members", {
    method: "POST",
    mode: "cors",
    body: formData, // body data type must match "Content-Type" header
  });
}

export { handleClick };
