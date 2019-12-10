# Node.js-MySQL
<p>A storefront Amazon like using MySQL and Node.js</p>
A table inside the Schema Bamazon (running on the local host) contains these columns:
- item_id (unique)
- product_name
- department_name
- price
- stock_quantity

The table contains 10 products that a customer will be able to buy. Using the terminal as a UI, 2 questions are asked:
- product to buy
- quantity

If there is not enough inventory, user gets a prompt. If there's enough product, the user gets a message that the product was purchased. With every purchase, the inventory updates.

To run this app, these npm packages need to be installed:
- mysql
- inquirer

The code within bamazon.sql will need to be run using mysql workbench or any visual tool for mysql architects.

# The App in action

![](bamazon.gif)
