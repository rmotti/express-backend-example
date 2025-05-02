curl --request POST \
  --url 'http://localhost:3001/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "newuser2",
    "password": "securepassword"
}'