$env:NEXT_DISABLE_TURBOPACK="1"
Set-Location $PSScriptRoot
npm install
npm run dev
