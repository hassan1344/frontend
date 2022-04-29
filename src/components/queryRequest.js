import React, { Component, useState } from "react";

function handleClick(query) {
  var formData = new FormData();
  formData.append("json1", JSON.stringify(query));
  fetch("http://-----------:8080/", {
    method: "POST",
    mode: "cors",
    body: formData, // body data type must match "Content-Type" header
  });
}
export { handleClick };
