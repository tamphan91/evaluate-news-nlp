async function handleSubmit(e) {
  e.preventDefault();
  const url = document.getElementById("url").value;
  Client.checkUrl(url);
  if (Client.checkUrl(url)) {
    await fetch("/add", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: formText }),
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

export { handleSubmit };
