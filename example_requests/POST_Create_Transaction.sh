$body = @{
    title = "Fatura de energia"
    description = "Pagamento mensal"
    status = "completed"
    dueDate = "2025-05-21"
} | ConvertTo-Json

$headers = @{
    "Content-Type" = "application/json"
    "Authorization" = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjBjNDUzNTRhZjIyMzYwY2M2NjE0ZCIsImlhdCI6MTc0Njk4NDM1NCwiZXhwIjoxNzQ2OTg3OTU0fQ.aSJX4W3pVSXIgeGMseKqTqSuCStLG7p7PMI8YdBxheo"
}

$response = Invoke-RestMethod -Uri "http://localhost:3001/transactions" `
    -Method Post `
    -Headers $headers `
    -Body $body

$response | Format-List