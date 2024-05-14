const addH1 = () => {
  const h1Element = document.createElement("h1");
  h1Element.setAttribute("id", "main-heading");
  h1Element.append("Hello World!");
  document.body.appendChild(h1Element);

  const pElement = document.createElement("p");
  pElement.setAttribute("id", "main-text");
  pElement.classList.add("boring-text");
  pElement.textContent = "Look, I'm some text!";
  document.body.appendChild(pElement);
};

const main = () => {
  // read
  addH1();
};

// invoke the runner!
main();
