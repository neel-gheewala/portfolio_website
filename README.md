# 🚀 Deploying Portfolio Website on AWS EC2

This guide provides step-by-step instructions to deploy your **Node.js + Express + EJS** portfolio website on an **Ubuntu EC2 instance**.

## 1️⃣ Connect to EC2 Instance
Use SSH to connect:
```sh
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

## 2️⃣ Install Node.js and Git
```sh
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs git
```
Verify installation:
```sh
node -v
npm -v
```

## 3️⃣ Clone Your Repository
If previously cloned, **delete old folder**:
```sh
rm -rf portfolio_website
```
Clone latest version:
```sh
git clone https://github.com/your-username/your-portfolio-repo.git portfolio_website
cd portfolio_website
```

## 4️⃣ Install Dependencies
```sh
npm install
```

## 5️⃣ Change Port to 4000 (If Needed)
Edit `server.js` and modify:
```js
const port = 4000;
```

## 6️⃣ Start the Server (Test Run)
```sh
node server.js
```
Visit **http://your-ec2-public-ip:4000** to check if it's working.

## 7️⃣ Run in Background with PM2
Install PM2:
```sh
sudo npm install -g pm2
```
Run app:
```sh
pm2 start server.js --name portfolio -- --port=4000
pm2 save
pm2 startup
```

## 8️⃣ Allow Traffic on Port 4000
```sh
sudo ufw allow 4000
```
Ensure **port 4000** is open in **AWS Security Group**.

## 🔄 Managing the App with PM2
- Restart: `pm2 restart portfolio`
- Stop: `pm2 stop portfolio`
- Delete: `pm2 delete portfolio`
- List running apps: `pm2 list`

## ✅ Your Website is Live! 🚀
Visit **http://your-ec2-public-ip:4000** to see your portfolio.  
For production, consider **Nginx + domain setup**.
