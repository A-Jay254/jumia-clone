var phoneOne = {
    phone: "images/iphone11.jpg",
    name: "Iphone 11",
    price: 99111,
    original: 102111,
    itemId: "I001"
}
document.getElementById("iphone11").src = phoneOne.phone
document.getElementById("name1").innerText = phoneOne.name
document.getElementById("price1").innerText = phoneOne.price
document.getElementById("original1").innerText = phoneOne.original

var phoneTwo = {
    phone: "images/iphone12.jpg",
    name: "Iphone 12",
    price: 99222,
    original: 102222,
    itemId: "I002"
}
document.getElementById("iphone12").src = phoneTwo.phone
document.getElementById("name2").innerText = phoneTwo.name
document.getElementById("price2").innerText = phoneTwo.price
document.getElementById("original2").innerText = phoneTwo.original

var phoneThree = {
    phone: "images/iphone13.jpg",
    name: "Iphone 13",
    price: 99333,
    original: 102333,
    itemId: "I003"
}
document.getElementById("iphone13").src = phoneThree.phone
document.getElementById("name3").innerText = phoneThree.name
document.getElementById("price3").innerText = phoneThree.price
document.getElementById("original3").innerText = phoneThree.original

var phoneFour = {
    phone: "images/iphone14.jpg",
    name: "Iphone 14",
    price: 99444,
    original: 102444,
    itemId: "I004"
}
document.getElementById("iphone14").src = phoneFour.phone
document.getElementById("name4").innerText = phoneFour.name
document.getElementById("price4").innerText = phoneFour.price
document.getElementById("original4").innerText = phoneFour.original


document.getElementById("phoneone").onclick = function (){
    window.location.href = "select.html" + "?" + phoneOne.itemId
}

document.getElementById("phonetwo").onclick = function (){
    window.location.href = "select.html" + "?" + phoneTwo.itemId
}

document.getElementById("phonethree").onclick = function (){
    window.location.href = "select.html" + "?" + phoneThree.itemId
}

document.getElementById("phonefour").onclick = function (){
    window.location.href = "select.html" + "?" + phoneFour.itemId
}
