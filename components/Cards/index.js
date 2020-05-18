// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector(".cards-container");
let articlesArray = [];
let individualArticlesArray = [];
const articles_url = "https://lambda-times-backend.herokuapp.com/articles";

axios.get(articles_url)
.then((result) => {
  Object.entries(result.data.articles).map((k) => {
    articlesArray.push(
      Object.entries(k[1]).map((k) => {
        individualArticlesArray.push(k[1]);
      })
    );
  });
  individualArticlesArray.map((result) => {
    cardsContainer.appendChild(cardCreator(result));
  });
});

const cardCreator = (el) => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const authorInfo = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const author = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  authorInfo.classList.add("author");
  imgContainer.classList.add("img-container");
  
  headline.textContent = `${el.headline}`;
  image.src = `${el.authorPhoto}`;
  author.textContent = `By ${el.authorName}`;
  card.append(headline,authorInfo);
  authorInfo.append(imgContainer,author);
  imgContainer.appendChild(image);

  return card;
};