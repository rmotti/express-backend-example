$transactionId = "6820e761e96c14de559dd4fc" # Substitua pelo ID real
$updatedData = @{
    "title" = "Salário Atualizado"
    "description" = "Com bônus anual"
    "status" = "in-progress"
    "dueDate" = "2023-06-20"
} | ConvertTo-Json -Compress

$response = Invoke-RestMethod -Uri "http://localhost:3001/transactions/$transactionId" -Method Put `
    -ContentType "application/json" `
    -Headers @{ "Authorization" = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjBjNDUzNTRhZjIyMzYwY2M2NjE0ZCIsImlhdCI6MTc0NzAwNzI1NSwiZXhwIjoxNzQ3MDEwODU1fQ.mtyFpA3V4xhnA-vDTAc-Yz80By8mJW80mHWXJTtJ3AU" } `
    -Body $updatedData

$response | Format-List