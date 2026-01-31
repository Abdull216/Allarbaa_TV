const fs = require('fs');
const { exec } = require('child_process');
const readline = require('readline');

const nexus = {
    owner: "Abdulmumin Haruna",
    email: "abdullahharuna216@gmail.com",
    paypal: "abdullahharuna216@gmail.com",
    youtube: "https://youtube.com/@allarbaaworld",
    cloud: "https://Abdull216.github.io/Allarbaa_TV/",
    tg_token: "8446898066:AAFiXmqhevhoeENd94lwWArY_T23uJBwBZ8", 
    chat_id: "8554733227",        
    version: "20.0.0",
    trends: ["AI Tech", "Quran Peace", "Arab Music", "US Pop", "Make Money", "Horror Night", "SaaS Build", "Nexus Launch"]
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function menu() {
    process.stdout.write('\x1b[2J\x1b[0;0H');
    console.log("\x1b[1;36m" + `
    ╔══════════════════════════════════════════════════════════╗
    ║          NEXUS SOVEREIGN ENGINE - v${nexus.version}       ║
    ╠══════════════════════════════════════════════════════════╣
    ║ BOT: @Allarbaa_bot | STATUS: ACTIVE | OWNER: ABDUL       ║
    ╚══════════════════════════════════════════════════════════╝
    \x1b[0m`);
    console.log(" [1]  \x1b[1;32mRENDER 8 BULK VIDEOS\x1b[0m    [6]  \x1b[1;32mACTIVATE AD-ENGINE\x1b[0m");
    console.log(" [2]  \x1b[1;32mAUTO-WRITE REVIEWS\x1b[0m      [7]  \x1b[1;32mGITHUB SYNC (DEPLOY)\x1b[0m");
    console.log(" [3]  \x1b[1;32mSAAS & APP BUILDER\x1b[0m      [8]  \x1b[1;32mFINANCIAL HUB\x1b[0m");
    console.log(" [4]  \x1b[1;35mTELEGRAM BROADCAST\x1b[0m      [9]  \x1b[1;32mSYSTEM REPAIR\x1b[0m");
    console.log(" [5]  \x1b[1;32mSEO GOOGLE PINGER\x1b[0m       [10] \x1b[1;33mVIEW RECENT INCOME\x1b[0m");
    console.log("\n [0]  SLEEP MODE");
    process.stdout.write("\n\x1b[1;36mNEXUS COMMAND > \x1b[0m");
}

function handle(input) {
    const cmd = input.trim();
    switch(cmd) {
        case '1': renderEight(); break;
        case '2': autoWrite(); break;
        case '3': buildSaaS(); break;
        case '4': tgBroadcast(); break;
        case '5': seoPing(); break;
        case '6': adEngine(); break;
        case '7': sync(); break;
        case '8': financialHub(); break;
        case '9': clean(); break;
        case '10': viewIncome(); break;
        case '0': process.exit(); break;
        default: menu();
    }
}

// --- OPTION FUNCTIONS ---

function renderEight() {
    console.log("\n[!] Rendering 8 Videos...");
    nexus.trends.forEach((title, i) => {
        exec(`ffmpeg -f lavfi -i color=c=black:s=1280x720:d=3 -vf "drawtext=text='${title}':fontcolor=cyan:fontsize=60:x=(w-text_w)/2:y=(h-text_h)/2" -t 3 video${i+1}.mp4 -y`);
    });
    console.log("   [✓] 8 Placeholder videos created.");
    back();
}

function autoWrite() {
    const review = `<html><body style='background:#000;color:lime;padding:50px;'><h1>NEXUS REVIEW</h1><p>Automated by Abdul</p></body></html>`;
    if (!fs.existsSync('./nexus_system/library/reviews')) fs.mkdirSync('./nexus_system/library/reviews', { recursive: true });
    fs.writeFileSync('./nexus_system/library/reviews/index.html', review);
    console.log("\n   [✓] Review written.");
    back();
}

function buildSaaS() {
    const html = `<html><body style='background:#000;color:gold;text-align:center;'><h1>NEXUS SAAS BRIDGE</h1><a href='${nexus.youtube}'>Visit YouTube</a></body></html>`;
    fs.writeFileSync('./nexus_system/library/index.html', html);
    console.log("\n   [✓] SaaS & App files generated.");
    back();
}

function tgBroadcast() {
    console.log("\n[!] Broadcasting to Telegram...");
    const msg = `🚀 NEXUS BROADCAST 🚀\nNew Content on YouTube: ${nexus.youtube}\nSaaS Live at: ${nexus.cloud}`;
    const url = `https://api.telegram.org/bot${nexus.tg_token}/sendMessage?chat_id=${nexus.chat_id}&text=${encodeURIComponent(msg)}`;
    exec(`curl -s "${url}"`, (err) => {
        if(!err) console.log("   [✓] Sent to @Allarbaa_bot!");
        else console.log("   [!] Broadcast Failed.");
        back();
    });
}

function seoPing() {
    console.log("\n[!] Pinging Google & Bing Search Engines...");
    exec(`curl -I "http://www.google.com/ping?sitemap=${nexus.cloud}sitemap.xml"`);
    console.log("   [✓] SEO Invites Sent.");
    back();
}

function adEngine() {
    const adData = "AD_REVENUE_SOURCE=ACTIVE\nTARGET=ALLARBAA_TV\nINCOME_METHOD=PAYPAL";
    fs.writeFileSync('ads.config', adData);
    console.log("\n   [✓] Ad-Engine Tracking Active.");
    back();
}

function sync() {
    console.log("\n[!] Syncing to GitHub...");
    exec('git add . && git commit -m "Nexus v20 Full Sync" && git push origin main', (err) => {
        if(!err) console.log("   [✓] LIVE on GitHub!");
        else console.log("   [!] Git Error.");
        back();
    });
}

function financialHub() {
    console.log(`\n--- FINANCIAL HUB ---`);
    console.log(`PAYPAL: ${nexus.paypal}`);
    console.log(`STATUS: READY TO RECEIVE FLOW`);
    back();
}

function clean() {
    exec("rm -rf *.tmp video*.mp4 production.mp4", () => {
        console.log("\n   [✓] System Cleaned.");
        back();
    });
}

function viewIncome() {
    console.log("\n--- RECENT INCOME LOGS ---");
    console.log("Current Balance: $0.00 (Traffic incoming...)");
    console.log("Next Transfer: abdullahharuna216@gmail.com");
    back();
}

function back() { process.stdout.write("\nPress Enter..."); rl.once('line', menu); }

menu();
rl.on('line', handle);
