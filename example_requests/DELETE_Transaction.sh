$transactionId = "6820e761e96c14de559dd4fc" # Substitua pelo ID real
$token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjBjNDUzNTRhZjIyMzYwY2M2NjE0ZCIsImlhdCI6MTc0NzAwNzI1NSwiZXhwIjoxNzQ3MDEwODU1fQ.mtyFpA3V4xhnA-vDTAc-Yz80By8mJW80mHWXJTtJ3AU"

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