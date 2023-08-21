function checkURL(inputURL) {
  let regex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  if (regex.test(inputURL)) {
    return true;
  } else {
    return false;
  }
}

export { checkURL };
