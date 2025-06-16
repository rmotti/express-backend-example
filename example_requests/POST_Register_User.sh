curl -Method POST `
  -Uri 'http://localhost:3001/users/register' `
  -Headers @{ 'Content-Type' = 'application/json' } `
  -Body '{
    "username": "rodrigo.motti",
    "email": "rodrigomotti@gmail.com",
    "password": "senha123"
  }'