const navBar = require("./navigationBar")
const product = require("./productFactory")
const productMaker = require("./productController")
const reviewsArray = require("./reviewFactory")
const reviewMaker = require("./reviewController")

navBar()
productMaker(product)
reviewsArray.forEach(reviewMaker)