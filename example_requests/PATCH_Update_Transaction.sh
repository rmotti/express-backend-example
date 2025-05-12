$transactionId = "6821382fe96c14de559dd50a" # Substitua pelo ID real
$token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjBjNDUzNTRhZjIyMzYwY2M2NjE0ZCIsImlhdCI6MTc0NzAwNzI1NSwiZXhwIjoxNzQ3MDEwODU1fQ.mtyFpA3V4xhnA-vDTAc-Yz80By8mJW80mHWXJTtJ3AU"

$body = @{
    status = "pending"
    dueDate = "2025-06-29"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "http://localhost:3001/transactions/$transactionId" `
    -Method Patch `
    -Headers @{ "Authorization" = "Bearer $token"; "Content-Type" = "application/json" } `
    -Body $body

$response | Format-List *