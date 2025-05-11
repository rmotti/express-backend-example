$headers = @{
    "Authorization" = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjBjNDUzNTRhZjIyMzYwY2M2NjE0ZCIsImlhdCI6MTc0Njk4NDM1NCwiZXhwIjoxNzQ2OTg3OTU0fQ.aSJX4W3pVSXIgeGMseKqTqSuCStLG7p7PMI8YdBxheo"
}

$response = Invoke-RestMethod -Uri "http://localhost:3001/secureExampleRoute/" `
    -Method Get `
    -Headers $headers

# Mostra a resposta formatada
$response | ConvertTo-Json -Depth 5