const url = "https://type.fit/api/quotes";

async function handlePromise() {
  try {
    const respObj = await fetch(url);
    const jsonVal = await respObj.json();
    const btn = document.querySelector("button");
    const quote = document.querySelector(".quote");
    const author = document.querySelector(".author");

    btn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * jsonVal.length);
      quote.innerHTML = jsonVal[randomIndex].text;
      author.innerHTML = jsonVal[randomIndex].author;
    });
  } catch (err) {
    alert("Something wrong");
  }
}

handlePromise()
  //   .then((mssg) => {
  //     document.querySelector(".body").innerText = `you have got your quote`;
  //   })
  .catch((err) => {
    alert("Error");
  });
