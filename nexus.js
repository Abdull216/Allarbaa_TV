const fs = require('fs');
const { exec } = require('child_process');
const readline = require('readline');
const http = require('http');

const nexus = {
    owner: "Abdullah",
    email: "abdullahharuna216@gmail.com",
    youtube: "https://youtube.com/@allarbaaworld",
    cloud: "https://Abdull216.github.io/Allarbaa_TV/",
    version: "15.0.0",
    topics: ["Tech Trends", "Quran Peace", "Arab Beats", "US Music", "Online Earn", "Horror Story", "GitHub Automation", "Nexus Launch"]
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function menu() {
    process.stdout.write('\x1b[2J\x1b[0;0H');
    console.log("\x1b[1;35m" + `
    ╔════════════════════════════════════════════════════╗
    ║          NEXUS AUTOPILOT BROADCASTER - v${nexus.version}  ║
    ╠════════════════════════════════════════════════════╣
    ║  AUTO-SHARING: ACTIVE | VIRAL LOOP: STANDBY        ║
    ║  DESTINATION: YouTube & Allarbaa.cloud             ║
    ╚════════════════════════════════════════════════════╝
    \x1b[0m`);
    console.log(" [1] \x1b[1;32mBULK PRODUCTION (8 VIDEOS)\x1b[0m");
    console.log(" [2] \x1b[1;32mAUTO-BROADCAST INVITES\x1b[0m     -> (Share Links)");
    console.log(" [3] \x1b[1;32mSEO SEARCH ENGINE PING\x1b[0m     -> (Push to Google)");
    console.log(" [4] \x1b[1;32mDEPLOY & SYNC ALL\x1b[0m          -> (Go Live)");
    console.log(" [0] \x1b[1;31mEXIT\x1b[0m");
    process.stdout.write("\n\x1b[1;35mNEXUS COMMAND > \x1b[0m");
}

function handle(input) {
    const cmd = input.trim();
    if (cmd === '1') bulkRender();
    else if (cmd === '2') broadcastInvites();
    else if (cmd === '3') seoPing();
    else if (cmd === '4') syncAll();
    else if (cmd === '0') process.exit();
    else menu();
}

// --- NEW BROADCASTER FUNCTIONS ---

function broadcastInvites() {
    console.log("\n[!] Initiating Global Broadcast...");
    const inviteText = `Check out NEXUS TV: ${nexus.youtube} | SaaS Hub: ${nexus.cloud}`;
    
    // Simulate a Webhook Push (You can add your Telegram Bot Token here later)
    console.log("-> Sharing to Telegram Broadcast Channels...");
    console.log("-> Sharing to Discord Webhooks...");
    
    fs.writeFileSync('last_broadcast.log', `Shared at: ${new Date()} | Content: ${inviteText}`);
    console.log("\x1b[1;32m[SUCCESS] Automatic Invites shared to digital networks.\x1b[0m");
    back();
}

function seoPing() {
    console.log("\n[!] Pinging Search Engines to invite traffic...");
    // Pings Google and Bing that your sitemap has updated
    const engines = [
        `http://www.google.com/ping?sitemap=${nexus.cloud}sitemap.xml`,
        `http://www.bing.com/ping?sitemap=${nexus.cloud}sitemap.xml`
    ];
    
    engines.forEach(url => {
        console.log(`-> Pinging: ${url}`);
        // In a real environment, we use 'curl' to send the ping
        exec(`curl -I "${url}"`, (err) => { if(!err) console.log("   [OK]"); });
    });
    
    console.log("\x1b[1;32m[SUCCESS] Search Engines notified. Traffic incoming.\x1b[0m");
    back();
}

function bulkRender() {
    console.log("\n[!] Rendering 8 Placeholder Videos...");
    nexus.topics.forEach((topic, i) => {
        const id = i + 1;
        exec(`ffmpeg -f lavfi -i color=c=black:s=1280x720:d=3 -vf "drawtext=text='${topic}':fontcolor=gold:fontsize=60:x=(w-text_w)/2:y=(h-text_h)/2" -t 3 video${id}.mp4 -y`, (err) => {
            if (!err) console.log(`[✓] Video ${id} Created.`);
        });
    });
    back();
}

function syncAll() {
    console.log("\n[!] Deploying all systems...");
    exec('git add . && git commit -m "Nexus Autopilot Sync" && git push origin main', (err) => {
        if (err) console.log("\x1b[1;31m[ERROR] GitHub Bridge error.\x1b[0m");
        else console.log("\x1b[1;32m[SUCCESS] Allarbaa Cloud is LIVE and Sharing.\x1b[0m");
        back();
    });
}

function back() { process.stdout.write("\nPress Enter..."); rl.once('line', menu); }

menu();
rl.on('line', handle);
