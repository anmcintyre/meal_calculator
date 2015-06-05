var bill = require("./bill").Bill;
var Diner = require("./diner");

//////////////////////////////////
//Add diners and their dishes
var andrea = new Diner.Diner("Andrea");
andrea.addDish("hamburger", 2.50);
andrea.addDish("fries", 2.00);
andrea.addDish("drink", 2.25);
bill.addDiner(andrea);


var matt = new Diner.Diner("Matt");
matt.addDish("fish", 3.00);
matt.addDish("fries", 2.00);
matt.addDish("drink", 2.25);
bill.addDiner(matt);

var alex = new Diner.Diner("Alex");
alex.addDish("spaghetti", 2.75);
alex.addDish("breadsticks", 2.00);
alex.addDish("drink", 2.25);
bill.addDiner(alex);

var josh = new Diner.Diner("Josh");
josh.addDish("chicken", 2.25);
josh.addDish("fries", 2.00);
josh.addDish("drink", 2.25);
bill.addDiner(josh);

/////////////////////////////////

bill.calculate();

bill.printTotalBill();

bill.printBreakDown();
