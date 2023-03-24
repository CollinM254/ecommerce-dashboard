// This is a class to be used for Blog post objects.
export default class BlogPost {
  constructor(postID, title, content, author, date, category, imagePath) {
    this.postID = postID;
    this.title = title;
    this.content = content;
    this.author = author;
    this.date = date;
    this.category = category;
    this.imagePath = imagePath;
  }
}
