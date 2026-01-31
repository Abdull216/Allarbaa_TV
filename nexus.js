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
    version: "20.2.0-ULTIMATE",
    trends: ["AI Secrets", "Quran Peace", "Arab Beats", "US Pop", "Earn Online", "Horror 2024", "SaaS Tech", "Nexus Launch"]
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function menu() {
    process.stdout.write('\x1b[2J\x1b[0;0H');
    console.log("\x1b[1;36m" + `
    ╔══════════════════════════════════════════════════════════╗
    ║        NEXUS AGENCY ULTIMATE MACHINE - v${nexus.version}    ║
    ╠══════════════════════════════════════════════════════════╣
    ║ STATUS: 100% STABLE | REVENUE: ACTIVE | OWNER: ABDUL     ║
    ╚══════════════════════════════════════════════════════════╝
    \x1b[0m`);
    console.log(" [1]  \x1b[1;32mRENDER 8 TRENDING VIDEOS\x1b[0m   [6]  GENERATE AD-LINKS");
    console.log(" [2]  \x1b[1;32mBUILD SAAS STOREFRONT\x1b[0m      [7]  GITHUB SYNC (DEPLOY)");
    console.log(" [3]  \x1b[1;32mGENERATE PRICE LIST\x1b[0m        [8]  \x1b[1;35mTELEGRAM BROADCAST\x1b[0m");
    console.log(" [4]  AUTO-WRITE APP REVIEWS      [9]  SYSTEM CLEAN & REPAIR");
    console.log(" [5]  SEO GOOGLE PINGER           [10] \x1b[1;33mAUTOPILOT (ALL TASKS)\x1b[0m");
    console.log("\n [0]  SLEEP MODE");
    process.stdout.write("\n\x1b[1;36mNEXUS COMMAND > \x1b[0m");
}

function handle(input) {
    const cmd = input.trim();
    switch(cmd) {
        case '1': renderBulk(); break;
        case '2': buildStore(); break;
        case '3': generatePriceList(); break;
        case '4': autoWrite(); break;
        case '5': seoPing(); break;
        case '6': generateAdLinks(); break;
        case '7': sync(); break;
        case '8': broadcast(); break;
        case '9': clean(); break;
        case '10': autopilot(); break;
        case '0': process.exit(); break;
        default: menu();
    }
}

// --- ALL FUNCTIONS DEFINED BELOW ---

function autopilot() {
    console.log("\n[!] STARTING FULL AGENCY AUTOMATION...");
    buildStore();
    generatePriceList();
    generateAdLinks();
    broadcast();
    sync();
}

function renderBulk() {
    console.log("\n[!] Rendering 8 Videos...");
    nexus.trends.forEach((title, i) => {
        const id = i + 1;
        exec(`ffmpeg -f lavfi -i color=c=black:s=1280x720:d=5 -vf "drawtext=text='${title}':fontcolor=gold:fontsize=60:x=(w-text_w)/2:y=(h-text_h)/2" -t 5 video${id}.mp4 -y`, (err) => {
            if (!err) console.log(`   [✓] Video ${id} Done: ${title}`);
        });
    });
    back();
}

function buildStore() {
    const html = `<html><body style='background:#000;color:gold;text-align:center;'><h1>NEXUS STORE</h1><p>PayPal: ${nexus.paypal}</p></body></html>`;
    if (!fs.existsSync('./nexus_system/library')) fs.mkdirSync('./nexus_system/library', { recursive: true });
    fs.writeFileSync('./nexus_system/library/index.html', html);
    console.log("\n   [✓] Storefront Built.");
}

function generatePriceList() {
    const list = "--- NEXUS PRICE LIST ---\n1. Video Automation: $50\n2. App Builder: $100\n3. SEO Push: $25\n------------------------";
    fs.writeFileSync('price_list.txt', list);
    console.log("\n   [✓] Price List generated in price_list.txt");
    back();
}

function autoWrite() {
    const review = "<h1>App Review</h1><p>Automated Review by Nexus Machine.</p>";
    fs.writeFileSync('./nexus_system/library/review.html', review);
    console.log("\n   [✓] Review Written.");
    back();
}

function seoPing() {
    console.log("\n[!] Pinging Google SEO...");
    exec(`curl -I "http://www.google.com/ping?sitemap=${nexus.cloud}sitemap.xml"`, () => {
        console.log("   [✓] SEO Ping Sent.");
        back();
    });
}

function generateAdLinks() {
    const ads = "1. Affiliate: https://fiverr.com/s/yourid\n2. PayPal: " + nexus.paypal;
    fs.writeFileSync('income_links.txt', ads);
    console.log("\n   [✓] Ad-links saved to income_links.txt");
    back();
}

function broadcast() {
    console.log("\n[!] Sending Telegram Broadcast...");
    const msg = `🚀 NEXUS UPDATE 🌑\nBusiness is LIVE: ${nexus.cloud}\nPayPal: ${nexus.paypal}`;
    const url = `https://api.telegram.org/bot${nexus.tg_token}/sendMessage?chat_id=${nexus.chat_id}&text=${encodeURIComponent(msg)}`;
    exec(`curl -s "${url}"`, (err) => {
        if (!err) console.log("   [✓] Broadcast Success!");
    });
}

function sync() {
    console.log("\n[!] Syncing to GitHub...");
    exec('git add . && git commit -m "Nexus Ultimate Sync" && git push origin main', (err) => {
        if(!err) console.log("   [✓] Live on GitHub!");
        else console.log("   [!] Sync Error.");
        back();
    });
}

function clean() {
    exec("rm -rf *.tmp video*.mp4", () => {
        console.log("\n   [✓] System Cleaned.");
        back();
    });
}

function back() { process.stdout.write("\nPress Enter..."); rl.once('line', menu); }

menu();
rl.on('line', handle);
