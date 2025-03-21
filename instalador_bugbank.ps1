
$REPO_URL = "https://github.com/jhonatasmatos/bugbank-ui.git"
$PROJECT_DIR = "bugbank-ui"

if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "Este script requer permissoes de administrador. Por favor, execute o PowerShell como administrador."
    exit 1
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git nao esta instalado. Por favor, instale o Git e adicione-o ao PATH do sistema."
    Write-Host "Voce pode baixar o Git em: https://git-scm.com/"
    exit 1
}

$gitPath = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitPath) {
    Write-Host "Git nao esta instalado ou nao esta no PATH do sistema."
    Write-Host "Por favor, instale o Git e adicione-o ao PATH."
    Write-Host "Voce pode baixar o Git em: https://git-scm.com/"
    exit 1
} else {
    Write-Host "Git encontrado: $($gitPath.Source)"
}

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Node.js nao esta instalado. Por favor, instale o Node.js e o npm."
    Write-Host "Voce pode baixar o Node.js em: https://nodejs.org/"
    exit 1
}

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "npm nao esta instalado. Por favor, instale o Node.js e o npm."
    Write-Host "Voce pode baixar o Node.js em: https://nodejs.org/"
    exit 1
}

Write-Host "Node.js e npm encontrados."

function Install-Yarn {
    if (-not (Get-Command yarn -ErrorAction SilentlyContinue)) {
        Write-Host "Yarn nao esta instalado. Instalando Yarn globalmente..."
        npm install --global yarn
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Erro: Falha ao instalar o Yarn."
            exit 1
        }
        Write-Host "Yarn instalado com sucesso."
    } else {
        Write-Host "Yarn ja esta instalado."
    }
}

function Show-Progress {
    param (
        [string]$Activity,
        [string]$Status,
        [int]$PercentComplete,
        [int]$SecondsRemaining
    )
    Write-Progress -Activity $Activity -Status $Status -PercentComplete $PercentComplete -SecondsRemaining $SecondsRemaining
}

function Check-Success {
    param (
        [string]$Mensagem
    )
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Erro: $Mensagem falhou."
        exit 1
    }
}

Write-Host "Clonando o repositorio..."
Show-Progress -Activity "Clonando repositorio" -Status "Aguarde..." -PercentComplete 0 -SecondsRemaining 10
git clone $REPO_URL $PROJECT_DIR
Check-Success "Clonagem do repositorio"
Show-Progress -Activity "Clonando repositorio" -Status "Concluido!" -PercentComplete 100 -SecondsRemaining 0

Write-Host "Acessando a pasta do projeto..."
Set-Location $PROJECT_DIR
Check-Success "Acesso a pasta do projeto"

Write-Host "Instalando dependecias com Yarn..."
yarn 
Check-Success "Instalacao das dependencias"

Write-Host "Iniciando o servidor do BugBank..."
yarn dev