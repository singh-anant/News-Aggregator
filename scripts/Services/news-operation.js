import News from "../Model/news-class.js";
import { networkCall } from "./news-api-client.js"; //getting network call
const operationOnNews = {
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
    return allNewsArray; //wrap in promise
  },
};

export default operationOnNews;
