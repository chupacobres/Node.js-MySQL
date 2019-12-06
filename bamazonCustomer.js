var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",

  port: 3306,

  user: "root",

  password: "19431943",
	database: "bamazon"
});



function purchase() {

	inquirer.prompt([
		{
			type: "input",
			name: "item_id",
			message: "Please enter the Item ID of the item you want to purchase",
		},
		{
			type: "input",
			name: "quantity",
			message: "Enter quantity",
        }
        
	]).then(function(answer) {

		var item = answer.item_id;
		var quantity = answer.quantity;

		var queryStr = "SELECT * FROM products WHERE ?";

		connection.query(queryStr, {item_id: item}, function(err, res) {
			if (err) throw err;

			if (res.length === 0) {
				console.log("Wrong ID, try again!");
				queryAllProducts();

			} else {
				var ProductResponse = res[0];

				if (quantity <= ProductResponse.stock_quantity) {
					console.log("The product is in stock!");

					var updateCatalog = "UPDATE products SET stock_quantity = " + (ProductResponse.stock_quantity - quantity) + " WHERE item_id = " + item;

					connection.query(updateCatalog, function(err, res) {
						if (err) throw err;

						console.log("You just bought a " + ProductResponse.product_name + "! Your total is $"  + ProductResponse.price * quantity);
						console.log("Come back to Bamazon!");
						console.log("\n---------------------------------------------------------------------\n");

                        // connection.end();
                        queryAllProducts();
					})
				} else {
					console.log("Sorry, We don't have enough " + ProductResponse.product_name);
					console.log("Please change the numer of items or chose another one");
					console.log("\n---------------------------------------------------------------------\n");

					queryAllProducts();
				}
			}
		})
	})
}

function queryAllProducts() {

	queryStr = "SELECT * FROM products";

	connection.query(queryStr, function(err, res) {
		if (err) throw err;

		console.log("Bamazon Megastore: ");
		console.log("...................\n");

		var strDisplayInventory = "";
		for (var i = 0; i < res.length; i++) {
			strDisplayInventory = "";
			strDisplayInventory += "Item ID: " + res[i].item_id + "  |  ";
			strDisplayInventory += "Product Name: " + res[i].product_name + "  |  ";
            strDisplayInventory += "Department: " + res[i].department_name + "  |  ";
            strDisplayInventory += "Stock: " + res[i].stock_quantity + "  |  ";
			strDisplayInventory += "Price: $" + res[i].price + "\n";

			console.log(strDisplayInventory);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	purchase();
	})
}

function runBamazon() {
	queryAllProducts();
}

runBamazon();