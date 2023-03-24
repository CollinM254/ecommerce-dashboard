export default class Product {
  constructor(
    sku,
    name,
    description,
    price,
    category,
    tags,
    colorOptions,
    sizeOptions,
    reviewScore,
    reviews,
    mainImagePath,
    allImages,
  ) {
    this.sku = sku;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.tags = tags;
    this.colorOptions = colorOptions;
    this.sizeOptions = sizeOptions;
    this.reviewScore = reviewScore;
    this.reviews = reviews;
    this.mainImagePath = mainImagePath;
    this.allImages = allImages;
  }

  // Function for updating reviewScore per latest added review.
  updateReviewScore() {}

  // Function for updating reviews with latest review.
  addReview(newReview) {}
}
