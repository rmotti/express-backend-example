try {
    $token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjBjNDUzNTRhZjIyMzYwY2M2NjE0ZCIsImlhdCI6MTc0NzAwNzI1NSwiZXhwIjoxNzQ3MDEwODU1fQ.mtyFpA3V4xhnA-vDTAc-Yz80By8mJW80mHWXJTtJ3AU"
    $headers = @{ "Authorization" = "Bearer $token" }
    
    $response = Invoke-RestMethod -Uri "http://localhost:3001/transactions" `
        -Method Get `
        -Headers $headers
    
    # Mostra em formato de tabela
    $response | Select-Object _id, title, status, dueDate | Format-Table -AutoSize
    
    # Ou mostra completo em JSON
    $response | ConvertTo-Json -Depth 5 | Write-Host
}
catch {
    Write-Host "Erro na requisição:" -ForegroundColor Red
    Write-Host "Status Code: $($_.Exception.Response.StatusCode.value__)"
    Write-Host "Mensagem: $($_.ErrorDetails.Message)"
}