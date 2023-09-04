// Blue-Print of the news class
export default class News {
  constructor(id, name, author, title, description, urlToImage, url) {
    // this-keyword
    // hold the current calling object refernce
    this.id = id;
    this.name = name;
    this.author = author;
    this.title = title;
    this.description = description;
    this.urlToImage = urlToImage;
    this.url = url;
  }
}
