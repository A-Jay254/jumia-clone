var phoneOne = {
    phone: "images/iphone11.jpg",
    name: "Iphone 11",
    price: 99111,
    original: 102111,
    itemId: "I001"
}

var phoneTwo = {
    phone: "images/iphone12.jpg",
    name: "Iphone 12",
    price: 99222,
    original: 102222,
    itemId: "I002"
}

var phoneThree = {
    phone: "images/iphone13.jpg",
    name: "Iphone 13",
    price: 99333,
    original: 102333,
    itemId: "I003"
}

var phoneFour = {
    phone: "images/iphone14.jpg",
    name: "Iphone 14",
    price: 99444,
    original: 102444,
    itemId: "I004"
}

var selectId = decodeURIComponent(window.location.search)
var selectedItem = selectId.substring(1)
console.log(selectedItem)

if (selectedItem==phoneOne.itemId){
    document.getElementById("iphone11").src = phoneOne.phone
    document.getElementById("name1").innerText = phoneOne.name
    document.getElementById("price1").innerText = phoneOne.price
    document.getElementById("original1").innerText = phoneOne.original

    var cost = phoneOne.price
    qty(cost)

}
else if (selectedItem==phoneTwo.itemId){
    document.getElementById("iphone11").src = phoneTwo.phone
    document.getElementById("name1").innerText = phoneTwo.name
    document.getElementById("price1").innerText = phoneTwo.price
    document.getElementById("original1").innerText = phoneTwo.original

    var cost = phoneTwo.price
    qty(cost)
}
else if (selectedItem==phoneThree.itemId){
    document.getElementById("iphone11").src = phoneThree.phone
    document.getElementById("name1").innerText = phoneThree.name
    document.getElementById("price1").innerText = phoneThree.price
    document.getElementById("original1").innerText = phoneThree.original

    var cost = phoneThree.price
    qty(cost)
}

else if(selectedItem==phoneFour.itemId){
    document.getElementById("iphone11").src = phoneFour.phone
    document.getElementById("name1").innerText = phoneFour.name
    document.getElementById("price1").innerText = phoneFour.price
    document.getElementById("original1").innerText = phoneFour.original

    var cost = phoneFour.price
    qty(cost)
}

function qty(cost){
    document.getElementById("quantity").onkeyup = function(){
        let quantity = document.getElementById("quantity").value
        let amount = cost
        if (quantity>1){
            let total = quantity * amount
            document.getElementById("total").innerText = total 
        }
        else if (quantity == 1){
            let total = amount
            document.getElementById("total").innerText = total 

        }
        else if (!quantity){
            document.getElementById("total").innerText = "" 
   
        }
        // else{
        //     document.getElementById("total").innerText = "" 

        // }

    }
}
