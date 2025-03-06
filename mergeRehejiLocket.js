(async () => {
    const scriptUrls = [
        "https://raw.githubusercontent.com/DungHoang120401/Nobita/refs/heads/main/Scripts/LKG_delete_header.js",
        "https://raw.githubusercontent.com/chxm1023/Rewrite/main/Reheji.js",
        "https://raw.githubusercontent.com/DungHoang120401/Nobita/refs/heads/main/Scripts/Locket_Gold.js",
        "https://raw.githubusercontent.com/jswiets/Surge-LK/refs/heads/main/scripts/langkhach/revenuecat.js"
    ];

    try {
        const scripts = await Promise.all(scriptUrls.map(url => fetch(url).then(res => res.text())));
        
        scripts.forEach(script => {
            try {
                eval(script);  // Execute each script safely
            } catch (err) {
                console.error("Error executing script:", err);
            }
        });

        console.log("All scripts executed successfully!");
    } catch (error) {
        console.error("Error loading scripts:", error);
    }
})();
