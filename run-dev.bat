@echo off
title Happy Mappy

echo ==========================================
echo          HAPPY MAPPY DEVELOPMENT
echo ==========================================
echo.

echo Starting Backend...
start "Happy Mappy Backend" cmd /k "cd /d D:\HappyMappy\happy-mappy\Backend && npm run dev"

timeout /t 2 /nobreak >nul

echo Starting Frontend...
start "Happy Mappy Frontend" cmd /k "cd /d D:\HappyMappy\happy-mappy\Frontend && npm run dev"

echo.
echo ==========================================
echo Backend  : http://localhost:5000
echo Frontend : http://localhost:5173
echo ==========================================
echo.

exit