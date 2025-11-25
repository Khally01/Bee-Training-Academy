#!/bin/bash

# Bee Training Academy - Quick Start Script
# This script starts a local web server for testing

echo "🐝 Starting Bee Training Academy..."
echo "=================================="
echo ""
echo "Opening browser at: http://localhost:8000"
echo "Press Ctrl+C to stop the server"
echo ""

# Open browser
sleep 2 && open "http://localhost:8000" &

# Start server
python3 -m http.server 8000
