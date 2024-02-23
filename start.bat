@ECHO OFF

SET "APP_CERT_PATH=%USERPROFILE%\.aspnet\https"

if "%1"=="--clean" (
    DEL "%APP_CERT_PATH%\appcert.pfx"
)

IF NOT EXIST "%APP_CERT_PATH%\appcert.pfx" (
    dotnet dev-certs https --clean
    dotnet dev-certs https -ep %APP_CERT_PATH%\appcert.pfx -p awesomepass
    dotnet dev-certs https --trust
) ELSE (
    ECHO "Certificate already exists!"
)

IF "%2"=="--build" (
    docker compose up -d --build
) ELSE (
    docker compose up -d
)
