DELETE from left_posts WHERE user_id=$1 AND id= $2
RETURNING *;