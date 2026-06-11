const x = [
  "https://blogeespss.blogspot.com/feeds/posts/default", // Sudah diubah ke https
  "https://ansyahsoslo.blogspot.com/feeds/posts/default"
];

const g = u => fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(u)).then(r => r.json());

(async () => {
  try {
    let e = await Promise.all(x.map(g));
    let a = [];
    e.map(r => a.push(...(r?.items?.slice(0, 2) || [])));
    let artikelAcak = a.sort(() => Math.random() - .5).slice(0, 20);
    
    document.getElementById('rel').innerHTML = "<h3>Artikel Terkait</h3><ul>" + 
      artikelAcak.map(i => `<li><a href="${i.link}" target="_blank" rel="noopener">${i.title}</a></li>`).join("") + 
      "</ul>";
  } catch (error) {
    console.error("Gagal memuat feed:", error);
    document.getElementById('rel').innerHTML = ""; 
  }
})();
