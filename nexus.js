const fs = require('fs');
const { exec } = require('child_process');
const readline = require('readline');

const nexus = {
    owner: "Abdullah",
    email: "abdullahharuna216@gmail.com",
    paypal: "abdullahharuna216@gmail.com",
    youtube: "https://youtube.com/@allarbaaworld",
    repo: "Abdull216/Allarbaa_TV",
    version: "13.0.0",
    campaigns: ["Tech_Launch", "Horror_Viral", "Quran_Peace"]
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function menu() {
    process.stdout.write('\x1b[2J\x1b[0;0H');
    console.log("\x1b[1;36m" + `
    ╔════════════════════════════════════════════════════╗
    ║          NEXUS AGENCY MACHINE - v${nexus.version}         ║
    ╠════════════════════════════════════════════════════╣
    ║  REVENUE TRACKER: ACTIVE | APP BUILDER: READY      ║
    ║  ACTIVE CAMPAIGN: ${nexus.campaigns[0]}             ║
    ╚════════════════════════════════════════════════════╝
    \x1b[0m`);
    console.log(" [1] \x1b[1;32mBUILD MOBILE APP (PWA)\x1b[0m  -> (Generate Web-App)");
    console.log(" [2] \x1b[1;32mMANAGE AD CAMPAIGNS\x1b[0m    -> (Track & Target)");
    console.log(" [3] \x1b[1;32mDEPLOY TO MULTI-WEB\x1b[0m    -> (GitHub/Netlify/S3)");
    console.log(" [4] \x1b[1;32mAUTO-CONTENT ENGINE\x1b[0m    -> (Video & Post Gen)");
    console.log(" [5] \x1b[1;33mSYNC ALL SYSTEMS\x1b[0m       -> (Global Update)");
    console.log(" [0] \x1b[1;31mEXIT\x1b[0m");
    process.stdout.write("\n\x1b[1;36mNEXUS COMMAND > \x1b[0m");
}

function handle(input) {
    const cmd = input.trim();
    if (cmd === '1') buildApp();
    else if (cmd === '2') adManager();
    else if (cmd === '3') deployMulti();
    else if (cmd === '4') console.log("Generating Automated Content Flow...");
    else if (cmd === '5') syncAll();
    else if (cmd === '0') process.exit();
    else menu();
}

// --- AGENCY CORE FUNCTIONS ---

function buildApp() {
    console.log("\n[!] Constructing PWA (Progressive Web App) manifests...");
    const manifest = JSON.stringify({
        name: "Nexus Hub App",
        short_name: "Nexus",
        start_url: "/index.html",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#ffd700"
    }, null, 2);
    fs.writeFileSync('./nexus_system/library/manifest.json', manifest);
    console.log("\x1b[1;32m[SUCCESS] Mobile App files generated.\x1b[0m");
    back();
}

function adManager() {
    console.log("\n--- NEXUS AD CAMPAIGN MANAGER ---");
    nexus.campaigns.forEach((c, i) => console.log(`[${i}] Campaign: ${c}`));
    console.log("\n[!] Injecting Tracking Pixel into allarbaa.cloud logic...");
    const pixel = `<script>console.log('Nexus Tracking Active: campaign=${nexus.campaigns[0]}');</script>`;
    fs.appendFileSync('./nexus_system/library/index.html', pixel);
    console.log("\x1b[1;32m[SUCCESS] Ad Tracking Pixel Live.\x1b[0m");
    back();
}

function deployMulti() {
    console.log("\n--- SELECT DEPLOYMENT TARGET ---");
    console.log("A. GitHub Pages (Current)");
    console.log("B. Netlify (Drag & Drop Ready)");
    console.log("C. Vercel (Production Ready)");
    console.log("\n[!] Preparing 'dist.zip' for multi-site deployment...");
    // Logic to zip the library folder for easy upload to Netlify
    back();
}

function syncAll() {
    console.log("\n[!] Global Sync Initiated...");
    exec('git add . && git commit -m "Nexus Agency Update" && git push origin main', (err) => {
        if (err) console.log("\x1b[1;31m[ERROR] Sync failed.\x1b[0m");
        else console.log("\x1b[1;32m[SUCCESS] All Platforms Updated via GitHub Bridge.\x1b[0m");
        back();
    });
}

function back() { process.stdout.write("\nPress Enter..."); rl.once('line', menu); }

menu();
rl.on('line', handle);
