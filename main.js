console.log("Loaded");
// 1. Show me how to calculate the average price of all items.
var sum=0;
for(i=0;i<items.length;i++){
	sum=sum+items[i].price
}
items.length
var arv = sum/items.length
console.log(arv)

var answer1=document.getElementById("answer1");
answer1.innerHTML=arv;

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
var Wood= items.filter(function(object){
	return (object.price > 14 && object.price <18)
});
for (i=0; i<Wood.length; i++){
	answer2.innerHTML += "<p>" + Wood[i].title + "</p>";
}
// 3. Which item has a "GBP" currency code? Display it's name and price.
var Gbp= items.filter(function(object){
	return (object.currency_code ==="GBP")
});

for (i=0; i<Gbp.length; i++){
	answer3.innerHTML += Gbp[i].title;
}

// 4.  Display a list of all items who are made of wood.
var woodItems =items.filter(function(object){
	//console.log(object)
	return (object.materials.includes("wood"))
});

 for(i=0; i<woodItems.length; i++){
	answer4.innerHTML += "<p>" + woodItems[i].title + "</p>";
	 }
// 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var materialsItems=items.filter(function(object){
	return (object.materials.length > 8)
});

for(i=0;i < materialsItems.length; i++){
	answer5.innerHTML+= "<p>" + materialsItems[i].title +"</p>";
}

//for(i=0;i < materialsItems.length; i++){
//	console.log(materialsItems[i].length);
//}
// 6. How many items were made by their sellers?

var whoMade=items.filter(function(object){
	return (object.who_made === "i_did")
})

var answer6 = document.getElementById("answer6");
answer6.innerHTML = whoMade.length;
