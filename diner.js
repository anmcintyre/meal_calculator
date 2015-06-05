var Diner = function(name){
	this.meals=[];
	this.name = name;
	this.longestDishName = 15;
};

Diner.prototype.addDish = function(name, cost){
	this.meals.push({name: name, cost: cost});
	this.longestDishName = Math.max(this.longestDishName, name.length);
}

Diner.prototype.getSubtotal = function(){
	this.subtotal = 0;
	this.meals.forEach(function(meal, index, array){
		this.subtotal += meal.cost;
	}, this);
	return this.subtotal;
}


//tax is a percentage
//tip is a fixed amount to add to bill
Diner.prototype.printMyBill = function(tax, tip){
	console.log("");
	console.log("    Bill for " + this.name);
	this.meals.forEach(function(meal, index, array){
		console.log(new Array(this.longestDishName-meal.name.length+10).join(' ') + meal.name + " : $" + meal.cost.toFixed(2));
	}, this);	
	console.log(new Array(this.longestDishName +2).join(' ') + "Subtotal : $" + this.subtotal.toFixed(2));
	console.log(new Array(this.longestDishName +7).join(' ') + "Tax : $" + (this.subtotal*tax).toFixed(2));
	console.log(new Array(this.longestDishName +7).join(' ') + "Tip : $" + tip.toFixed(2));
	var total = Number(this.subtotal.toFixed(2)) + Number((this.subtotal*tax).toFixed(2)) + Number(tip.toFixed(2));
	console.log(new Array(this.longestDishName +5).join(' ') + "Total : $" + total.toFixed(2));
}

exports.Diner = Diner;
