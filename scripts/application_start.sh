#!/bin/bash
cd /home/admin/connect
git pull origin main
npm install &&
npm run build &&
pm2 restart connect_next
