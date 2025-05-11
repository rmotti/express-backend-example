$transactionId = "ID_DA_TRANSACAO" # Substitua pelo ID real
$token = "SEU_TOKEN_JWT_AQUI"

$response = Invoke-RestMethod -Uri "http://localhost:3001/transactions/$transactionId" `
    -Method Get `
    -Headers @{ "Authorization" = "Bearer $token" }

# Mostra todos os detalhes
$response | Format-List *