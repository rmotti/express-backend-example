Invoke-RestMethod -Method Post `
  -Uri "http://localhost:3001/users/login" `
  -ContentType "application/json" `
  -Body '{
    "username": "rodrigo.motti",
    "email": "rodrigomotti@gmail.com",
    "password": "senha123"
  }'

  $response.token