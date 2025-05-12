$body = @{
    title = "Mesada"
    description = "Mensal"
    status = "completed"
    dueDate = "2025-06-12"
} | ConvertTo-Json

$headers = @{
    "Content-Type" = "application/json"
    "Authorization" = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjBjNDUzNTRhZjIyMzYwY2M2NjE0ZCIsImlhdCI6MTc0NzAwNzI1NSwiZXhwIjoxNzQ3MDEwODU1fQ.mtyFpA3V4xhnA-vDTAc-Yz80By8mJW80mHWXJTtJ3AU"
}

$response = Invoke-RestMethod -Uri "http://localhost:3001/transactions" `
    -Method Post `
    -Headers $headers `
    -Body $body

$response | Format-List