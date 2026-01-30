const fs = require('fs');
console.log("--- BUILDING NEXUS FACTORY ---");

// Folders
['./nexus_system/library', './nexus_system/storage', './nexus_system/data'].forEach(d => {
    fs.mkdirSync(d, { recursive: true });
});

// Templates
const videoTemplate = `<!DOCTYPE html><html lang="en"><head><title>Allarbaa TV</title><script src="https://cdn.tailwindcss.com"></script></head><body class="bg-black text-white"><nav class="p-4 border-b border-gray-800 flex justify-between"><h1 class="text-blue-500 font-bold text-xl">Allarbaa.cloud</h1><button class="bg-blue-600 px-4 py-1 rounded">Subscribe</button></nav><div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-4" id="grid"><!-- NEXUS_INJECT_POINT --></div><footer class="text-center py-10 text-gray-600">Powered by Nexus OS</footer></body></html>`;

const saasTemplate = `<!DOCTYPE html><html lang="en"><head><title>{{TITLE}}</title><script src="https://cdn.tailwindcss.com"></script></head><body class="bg-gray-900 text-white"><header class="text-center py-20"><h1 class="text-5xl font-bold mb-4">{{TITLE}}</h1><p class="text-xl text-gray-400">The Ultimate Tool for {{NICHE}}</p><div class="mt-8 bg-gray-800 p-6 rounded-lg inline-block border border-gray-700"><p class="text-lg mb-2">Lifetime Access: 9</p><p class="text-xs text-gray-500 font-mono bg-black p-2 rounded mb-4">Wallet: {{WALLET}}</p><button class="bg-green-500 px-6 py-2 rounded font-bold text-white">I Sent Crypto</button></div></header></body></html>`;

fs.writeFileSync('./nexus_system/library/video_theme.html', videoTemplate);
fs.writeFileSync('./nexus_system/library/saas_theme.html', saasTemplate);

// Brain & Config
fs.writeFileSync('./nexus_system/data/brain.json', JSON.stringify({ last_login: null, sites: 0 }));
fs.writeFileSync('./nexus_system/data/config.json', JSON.stringify({ wallet: 'NOT_SET' }));

console.log("[SUCCESS] Factory Built.");
