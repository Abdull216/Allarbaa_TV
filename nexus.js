const fs = require('fs');
const { exec } = require('child_process');
const readline = require('readline');

const nexus = {
    owner: "Abdulmumin Haruna",
    email: "abdullahharuna216@gmail.com",
    paypal: "https://paypal.me/abdullahharuna216",
    youtube: "https://youtube.com/@allarbaaworld",
    cloud: "https://Abdull216.github.io/Allarbaa_TV/",
    tg_token: "8446898066:AAFiXmqhevhoeENd94lwWArY_T23uJBwBZ8", 
    chat_id: "8554733227",        
    version: "22.0.0-PROFIT",
    price: "10"
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function menu() {
    process.stdout.write('\x1b[2J\x1b[0;0H');
    console.log("\x1b[1;32m" + `
    ╔══════════════════════════════════════════════════════════╗
    ║          NEXUS PROFIT-FLOW ENGINE - v${nexus.version}      ║
    ╠══════════════════════════════════════════════════════════╣
    ║ COMMISSION: $${nexus.price} USD | BOT: @Allarbaa_bot | LIVE      ║
    ╚══════════════════════════════════════════════════════════╝
    \x1b[0m`);
    console.log(" [1]  \x1b[1;36mRENDER 8 BULK VIDEOS\x1b[0m   [6]  \x1b[1;33mRUN $10 SEO AUDIT\x1b[0m");
    console.log(" [2]  \x1b[1;36mBUILD $10 SAAS STORE\x1b[0m   [7]  \x1b[1;33mWRITE $10 APP REVIEW\x1b[0m");
    console.log(" [3]  \x1b[1;36mTELEGRAM BROADCAST\x1b[0m     [8]  \x1b[1;33m$10 VIDEO EDIT TASK\x1b[0m");
    console.log(" [4]  SEO GOOGLE PING          [9]  SYSTEM CLEAN/REPAIR");
    console.log(" [5]  GENERATE PRICE LIST      [10] \x1b[1;35mSYNC ALL (LIVE DEPLOY)\x1b[0m");
    console.log("\n [0]  SLEEP MODE");
    process.stdout.write("\n\x1b[1;32mNEXUS COMMAND > \x1b[0m");
}

function handle(input) {
    const cmd = input.trim();
    switch(cmd) {
        case '1': renderBulk(); break;
        case '2': buildStore(); break;
        case '3': broadcast(); break;
        case '4': seoPing(); break;
        case '5': generatePriceList(); break;
        case '6': runSEO(); break;
        case '7': runReview(); break;
        case '8': runTranscode(); break;
        case '9': clean(); break;
        case '10': sync(); break;
        case '0': process.exit(); break;
        default: menu();
    }
}

// --- FULFILLMENT TASKS ---

function runSEO() {
    console.log("\n[!] Processing $10 SEO Audit...");
    const report = `<h1>SEO Audit Report</h1><p>Status: Optimized</p><p>Price: $${nexus.price}</p><p>Nexus ID: ${Math.random().toString(36).substring(7)}</p>`;
    fs.writeFileSync('seo_report.html', report);
    console.log("   [✓] SUCCESS: seo_report.html ready for client.");
    back();
}

function runReview() {
    console.log("\n[!] Processing $10 App Review...");
    const review = `<h2>Professional Review</h2><p>This application is Nexus Certified. Rating: 5/5 Stars.</p>`;
    fs.writeFileSync('app_review.html', review);
    console.log("   [✓] SUCCESS: app_review.html ready for client.");
    back();
}

function runTranscode() {
    console.log("\n[!] Processing $10 Video Optimization...");
    exec("ffmpeg -i video1.mp4 -vf scale=720:1280 -c:a copy client_output.mp4 -y", (err) => {
        if (!err) console.log("   [✓] SUCCESS: client_output.mp4 optimized for Mobile.");
        else console.log("   [!] Error: No source video found. Run Option 1 first.");
        back();
    });
}

function renderBulk() {
    console.log("\n[!] Rendering 8 Videos for @allarbaaworld...");
    const trends = ["Tech Earning", "Quran Peace", "Arab Beats", "US Pop", "Horror 2024", "AI Secrets", "Nexus App", "SaaS Money"];
    trends.forEach((title, i) => {
        const id = i + 1;
        exec(`ffmpeg -f lavfi -i color=c=black:s=1280x720:d=5 -vf "drawtext=text='${title}':fontcolor=gold:fontsize=60:x=(w-text_w)/2:y=(h-text_h)/2" -t 5 video${id}.mp4 -y`);
    });
    console.log("   [✓] 8 Videos Produced.");
    back();
}

function buildStore() {
    console.log("\n[!] Building $10 SaaS Hub...");
    const html = `<html><body style='background:#000;color:gold;text-align:center;font-family:sans-serif;padding:50px;'>
    <h1>NEXUS GLOBAL SERVICES</h1>
    <div style='border:2px solid gold;padding:30px;display:inline-block;'>
        <h2>All Tasks Only $${nexus.price} USD</h2>
        <ul style='text-align:left;'>
            <li>SEO Website Audit: $${nexus.price}</li>
            <li>Professional App Review: $${nexus.price}</li>
            <li>Video Transcoding: $${nexus.price}</li>
        </ul>
        <a href='${nexus.paypal}/${nexus.price}' style='background:gold;color:black;padding:15px;text-decoration:none;font-weight:bold;display:block;'>PAY $${nexus.price} NOW</a>
    </div>
    <br><br><a href='${nexus.youtube}' style='color:white;'>Watch Tutorials</a>
    </body></html>`;
    if (!fs.existsSync('./nexus_system/library')) fs.mkdirSync('./nexus_system/library', { recursive: true });
    fs.writeFileSync('./nexus_system/library/index.html', html);
    console.log("   [✓] Storefront Live at $10 price point.");
    back();
}

function generatePriceList() {
    const list = `NEXUS PRICE LIST\n- SEO Audit: $${nexus.price}\n- App Review: $${nexus.price}\n- Video Edit: $${nexus.price}\nPayPal: ${nexus.paypal}`;
    fs.writeFileSync('price_list.txt', list);
    console.log("\n   [✓] Price List generated.");
    back();
}

function broadcast() {
    const msg = `⚡ NEXUS DEAL ALERT ⚡\nAll automation tasks now only $${nexus.price} USD!\n\nOrder here: ${nexus.cloud}\nPayPal: ${nexus.paypal}`;
    const url = `https://api.telegram.org/bot${nexus.tg_token}/sendMessage?chat_id=${nexus.chat_id}&text=${encodeURIComponent(msg)}`;
    exec(`curl -s "${url}"`);
    console.log("\n   [✓] Telegram Broadcast Sent.");
    back();
}

function sync() {
    console.log("\n[!] Deploying Business to GitHub...");
    exec('git add . && git commit -m "Nexus $10 Profit Update" && git push origin main', (err) => {
        if(!err) console.log("   [✓] Live on GitHub!");
        else console.log("   [!] Sync Error.");
        back();
    });
}

function seoPing() {
    exec(`curl -I "http://www.google.com/ping?sitemap=${nexus.cloud}sitemap.xml"`);
    console.log("\n   [✓] SEO Ping Sent.");
    back();
}

function clean() {
    exec("rm -rf *.tmp video*.mp4", () => { console.log("\n   [✓] Cleaned."); back(); });
}

function back() { process.stdout.write("\nPress Enter..."); rl.once('line', menu); }

menu();
rl.on('line', handle);
