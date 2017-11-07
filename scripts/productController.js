const productMaker = function (newProduct) {
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const imgTag = document.createElement("img")
    const productMarker = document.getElementById("product")

    h2.appendChild(document.createTextNode(newProduct.title))
    p.appendChild(document.createTextNode(newProduct.description))
    p.appendChild(document.createTextNode(newProduct.price))
    p.appendChild(document.createTextNode(newProduct.quantity))
    imgTag.setAttribute("src", newProduct.img)

    productMarker.appendChild(h2)
    productMarker.appendChild(p)
    productMarker.appendChild(imgTag)    
}

module.exports = productMaker


