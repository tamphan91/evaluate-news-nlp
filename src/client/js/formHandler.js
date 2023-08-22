async function handleSubmit(e) {
  e.preventDefault();
  const url = document.getElementById("url").value;
  if (Client.checkURL(url)) {
    await fetch("http://localhost:8081/analyze", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((result) => {
        try {
          document.getElementById("agreement").innerHTML = result.agreement;
          document.getElementById("subjectivity").innerHTML =
            result.subjectivity;
          document.getElementById(
            "confidence"
          ).innerHTML = `Confidence Rating: ${result.confidence}`;
          document.getElementById("irony").innerHTML = result.irony;
        } catch (e) {
          console.log("error", e);
        }
      })
      .catch((e) => console.log("error", e));
  } else {
    alert("Not a valid url! Please Re-try!");
  }
}

function handleSubmit2(event) {
  event.preventDefault()
  fetch('http://localhost:8081/test')
  .then(res => res.json())
  .then(function(res) {
      console.log('res', res);
  })
}

export { handleSubmit, handleSubmit2 };
