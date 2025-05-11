$transactionId = "ID_DA_TRANSACAO" # Substitua pelo ID real
$token = "SEU_TOKEN_JWT_AQUI"

$body = @{
    status = "pending"
    dueDate = "2025-06-25"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "http://localhost:3001/transactions/$transactionId" `
    -Method Patch `
    -Headers @{ "Authorization" = "Bearer $token"; "Content-Type" = "application/json" } `
    -Body $body

$response | Format-List *