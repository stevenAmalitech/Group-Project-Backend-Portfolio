-- drop database if exists backend_portfolio;
create database backend_portfolio;

create table users(
  id serial primary key,
  first_name text not null,
  last_name text not null,
  email varchar(255) unique not null,
  password varchar(255) not null,
  telephone char(10),
  address text
);

create table products (
  id serial primary key,
  name varchar(255) not null,
  description text,
  sku varchar(10) not null,
  price int not null
);

create table product_inventory(
  id serial primary key,
  product_id int references products(id) not null,
  quantity int not null,
  created_at timestamp default current_timestamp not null
);

create table orders(
  id serial primary key,
  user_id int references users(id) not null,
  items json not null,
  total int not null,
  created_at timestamp default current_timestamp not null
);