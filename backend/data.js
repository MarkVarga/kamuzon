import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "testAdmin",
      email: "testadmin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "testUser",
      email: "testuser@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "hight quality shirt",
    },
    {
      name: "Adidas Slim shirt",
      slug: "adidas-slim-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 150,
      countInStock: 7,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "great quality shirt",
    },
    {
      name: "UnderArmor pants",
      slug: "underamor-pants",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 220,
      countInStock: 0,
      brand: "UnderArmour",
      rating: 4.5,
      numReviews: 14,
      description: "hight quality pants",
    },
    {
      name: "Adidas pants",
      slug: "adidas-pants",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 250,
      countInStock: 17,
      brand: "Adidas",
      rating: 4.3,
      numReviews: 19,
      description: "hight quality adidas pants",
    },
  ],
};

export default data;
