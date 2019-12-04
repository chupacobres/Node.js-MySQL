DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price FLOAT(45) NOT NULL,
  stock_quantity INT(255) NOT NULL,
  PRIMARY KEY (item_id)
);
INSERT INTO products (
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Charmander", "Toys", 35, 12);
INSERT INTO products (
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Picachu", "Toys", 35, 30);
INSERT INTO products (
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Mazinger Z", "Toys", 750, 3);
INSERT INTO products (
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  (
    "Gibson Les Paul",
    "Musical Instruments",
    1760,
    3
  );
INSERT INTO products (
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Stradivarius", "Musical Instruments", 45000, 1);
INSERT INTO products (
    product_name,
    department_name,
    price,
    stock_quantity
  )
VALUES
  ("Clase Azul", "Liquor", 85, 30);