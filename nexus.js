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
    version: "19.0.0",
    trends: ["AI Tech", "Quran Peace", "Arab Music", "US Pop", "Make Money", "Horror Night", "SaaS Build", "Nexus Launch"]
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function menu() {
    process.stdout.write('\x1b[2J\x1b[0;0H');
    console.log("\x1b[1;36m" + `
    ╔══════════════════════════════════════════════════════════╗
    ║          NEXUS GLOBAL EXECUTIVE - v${nexus.version}       ║
    ╠══════════════════════════════════════════════════════════╣
    ║ BOT: @Allarbaa_bot | STATUS: CONNECTED | OWNER: ABDUL    ║
    ╚══════════════════════════════════════════════════════════╝
    \x1b[0m`);
    console.log(" [1]  \x1b[1;32mRENDER 8 BULK VIDEOS\x1b[0m    [6]  ACTIVATE AD-ENGINE");
    console.log(" [2]  \x1b[1;32mAUTO-WRITE REVIEWS\x1b[0m      [7]  GITHUB SYNC (DEPLOY)");
    console.log(" [3]  SAAS & APP BUILDER        [8]  FINANCIAL HUB");
    console.log(" [4]  \x1b[1;35mTELEGRAM BROADCAST\x1b[0m      [9]  SYSTEM REPAIR");
    console.log(" [5]  SEO GOOGLE PINGER         [10] VIEW RECENT INCOME");
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
        case '7': sync(); break;
        case '9': clean(); break;
        case '0': process.exit(); break;
        default: menu();
    }
}

function renderEight() {
    console.log("\n[!] Starting Bulk Render of 8 Videos...");
    nexus.trends.forEach((title, i) => {
        const id = i + 1;
        exec(`ffmpeg -f lavfi -i color=c=black:s=1280x720:d=3 -vf "drawtext=text='${title}':fontcolor=cyan:fontsize=60:x=(w-text_w)/2:y=(h-text_h)/2" -t 3 video${id}.mp4 -y`, (err) => {
            if(!err) console.log(`   [✓] Video ${id} Done: ${title}`);
        });
    });
    back();
}

function autoWrite() {
    console.log("\n[!] Nexus Writing Engine: Generating App Reviews...");
    const review = `<html><body style='background:#000;color:#0f0;padding:50px;font-family:mono;'>
    <h1>NEXUS APP REVIEW</h1><p>Check out the latest tech trends for 2024.</p>
    <a href='${nexus.youtube}'>Watch full video here</a></body></html>`;
    if (!fs.existsSync('./nexus_system/library/reviews')) fs.mkdirSync('./nexus_system/library/reviews', { recursive: true });
    fs.writeFileSync('./nexus_system/library/reviews/index.html', review);
    console.log("   [✓] Review Website Generated.");
    back();
}

function tgBroadcast() {
    console.log("\n[!] Broadcasting to @Allarbaa_bot...");
    const msg = `🚀 NEXUS UPDATE 🌑\nMaster Abdullah has deployed new content!\n\n📺 YouTube: ${nexus.youtube}\n💻 SaaS: ${nexus.cloud}\n💰 PayPal: ${nexus.paypal}`;
    const url = `https://api.telegram.org/bot${nexus.tg_token}/sendMessage?chat_id=${nexus.chat_id}&text=${encodeURIComponent(msg)}`;
    exec(`curl -s "${url}"`, (err) => {
        if(err) console.log("   [!] Error sending message.");
        else console.log("   [✓] Telegram Broadcast Successful!");
        back();
    });
}

function sync() {
    console.log("\n[!] Syncing to Abdull216/Allarbaa_TV...");
    exec('git add . && git commit -m "Nexus Executive Sync" && git push origin main', (err) => {
        if(!err) console.log("   [✓] All Systems LIVE on GitHub!");
        else console.log("   [!] GitHub Sync Error.");
        back();
    });
}

function clean() {
    exec("rm -rf *.tmp production.mp4 video*.mp4", () => {
        console.log("\n   [✓] System Cleaned.");
        back();
    });
}

function back() { process.stdout.write("\nPress Enter..."); rl.once('line', menu); }

menu();
rl.on('line', handle);
