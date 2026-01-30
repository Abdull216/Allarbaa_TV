const fs = require('fs');
const { exec } = require('child_process');
const readline = require('readline');

const nexus = {
    owner: "Abdullah",
    email: "abdullahharuna216@gmail.com",
    paypal: "abdullahharuna216@gmail.com",
    cloud: "allarbaa.cloud",
    repo: "Abdull216/Allarbaa_TV",
    version: "9.0.0"
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function clear() { process.stdout.write('\x1b[2J\x1b[0;0H'); }

function menu() {
    clear();
    console.log("\x1b[1;34m" + `
    ╔════════════════════════════════════════════════════╗
    ║          NEXUS SOVEREIGN ENGINE - V9.0             ║
    ╠════════════════════════════════════════════════════╣
    ║  USER: ${nexus.owner.padEnd(10)} | EMAIL: ${nexus.email.padEnd(20)} ║
    ║  SaaS: ${nexus.cloud.padEnd(11)} | REPO:  ${nexus.repo.padEnd(13)} ║
    ╚════════════════════════════════════════════════════╝
    \x1b[0m`);
    console.log(" [1] \x1b[1;32mPRODUCE REAL VIDEO\x1b[0m (FFmpeg Render)");
    console.log(" [2] \x1b[1;32mDEPLOY SAAS BRIDGE\x1b[0m (Build Website)");
    console.log(" [3] \x1b[1;32mGENERATE AD REVENUE\x1b[0m (Income Links)");
    console.log(" [4] \x1b[1;32mGITHUB SYNC\x1b[0m (Push All Updates)");
    console.log(" [0] \x1b[1;31mEXIT\x1b[0m");
    process.stdout.write("\n\x1b[1;34mNEXUS > \x1b[0m");
}

function handle(input) {
    const cmd = input.trim();
    if (cmd === '1') produceVideo();
    else if (cmd === '2') buildSaaS();
    else if (cmd === '3') generateAds();
    else if (cmd === '4') syncRepo();
    else if (cmd === '0') process.exit();
    else { console.log("Unknown Command."); setTimeout(menu, 1000); }
}

function produceVideo() {
    console.log("\n\x1b[1;33m[PROCESS] Accessing FFmpeg for Real Production...\x1b[0m");
    const cmd = "ffmpeg -loop 1 -i image.jpg -i audio.mp3 -c:v libx264 -t 15 -pix_fmt yuv420p production.mp4 -y";
    exec(cmd, (err) => {
        if (err) console.log("\x1b[1;31m[!] Error: Ensure 'image.jpg' and 'audio.mp3' are in ~/nexus-core/\x1b[0m");
        else console.log("\x1b[1;32m[✓] SUCCESS: Video rendered as production.mp4\x1b[0m");
        back();
    });
}

function buildSaaS() {
    console.log("\n\x1b[1;33m[PROCESS] Constructing SaaS Layout...\x1b[0m");
    const html = "<html><body style='background:#000;color:#0f0;text-align:center;'><h1>NEXUS SaaS</h1></body></html>";
    if (!fs.existsSync('./nexus_system/library')) fs.mkdirSync('./nexus_system/library', { recursive: true });
    fs.writeFileSync('./nexus_system/library/index.html', html);
    console.log("\x1b[1;32m[✓] SUCCESS: index.html generated.\x1b[0m");
    back();
}

function generateAds() {
    const links = "1. Affiliate: https://fiverr.com/s/yourid\n2. PayPal: " + nexus.paypal;
    fs.writeFileSync('income_links.txt', links);
    console.log("\x1b[1;32m[✓] SUCCESS: links saved.\x1b[0m");
    back();
}

function syncRepo() {
    console.log("\n\x1b[1;33m[PROCESS] Syncing to GitHub...\x1b[0m");
    exec('git add . && git commit -m "Nexus V9 Sync" && git push origin main', (err) => {
        if (err) console.log("\x1b[1;31m[!] Error: Check GitHub link.\x1b[0m");
        else console.log("\x1b[1;32m[✓] SUCCESS: Deployed!\x1b[0m");
        back();
    });
}

function back() { process.stdout.write("\nPress Enter..."); rl.once('line', menu); }

menu();
rl.on('line', handle);
