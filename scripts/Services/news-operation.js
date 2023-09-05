import News from "../Model/news-class.js";
import { networkCall } from "./news-api-client.js"; //getting network call
const operationOnNews = {
  localNewsArray: [], //Key-Value
  async loadNews() {
    const newsFromCall = await networkCall();
    const newsArray = newsFromCall["articles"];
    const allNewsArray = newsArray.map((news) => {
      const currentNews = new News(
        news.source.id,
        news.source.name,
        news.author,
        news.title,
        news.description,
        news.urlToImage,
        news.url
      );
      return currentNews;
    });
    // console.log(allNewsArray);
    this.localNewsArray = allNewsArray;
    return allNewsArray; //wrap in promise
  },
  searchNews(newsId) {
    const newsObject = this.localNewsArray.find(
      (currentNewsObject) => currentNewsObject.id == newsId
    );
    // console.log(newsObject);
    newsObject.isBookMarked = true;
  },

  getNewsInBookMarkSection() {
    console.log(this.localNewsArray);
    const filteredNews = this.localNewsArray.filter(
      (news) => news.isBookMarked
    );
    console.log(filteredNews);
    return filteredNews;
  },
};

export default operationOnNews;
