@echo off
set /A seconds = %1 * 60
shutdown /s /t %seconds%
@echo Компьютер завершит свою работу через %1 минут