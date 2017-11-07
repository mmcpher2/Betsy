const reviewMaker = function (newReview) {
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const reviewMarker = document.getElementById("reviews")    

    h2.appendChild(document.createTextNode(newReview.title))
    p.appendChild(document.createTextNode(newReview.description))

    reviewMarker.appendChild(h2)
    reviewMarker.appendChild(p)
}

module.exports = reviewMaker