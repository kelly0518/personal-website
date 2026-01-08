@echo off
IF "%~1"=="" (
    echo Error: Please provide a commit message.
    echo Usage: .\push "Your commit message"
    exit /b 1
)

echo ========================================
echo [1/3] Adding all files to staging...
git add .

echo ========================================
echo [2/3] Committing with message: "%*"
git commit -m "%*"

echo ========================================
echo [3/3] Pushing to GitHub...
git push

echo ========================================
echo Success! Your changes are live.
pause
