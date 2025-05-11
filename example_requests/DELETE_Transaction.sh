$transactionId = "ID_DA_TRANSACAO" # Substitua pelo ID real
$token = "SEU_TOKEN_JWT_AQUI"

try {
    $response = Invoke-RestMethod -Uri "http://localhost:3001/transactions/$transactionId" `
        -Method Delete `
        -Headers @{ "Authorization" = "Bearer $token" }
    
    if ($response -eq $null) {
        Write-Host "✅ Transação deletada com sucesso!" -ForegroundColor Green
    }
}
catch {
    Write-Host "Erro ao deletar:" -ForegroundColor Red
    Write-Host "Status Code: $($_.Exception.Response.StatusCode.value__)"
    Write-Host "Mensagem: $($_.ErrorDetails.Message)"
}