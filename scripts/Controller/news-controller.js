import operationOnNews from "../Services/news-operation.js";

//Glue between UI and services
async function loadTheNews() {
  const allNews = await operationOnNews.loadNews();
  //   console.log(allNews);
  for (const news of allNews) {
    newsCard(news);
  }
}
loadTheNews();

{
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}
function newsCard(news) {
  const outputDiv = document.getElementById("all-news");
  const columnDiv = document.createElement("div");
  columnDiv.className = "m-4 ";
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  const img = document.createElement("img");
  img.className = "card-img-top";
  img.src = news.urlToImage;
  cardDiv.appendChild(img);
  cardDiv.style.width = "18rem";
  columnDiv.appendChild(cardDiv);
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardDiv.appendChild(cardBody);
  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.innerText = news.title;
  cardBody.appendChild(h5);
  const p = document.createElement("p");
  p.className = "card-text";
  cardBody.appendChild(p);
  p.innerText = news.description;
  const bookMark = document.createElement("a");
  bookMark.classList = "btn btn-success";
  bookMark.innerHTML = "Add to Bookmark";
  bookMark.setAttribute("news-id", news.id);
  bookMark.addEventListener("click", addToBookMark);
  const groupDiv = document.createElement("div");
  groupDiv.className = "d-flex flex-row justify-content-between ";
  cardBody.appendChild(groupDiv);
  const url = document.createElement("a");
  url.className = "btn btn-outline-warning";
  url.href = news.url;
  url.innerText = "Details";
  groupDiv.appendChild(url);
  /*   const author = document.createElement("span");
  author.innerText = news.author;
  groupDiv.appendChild(author); */
  groupDiv.appendChild(bookMark);
  //   cardBody.appendChild(bookMark);
  outputDiv.appendChild(columnDiv);
}

function addToBookMark() {
  // This is a keyword which contains the current calling object...
  //   Will get the whole anchor tag
  //   console.log(this);
  const currentObject = this;
  const newsId = currentObject.getAttribute("news-id");
  // console.log(newsId);
  operationOnNews.searchNews(newsId);
  displayBookMarkedNews();
}

function displayBookMarkedNews() {
  const bookMarkedNewsArray = operationOnNews.getNewsInBookMarkSection();
  const bookMarkSection = document.getElementById("all-bookmark-news");
  bookMarkSection.innerHTML = "";
  for (let bookMarkedNews of bookMarkedNewsArray) {
    // const li = document.createElement("li");
    // li.innerText = `${bookMarkedNews.title}`;
    // bookMarkSection.appendChild(li);
    bookMarkedNewsCard(bookMarkedNews);
  }
}

function bookMarkedNewsCard(bookMarkedNews) {
  /*  <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */
  const bookMarkSection = document.getElementById("all-bookmark-news");
  // bookMarkSection.innerHTML = "";
  const columnDiv = document.createElement("div");
  columnDiv.className = "m-4 ";
  const cardDiv = document.createElement("div");
  cardDiv.className = "card    mb-3";
  cardDiv.style.maxWidth = "18rem";
  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.innerText = bookMarkedNews.title;
  cardBody.appendChild(h5);
  const p = document.createElement("p");
  p.className = "card-text";
  cardBody.appendChild(p);
  p.innerText = bookMarkedNews.description;
  cardBody.appendChild(p);

  cardDiv.appendChild(cardHeader);
  cardDiv.appendChild(cardBody);
  columnDiv.appendChild(cardDiv);
  bookMarkSection.appendChild(columnDiv);
}
