export default class Review {
  constructor(userId, productSku, score, description, timeStamp) {
    this.userId = userId;
    this.productSku = productSku;
    this.score = score;
    this.description = description;
    this.timeStamp = timeStamp;
  }
}
