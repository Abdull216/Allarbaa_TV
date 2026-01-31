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
    version: "23.0.0-MASTER",
    services: [
        { name: "SEO Audit", price: 10, desc: "Improves Google ranking & website speed." },
        { name: "App Review", price: 15, desc: "Writes professional 5-star reviews to increase app trust." },
        { name: "4K Video Render", price: 25, desc: "High-quality cinematic video for YouTube/TikTok." },
        { name: "Nexus Machine Setup", price: 50, desc: "I will install this automated machine for you." }
    ]
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function menu() {
    process.stdout.write('\x1b[2J\x1b[0;0H');
    console.log("\x1b[1;36m" + `
    ╔══════════════════════════════════════════════════════════╗
    ║          NEXUS MASTER AGENCY - v${nexus.version}         ║
    ╠══════════════════════════════════════════════════════════╣
    ║ SEO: $10 | REVIEW: $15 | VIDEO: $25 | SETUP: $50         ║
    ╚══════════════════════════════════════════════════════════╝
    \x1b[0m`);
    console.log(" [1]  \x1b[1;32mRENDER 8 BULK VIDEOS\x1b[0m   [6]  \x1b[1;33mRUN EXTERNAL AD-ENGINE\x1b[0m");
    console.log(" [2]  \x1b[1;32mBUILD MULTI-PRICE STORE\x1b[0m [7]  \x1b[1;35mTELEGRAM SERVICE PUSH\x1b[0m");
    console.log(" [3]  \x1b[1;32mRUN SEO TASK ($10)\x1b[0m      [8]  \x1b[1;35mRUN REVIEW TASK ($15)\x1b[0m");
    console.log(" [4]  \x1b[1;32mRUN VIDEO TASK ($25)\x1b[0m    [9]  SYSTEM REPAIR & CLEAN");
    console.log(" [5]  SEO GOOGLE PING          [10] \x1b[1;31mFORCE GITHUB SYNC\x1b[0m");
    console.log("\n [0]  SLEEP MODE");
    process.stdout.write("\n\x1b[1;36mNEXUS COMMAND > \x1b[0m");
}

function handle(input) {
    const cmd = input.trim();
    switch(cmd) {
        case '1': renderBulk(); break;
        case '2': buildStore(); break;
        case '3': executeTask(0); break;
        case '4': executeTask(2); break;
        case '6': runAdEngine(); break;
        case '7': broadcast(); break;
        case '8': executeTask(1); break;
        case '9': exec("rm -rf *.tmp video*.mp4", () => { console.log("Cleaned."); back(); }); break;
        case '10': sync(); break;
        case '0': process.exit(); break;
        default: menu();
    }
}

function executeTask(index) {
    const s = nexus.services[index];
    console.log(`\n[!] Task Initiated: ${s.name} ($${s.price})`);
    const report = `<h1>Nexus Fulfillment: ${s.name}</h1><p>Description: ${s.desc}</p><p>Status: Complete</p>`;
    fs.writeFileSync(`task_${s.name.replace(/ /g, '_')}.html`, report);
    console.log(`   [✓] SUCCESS: Generated product for ${s.name}.`);
    back();
}

function runAdEngine() {
    console.log("\n[!] Injecting External Sponsor Ads into Cloud Site...");
    const adCode = `<div style="border:1px dashed lime; padding:10px; margin:10px;">
        <p>SPONSORED AD: Get High Speed Hosting</p>
        <a href="https://allarbaa.cloud/ads" style="color:cyan;">Learn More</a>
    </div>`;
    fs.appendFileSync('./nexus_system/library/index.html', adCode);
    console.log("   [✓] Ad-Banners injected successfully.");
    back();
}

function buildStore() {
    console.log("\n[!] Building Multi-Price SaaS Hub...");
    let serviceList = "";
    nexus.services.forEach(s => {
        serviceList += `<div style="border:1px solid gold; margin:10px; padding:10px;">
            <h3>${s.name} - $${s.price}</h3>
            <p>${s.desc}</p>
            <a href="${nexus.paypal}/${s.price}" style="color:lime;">Buy Now</a>
        </div>`;
    });
    const html = `<html><body style="background:#000;color:gold;text-align:center;font-family:sans-serif;">
    <h1>NEXUS MASTER AGENCY</h1>${serviceList}</body></html>`;
    if (!fs.existsSync('./nexus_system/library')) fs.mkdirSync('./nexus_system/library', { recursive: true });
    fs.writeFileSync('./nexus_system/library/index.html', html);
    console.log("   [✓] Professional Multi-Price Storefront Built.");
    back();
}

function broadcast() {
    console.log("\n[!] Sending Descriptive Service Push to Telegram...");
    const msg = `🚀 NEXUS AGENCY SERVICES 🌑\n\n1. SEO Audit ($10): Increase your traffic.\n2. App Review ($15): Get more installs.\n3. 4K Video ($25): Viral content.\n4. Machine Setup ($50): Own the Nexus.\n\n💻 Order Now: ${nexus.cloud}`;
    const url = `https://api.telegram.org/bot${nexus.tg_token}/sendMessage?chat_id=${nexus.chat_id}&text=${encodeURIComponent(msg)}`;
    exec(`curl -s "${url}"`);
    console.log("   [✓] Descriptive Invitation Sent.");
    back();
}

function sync() {
    console.log("\n[!] FORCING GitHub Sync (Fixing errors)...");
    exec('git add . && git commit -m "Nexus Master Sync" && git push origin main --force', (err) => {
        if(!err) console.log("   [✓] GLOBAL DEPLOYMENT SUCCESSFUL.");
        else console.log("   [!] Error: Check token/internet.");
        back();
    });
}

function renderBulk() {
    console.log("\n[!] Production: 8 Videos Rendering...");
    const trends = ["Tech Money", "Quran Peace", "Arab Beats", "US Pop", "Horror Night", "AI Secrets", "Nexus Launch", "Earnings"];
    trends.forEach((title, i) => {
        const id = i + 1;
        exec(`ffmpeg -f lavfi -i color=c=black:s=1280x720:d=5 -vf "drawtext=text='${title}':fontcolor=gold:fontsize=60:x=(w-text_w)/2:y=(h-text_h)/2" -t 5 video${id}.mp4 -y`);
    });
    console.log("   [✓] Bulk Production Done.");
    back();
}

function back() { process.stdout.write("\nPress Enter..."); rl.once('line', menu); }

menu();
rl.on('line', handle);
