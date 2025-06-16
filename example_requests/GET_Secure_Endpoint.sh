$headers = @{
    "Authorization" = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjBjNDUzNTRhZjIyMzYwY2M2NjE0ZCIsImlhdCI6MTc0Njk4Njc0MywiZXhwIjoxNzQ2OTkwMzQzfQ.ZP5DvsPrn4Z9B7U-_0i1ZBxrwfuJ9FaAmLK29ufskUU"
}

$response = Invoke-RestMethod -Uri "http://localhost:3001/secureExampleRoute/" `
    -Method Get `
    -Headers $headers

# Mostra a resposta formatada
$response | ConvertTo-Json -Depth 5