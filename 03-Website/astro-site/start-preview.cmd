@echo off
cd /d "%~dp0"
npm.cmd run preview -- --host 127.0.0.1 --port 4321
