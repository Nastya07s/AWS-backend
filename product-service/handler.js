'use strict';

const products = [
  {
    "count": 4,
    "description": "Jane Austen (1813)",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    "price": 2.4,
    "title": "Pride and Prejudice"
  },
  {
    "count": 6,
    "description": "Harper Lee (1960)",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a0",
    "price": 10,
    "title": "To Kill A Mockingbird"
  },
  {
    "count": 7,
    "description": "F. Scott Fitzgerald (1925)",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a2",
    "price": 23,
    "title": "The Great Gatsby"
  },
  {
    "count": 12,
    "description": "Gabriel García Márquez (1967)",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    "price": 15,
    "title": "One Hundred Years of Solitude"
  },
  {
    "count": 7,
    "description": "Truman Capote (1965)",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    "price": 23,
    "title": "In Cold Blood"
  },
  {
    "count": 8,
    "description": "Jean Rhys (1966)",
    "id": "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    "price": 15,
    "title": "Wide Sargasso Sea"
  },
  {
    "count": 2,
    "description": "Aldous Huxley (1932)",
    "id": "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    "price": 23,
    "title": "Brave New World"
  },
  {
    "count": 3,
    "description": "Dodie Smith (1948)",
    "id": "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    "price": 15,
    "title": "I Capture the Castle"
  }
] 

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify(
      products
    ),
  };
};

module.exports.getProductsById = async (event) => {
  const {productId} = JSON.parse(event.event.queryStringParameters)
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify(
      products.find((product) => product.id === productId)     
    ),
  };
};

module.exports.getCart = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
  };
};
