DELETE from left_fav WHERE food_id = $1
RETURNING *;