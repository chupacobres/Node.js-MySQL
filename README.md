# <h1>Node.js-MySQL</h1>
A storefront Amazon like using MySQL and Node.js
A table inside the Schema Bamazon (running on the local host) contains these columns:
1 item_id (unique)
2 product_name
3 department_name
4 price
5 stock_quantity

The table contains 10 products that a customer will be able to buy. Using the terminal as a UI, 2 questions are asked:
1 product to buy
2 quantity

If there is not enough inventory, user gets a prompt. If there's enough product, the user gets a message that the product was purchased. With every purchase, the inventory updates.

To run this app, these npm packages need to be installed:
- mysql
- inquirer

The code within bamazon.sql will need to be run using mysql workbench or any visual tool for mysql architects.

# The App in action

![](bamazon.gif)
