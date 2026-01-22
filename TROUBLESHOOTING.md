# Troubleshooting - Server Connection Issues

## Server is Running but Can't Connect

If you're getting `ERR_CONNECTION_REFUSED` but the server is running:

### Solution 1: Check the Server Output
Look at the PowerShell window that opened. You should see:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- ready started server on 0.0.0.0:3000
```

### Solution 2: Try Different URLs
- `http://localhost:3000`
- `http://127.0.0.1:3000`
- `http://0.0.0.0:3000`

### Solution 3: Check Firewall
Windows Firewall might be blocking the connection. Try:
1. Open Windows Defender Firewall
2. Allow Node.js through the firewall

### Solution 4: Kill and Restart
If the server is stuck:
```powershell
# Kill all Node processes
Get-Process node | Stop-Process -Force

# Restart the server
npm run dev
```

### Solution 5: Use a Different Port
Edit `package.json` and change the dev script:
```json
"dev": "next dev -p 3001"
```
Then access at `http://localhost:3001`

### Solution 6: Check for Errors
Run the server in the foreground to see errors:
```powershell
npm run dev
```

## Common Issues

1. **Port Already in Use**: Another app is using port 3000
   - Solution: Kill the process or use a different port

2. **Antivirus Blocking**: Some antivirus software blocks localhost
   - Solution: Add exception for Node.js

3. **Browser Cache**: Old cache might cause issues
   - Solution: Hard refresh (Ctrl+Shift+R) or clear cache

4. **Windows Defender**: Might be blocking the connection
   - Solution: Temporarily disable to test, then add exception

