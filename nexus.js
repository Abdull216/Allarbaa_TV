const fs = require('fs');
const { exec } = require('child_process');
const readline = require('readline');

const nexus = {
    owner: "Abdullah",
    email: "abdullahharuna216@gmail.com",
    paypal: "abdullahharuna216@gmail.com",
    youtube: "https://youtube.com/@allarbaaworld",
    cloud: "allarbaa.cloud",
    repo: "Abdull216/Allarbaa_TV",
    version: "14.0.0",
    topics: ["Tech Trends", "Quran Peace", "Arab Beats", "US Music", "Online Earn", "Horror Story", "GitHub Automation", "Nexus Launch"]
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function menu() {
    process.stdout.write('\x1b[2J\x1b[0;0H');
    console.log("\x1b[1;33m" + `
    ╔════════════════════════════════════════════════════╗
    ║          NEXUS BULK AGENCY MACHINE - v${nexus.version}    ║
    ╠════════════════════════════════════════════════════╣
    ║  APP: Multi-Service PWA | VIDEOS: 8-Core System    ║
    ║  ADS: Tracking Pixel Active | INCOME: PayPal READY ║
    ╚════════════════════════════════════════════════════╝
    \x1b[0m`);
    console.log(" [1] \x1b[1;32mBUILD TRIPLE-SERVICE APP\x1b[0m -> (Download/Stream/News)");
    console.log(" [2] \x1b[1;32mMANAGE AD CAMPAIGNS\x1b[0m      -> (Invite & Track)");
    console.log(" [3] \x1b[1;32mBULK RENDER (8 VIDEOS)\x1b[0m    -> (Placeholder Engine)");
    console.log(" [4] \x1b[1;32mSYNC & GO LIVE\x1b[0m           -> (GitHub Deploy)");
    console.log(" [0] \x1b[1;31mEXIT\x1b[0m");
    process.stdout.write("\n\x1b[1;33mNEXUS COMMAND > \x1b[0m");
}

function handle(input) {
    const cmd = input.trim();
    if (cmd === '1') buildMultiApp();
    else if (cmd === '2') manageAds();
    else if (cmd === '3') bulkRender();
    else if (cmd === '4') syncAll();
    else if (cmd === '0') process.exit();
    else menu();
}

function buildMultiApp() {
    console.log("\n[!] Creating Triple-Service App (PWA)...");
    const html = `
    <html><head><title>Nexus Multi-App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="manifest" href="manifest.json">
    <style>body{background:#000;color:gold;font-family:sans-serif;text-align:center;} .card{border:1px solid gold;margin:10px;padding:20px;}</style>
    </head><body>
    <h1>NEXUS GLOBAL SERVICES</h1>
    <div class="card"><h3>1. Video Downloader</h3><button>Access</button></div>
    <div class="card"><h3>2. Quran & Music Stream</h3><button>Access</button></div>
    <div class="card"><h3>3. Tech News Aggregator</h3><button>Access</button></div>
    <br><a href="https://paypal.me/abdullahharuna216" style="color:lime;">PAY FOR PREMIUM</a>
    </body></html>`;
    if (!fs.existsSync('./nexus_system/library')) fs.mkdirSync('./nexus_system/library', { recursive: true });
    fs.writeFileSync('./nexus_system/library/index.html', html);
    console.log("\x1b[1;32m[SUCCESS] Triple-Service App Generated.\x1b[0m");
    back();
}

function manageAds() {
    console.log("\n[!] Activating Auto-Invitation Logic...");
    console.log("-> Strategy: Generating SEO-optimized 'Invites' for Social Media.");
    const invite = `🔥 Join the Evolution! 🌑\nWatch Nexus TV: ${nexus.youtube}\nGet the App: https://Abdull216.github.io/Allarbaa_TV/`;
    fs.writeFileSync('social_invites.txt', invite);
    console.log("\x1b[1;32m[SUCCESS] Social Invites saved to social_invites.txt\x1b[0m");
    back();
}

function bulkRender() {
    console.log("\n[!] Starting Bulk Production of 8 Videos...");
    nexus.topics.forEach((topic, i) => {
        const id = i + 1;
        console.log(`Rendering Video ${id}: ${topic}...`);
        // Using FFmpeg to create 8 different placeholder videos
        exec(`ffmpeg -f lavfi -i color=c=black:s=1280x720:d=5 -vf "drawtext=text='${topic}':fontcolor=white:fontsize=50:x=(w-text_w)/2:y=(h-text_h)/2" -t 5 video${id}.mp4 -y`, (err) => {
            if (err) console.log(`Error on video ${id}`);
            else console.log(`[✓] Video ${id} Done.`);
        });
    });
    back();
}

function syncAll() {
    exec('git add . && git commit -m "Nexus Agency Bulk Update" && git push origin main', (err) => {
        if (err) console.log("\x1b[1;31m[ERROR] Sync failed.\x1b[0m");
        else console.log("\x1b[1;32m[SUCCESS] Systems Live on GitHub.\x1b[0m");
        back();
    });
}

function back() { process.stdout.write("\nPress Enter..."); rl.once('line', menu); }

menu();
rl.on('line', handle);
