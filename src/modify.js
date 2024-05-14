const getMainHeadingText = () => {
  const H1element = document.querySelector("#main-heading");
  console.log(H1element.textContent);
};

const getAllMainText = () => {
  const mainText = document.querySelectorAll(".main-text");
  const concatenatedText = Array.from(mainText)
    .map((element) => element.textContent)
    .join(",");
  console.log(concatenatedText);
};

const setSubtitleText = () => {
  const subtitle = document.querySelector("h2");
  subtitle.textContent = "This is a subtitle!";
};

const modifyDivClassList = () => {
  const divElement = document.querySelector("#modify-classes");
  // console.log(divElement);
  divElement.classList.remove("bad-class");
  divElement.classList.add("new-class");
};

const addH2 = () => {
  const addNewH2 = document.createElement("h2");
  addNewH2.setAttribute("id", "h2-test");
  addNewH2.append("Another one!");
  document.body.appendChild(addNewH2);
};

const removeOldInfo = () => {
  const element = document.getElementById("old-info");
  element.remove();
};

const makeAlphabet = () => {
  const alph = document.querySelector("#alphabet");
  // console.log(alph)
  const num = alph.dataset.numLetters;
  // const element = document.createElement("ul")
  const Letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // console.log(alph.dataset.numLetters)
  for (let i = 0; i < num; i++) {
    const newListElement = document.createElement("li");
    newListElement.append(`${Letter[i]} is letter #${i + 1} in the alphabet`);
    alph.appendChild(newListElement);
  }
  // document.body.appendChild(element)
};

// const makeBio = () => {
//   const bioDiv = document.querySelector('#my-bio');
//   const bioHTML = `
//       <h2 id="bio-heading">About Me</h2>
//       <p>My name is Zo and I like learn cool new things</p>
//       <h3 id="hobby-heading">My Hobbies</h3>
//       <ul>
//         <li>Running</li>
//         <li>Reading</li>
//         <li>Writing</li>
//       </ul>`.replaceAll(" ", "");

//     // Set the inner HTML of the div element
//     bioDiv.innerHTML = bioHTML;
// };
const makeBio = () => {
  const bioDiv = document.querySelector("#my-bio");
  const bioHTML = `
      <h2 id="bio-heading">About Me</h2>
      <p>My name is Zo and I like learn cool new things</p>
      <h3 id="hobby-heading">My Hobbies</h3>
      <ul>
        <li>Running</li>
        <li>Reading</li>
        <li>Writing</li>
      </ul>`;

  // Set the inner HTML of the div element
  bioDiv.innerHTML = bioHTML;
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main();
