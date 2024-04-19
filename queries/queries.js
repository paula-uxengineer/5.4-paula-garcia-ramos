// 1. Display all restaurants in the restaurants collection.
db.restaurants.find();

// 2. Display the restaurant_id, name, borough, and cuisine for all restaurants in the restaurants collection.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });

// 3. Display the restaurant_id, name, borough, and cuisine, excluding the _id field, for all restaurants in the restaurants collection.
db.restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });

// 4. Display the restaurant_id, name, borough, and zipcode, excluding the _id field, for all restaurants in the restaurants collection.
db.restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, 'address.zipcode': 1 });

// 5. Display all restaurants that are in the Bronx.
db.restaurants.find({ borough: 'Bronx' });
