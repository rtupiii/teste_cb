$TEST_DIR = "test"

if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "Este script requer permissoes de administrador. Por favor, execute o PowerShell como administrador."
    exit 1
}

Set-Location $TEST_DIR

if (-not (Test-Path "node_modules/cypress")) {
    Write-Host "Cypress não esta instalado. Instalando Cypress e dependencias..."
    npm install cypress --save-dev
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Erro: Falha ao instalar o Cypress."
        exit 1
    }
} else {
    Write-Host "Cypress ja esta instalado."
}

Write-Host "Abrindo o Cypress Runner..."
npx cypress open

Write-Host "Cypress Runner foi aberto. Agora voce pode executar seus testes!"