// Isi dari file widget-rss.js yang diupload ke hosting/GitHub
(async () => {
    // Cari elemen tempat artikel akan dimunculkan, jika tidak ada, buat otomatis
    let container = document.getElementById('rel');
    if (!container) {
        container = document.createElement('div');
        container.id = 'rel';
        document.body.appendChild(container); // Memunculkan di akhir halaman (atau sesuaikan)
    }
    
    container.innerHTML = "Memuat...";
    
    // Daftar Feed
    const x = [
        "https://blogeespss.blogspot.com/feeds/posts/default",
        "https://ansyahsoslo.blogspot.com/feeds/posts/default"
    ];
    const g = u => fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(u)).then(r => r.json());
    
    try {
        let e = await Promise.all(x.map(g)), a = [];
        e.map(r => a.push(...(r?.items?.slice(0, 2) || [])));
        container.innerHTML = "<h3>Artikel Terkait</h3><ul>" + a.sort(() => Math.random() - .5).map(i => `<li><a href="${i.link}" target="_blank">${i.title}</a></li>`).join("") + "</ul>";
    } catch (err) {
        container.innerHTML = "";
    }
})();
