var Bill = function(){
	this.diners = [];
	this.tax = 0.07;
	this.tip = 0.20;
}

Bill.prototype.addDiner = function(diner){
	this.diners.push(diner);
}

Bill.prototype.calculate = function(){
	this.subtotal=0;
	this.diners.forEach(function(diner, index, array){
		this.subtotal += diner.getSubtotal();
	}, this);

	this.taxAmount = Number((this.subtotal*this.tax).toFixed(2));
	this.tipAmount = Number((this.subtotal*this.tip).toFixed(2));
	this.total = this.subtotal + Number(this.taxAmount) + Number(this.tipAmount);
}

Bill.prototype.printTotalBill = function(){
	console.log("");
	console.log("-------------");
	console.log("");
	console.log("Total Bill");
	this.diners.forEach(function(diner, index, array){
		diner.meals.forEach(function(meal, index, array){
			console.log(new Array(diner.longestDishName-meal.name.length+10).join(' ') + meal.name + " : $" + meal.cost.toFixed(2));
		}, this);
	}, this);
	console.log("                All items: $" + this.subtotal.toFixed(2));
	console.log("              Tax(" + (this.tax*100).toFixed(3) + "%): $" + this.taxAmount);
	console.log("                      Tip: $" + this.tipAmount.toFixed(2));
	console.log("                    Total: $" + this.total.toFixed(2));
	console.log(" ");
}

Bill.prototype.printBreakDown = function(){
	console.log("-------------");
	console.log(" ");
	console.log("Per Person Breakdown");	
	this.diners.forEach(function(diner, index, array){
		diner.printMyBill(this.tax, this.tipAmount/this.diners.length);
	}, this);
}

exports.Bill = new Bill();

