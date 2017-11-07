
const navBar = function () { 

    const navigation = [  
        {
            "display": "Betsy"
        },
        {
            "display": "Categories"
        },
        {
            "display": "Orders"
        },
        {
            "display": "Log Out"
        }
    ]
    
    const navBarList = document.getElementById("navList")

    navigation.forEach(function (listItem) {
        const li = document.createElement("li")
        const navLink = document.createElement("a")
        navLink.href = "#"
        navLink.appendChild(document.createTextNode(listItem.display))
        li.appendChild(navLink)
        navBarList.appendChild(li)
    })
}

module.exports = navBar

