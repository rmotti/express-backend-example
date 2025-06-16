$transactionId = "68213746e96c14de559dd508" # Substitua pelo ID real
$token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjBjNDUzNTRhZjIyMzYwY2M2NjE0ZCIsImlhdCI6MTc0NzAwNzI1NSwiZXhwIjoxNzQ3MDEwODU1fQ.mtyFpA3V4xhnA-vDTAc-Yz80By8mJW80mHWXJTtJ3AU"

$response = Invoke-RestMethod -Uri "http://localhost:3001/transactions/$transactionId" `
    -Method Get `
    -Headers @{ "Authorization" = "Bearer $token" }

# Mostra todos os detalhes
$response | Format-List *