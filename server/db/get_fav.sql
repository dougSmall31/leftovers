SELECT * 
FROM left_fav 
JOIN left_posts ON left_fav.food_id= left_posts.id
WHERE left_fav.user_id = $1