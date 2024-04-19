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

// 6. Display the first 5 restaurants that are in the Bronx.
db.restaurants.find({ borough: 'Bronx' }).limit(5);

// 7. Display the next 5 restaurants after skipping the first 5 that are in the Bronx.
db.restaurants.find({ borough: 'Bronx' }).skip(5).limit(5);

// 8. Display restaurants that have some score greater than 90.
db.restaurants.find({ 'grades.score': { $gt: 90 } });

// 9. Display restaurants that have a score greater than 80 but less than 100.
db.restaurants.find({ 'grades.score': { $gt: 80, $lt: 100 } });

// 10. Display restaurants that are located at a longitude less than -95.754168.
db.restaurants.find({ 'address.coord.0': { $lt: -95.754168 } });

// 11. Display MongoDB restaurants that do not cook 'American' food and have some score greater than 70 and a longitude less than -65.754168.
db.restaurants.find({ cuisine: { $ne: 'American ' }, 'grades.score': { $gt: 70 }, 'address.coord.0': { $lt: -65.754168 } });

// 12. Display restaurants that do not cook 'American' food, have some score greater than 70, and are located at longitudes less than -65.754168. Note: Perform this query without using the $and operator.
db.restaurants.find({ cuisine: { $ne: 'American ' }, 'grades.score': { $gt: 70 }, 'address.coord.0': { $lt: -65.754168 } });

// 13. Display restaurants that do not cook 'American' food, have some 'A' grade, and are not in Brooklyn. Documents should be shown according to cuisine in descending order.
db.restaurants.find({ cuisine: { $ne: 'American ' }, 'grades.grade': 'A', borough: { $ne: 'Brooklyn' } }).sort({ cuisine: -1 });

// 14. Display restaurant_id, name, borough, and cuisine for those restaurants that contain 'Wil' in the first three letters of their name.
db.restaurants.find({ name: { $regex: '^Wil' } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });

// 15. Display restaurant_id, name, borough, and cuisine for those restaurants that contain 'ces' in the last three letters of their name.
db.restaurants.find({ name: { $regex: 'ces$' } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });

// 16. Display restaurant_id, name, borough, and cuisine for those restaurants that contain 'Reg' anywhere in their name.

// 17. Display restaurants that belong to the Bronx and prepare American or Chinese dishes.

// 18. Display restaurant_id, name, borough, and cuisine for those restaurants that belong to Staten Island, Queens, Bronx, or Brooklyn.

// 19. Display restaurant_id, name, borough, and cuisine for those restaurants that do not belong to Staten Island, Queens, Bronx, or Brooklyn.

// 20. Display restaurant_id, name, borough, and cuisine for those restaurants that receive a score less than 10.

// 21. Display restaurant_id, name, borough, and cuisine for those restaurants that prepare seafood, except if they are American, Chinese, or the restaurant name starts with 'Wil'.

// 22. Display restaurant_id, name, and grades for those restaurants that receive a grade of "A" and a score of 11 with an ISODate "2014-08-11T00:00:00Z".

// 23. Display restaurant_id, name, and grades for those restaurants where the second element of the grades array contains a grade of "A" and a score of 9 with an ISODate "2014-08-11T00:00:00Z".

// 24. Display restaurant_id, name, address, and geographic location for those restaurants where the second element of the coord array contains a value between 42 and 52.

// 25. Display restaurants organized by name in ascending order.

// 26. Display restaurants organized by name in descending order.

// 27. Display restaurants organized by cuisine name in ascending order and borough in descending order.

// 28. Display whether addresses contain street names.

// 29. Display all documents in the restaurants collection where the values of the coord field are of Double type.

// 30. Display restaurant_id, name, and grade for those restaurants that return 0 as the remainder after dividing some of their scores by 7.

// 31. Display the name of the restaurant, borough, longitude, latitude, and cuisine for those restaurants that contain 'mon' anywhere in their name.

// 32. Display the name of the restaurant, borough, longitude, latitude, and cuisine for those restaurants that contain 'Mad' as the first three letters of their name.