const quotes = document.getElementById("quote-area");

function get() {
  const Url = "https://official-joke-api.appspot.com/jokes/programming/random";
  const result = fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  ).then((res) => res.json());
  const final = result.then((msg) => abc(msg)).catch((err) => console.log(err));

  function abc(datas) {
    quotes.innerText = datas[0].setup;
    quotes.classList.add("add");
    quotes.classList.remove("remove");
  }
}
