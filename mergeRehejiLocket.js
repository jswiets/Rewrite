(async () => {
    // Tải và thực thi LKG_delete_header.js (Xóa header)
    let lkgDeleteHeader = await fetch("https://raw.githubusercontent.com/DungHoang120401/Nobita/refs/heads/main/Scripts/LKG_delete_header.js").then(res => res.text());
    eval(lkgDeleteHeader);

    // Tải và thực thi Reheji.js (Mở khóa RevenueCat)
    let reheji = await fetch("https://raw.githubusercontent.com/chxm1023/Rewrite/main/Reheji.js").then(res => res.text());
    eval(reheji);

    // Tải và thực thi Locket_Gold.js (Mở khóa Locket Gold)
    let locketGold = await fetch("https://raw.githubusercontent.com/DungHoang120401/Nobita/refs/heads/main/Scripts/Locket_Gold.js").then(res => res.text());
    eval(locketGold);

    // Tải và thực thi revenuecat của LK
     let revelk = await fetch("https://raw.githubusercontent.com/jswiets/Surge-LK/raw/refs/heads/main/scripts/langkhach/revenuecat.js").then(res => res.text());
    eval(revelk);
})();
