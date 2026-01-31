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
    version: "20.0.0",
    trends: ["Tech Money 2024", "Quran Healing", "Arab Bass Mix", "US Top Hits", "How to Earn $100", "Extreme Horror", "GitHub Secrets", "Nexus Launch"]
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function menu() {
    process.stdout.write('\x1b[2J\x1b[0;0H');
    console.log("\x1b[1;33m" + `
    ╔══════════════════════════════════════════════════════════╗
    ║          NEXUS REVENUE ENGINE - v${nexus.version}          ║
    ╠══════════════════════════════════════════════════════════╣
    ║ BOT: @Allarbaa_bot | REVENUE: ACTIVE | STATUS: SCALING   ║
    ╚══════════════════════════════════════════════════════════╝
    \x1b[0m`);
    console.log(" [1]  \x1b[1;32mRENDER 8 TRENDING VIDEOS\x1b[0m  [6]  ACTIVATE AD-LINKS");
    console.log(" [2]  \x1b[1;32mGENERATE SAAS STORE\x1b[0m       [7]  GITHUB DEPLOY");
    console.log(" [3]  \x1b[1;32mWRITE APP REVIEWS\x1b[0m         [8]  \x1b[1;35mTELEGRAM BROADCAST\x1b[0m");
    console.log(" [4]  SEO SEARCH ENGINE PING      [9]  CLEAN SYSTEM");
    console.log(" [5]  VIEW REVENUE REPORTS        [10] \x1b[1;33mAUTO-PILOT (ALL TASKS)\x1b[0m");
    console.log("\n [0]  SLEEP MODE");
    process.stdout.write("\n\x1b[1;33mNEXUS COMMAND > \x1b[0m");
}

function handle(input) {
    const cmd = input.trim();
    switch(cmd) {
        case '1': renderBulk(); break;
        case '2': buildStore(); break;
        case '8': broadcast(); break;
        case '7': sync(); break;
        case '10': autopilot(); break;
        case '0': process.exit(); break;
        default: menu();
    }
}

function autopilot() {
    console.log("\n[!] NEXUS AUTOPILOT ACTIVATED...");
    buildStore();
    broadcast();
    sync();
}

function renderBulk() {
    console.log("\n[!] Production: 8 Videos Rendering...");
    nexus.trends.forEach((title, i) => {
        const id = i + 1;
        exec(`ffmpeg -f lavfi -i color=c=black:s=1280x720:d=5 -vf "drawtext=text='${title}':fontcolor=gold:fontsize=70:x=(w-text_w)/2:y=(h-text_h)/2" -t 5 video${id}.mp4 -y`);
    });
    console.log("   [✓] 8 Videos ready for YouTube.");
    back();
}

function buildStore() {
    const html = `<html><body style='background:#000;color:gold;text-align:center;font-family:sans-serif;'>
    <h1>NEXUS GLOBAL STORE</h1><p>Automated Solutions by ${nexus.owner}</p>
    <div style='border:2px solid gold;padding:20px;display:inline-block;'>
    <p>Premium Automation Setup</p>
    <a href='${nexus.paypal}/50' style='background:gold;color:black;padding:10px;text-decoration:none;font-weight:bold;'>DEPOSIT $50</a>
    </div></body></html>`;
    if (!fs.existsSync('./nexus_system/library')) fs.mkdirSync('./nexus_system/library', { recursive: true });
    fs.writeFileSync('./nexus_system/library/index.html', html);
    console.log("\n   [✓] Storefront Built.");
}

function broadcast() {
    console.log("\n[!] Broadcasting Revenue Links...");
    const msg = `💰 NEW INCOME OPPORTUNITY 💰\nMaster Abdullah has released new assets!\n\n📺 Watch & Earn: ${nexus.youtube}\n💻 Order Service: ${nexus.cloud}\n💸 Direct Pay: ${nexus.paypal}`;
    const url = `https://api.telegram.org/bot${nexus.tg_token}/sendMessage?chat_id=${nexus.chat_id}&text=${encodeURIComponent(msg)}`;
    exec(`curl -s "${url}"`);
    console.log("   [✓] Telegram Message Sent.");
}

function sync() {
    exec('git add . && git commit -m "Nexus Revenue Update" && git push origin main', (err) => {
        if(!err) console.log("   [✓] Business is LIVE.");
        back();
    });
}

function back() { process.stdout.write("\nPress Enter..."); rl.once('line', menu); }

menu();
rl.on('line', handle);
