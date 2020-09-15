const RSS_URL = "https://www.antaranews.com/rss/top-news";

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => xmlToJson(str))
  .then(json => JSON.parse(json))
  .then(rss =>{
    console.log(rss);
    let judul ='';
    judul+= `
      <section>
        <h1>${rss.rss.channel.title}</h1>
      </section>
      `;
    var judul1 = document.getElementById("div1");
      judul1.insertAdjacentHTML("beforeend",judul); 
      const items = rss.rss.channel.item;
      let tambah=``;
      items.forEach(el => {
      var img = el.description["#cdata-section"];
      
        tambah += `
        <article>
          
          <h2>
            <a href="${el.link}" target="_blank" rel="noopener">
              ${el.title}
            </a>
            
          </h2>
          ${img}
          <p id="date">${el.pubDate}</p>
        </article>
      `;
    });
    var div1 = document.getElementById("div1");
    div1.insertAdjacentHTML("beforeend", tambah);
  });

const RSS_URL2 = "https://rss.kontan.co.id/news/keuangan";

fetch("https://rss.tempo.co/bisnis"+RSS_URL2)
  .then(response => response.text())
  .then(str => xmlToJson(str))
  .then(json => JSON.parse(json))
  .then(rss =>{
    console.log(rss);
    let judul_detik ='';
    judul_detik+= `
      <section>
        <h1>${rss.rss.channel.title}</h1>
      </section>
      `;
    var judul1_detik = document.getElementById("div2");
    judul1_detik.insertAdjacentHTML("beforeend",judul_detik);
    const items = rss.rss.channel.item;
    let tambah=``;
    items.forEach(el => {
      var title = el.title;
      var description = el.description["#cdata-section"];
      var img = el.description["#text"];
        
      tambah += `
        <article>
          
          <h2>
            <a href="${el.link}" target="_blank" rel="noopener">
              ${title}
            </a>
            
          </h2>
          ${img}${description}
          <p id="date">${el.pubDate}</p>
        </article>
      `;
    });
    var div1 = document.getElementById("div2");
    div1.insertAdjacentHTML("beforeend", tambah);

  });

var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
RSS_URL3 = "https://rss.tempo.co/bisnis";

fetch(proxyUrl+RSS_URL3)
  .then(response => response.text())
  .then(str => xmlToJson(str))
  .then(json => JSON.parse(json))
  .then(rss =>{
    console.log(rss);
    let judul_tempo ='';
    judul_tempo+= `
      <section>
        <h1>${rss.rss.channel.title}</h1>
      </section>
      `;
    var judul1_tempo = document.getElementById("div3");
    judul1_tempo.insertAdjacentHTML("beforeend",judul_tempo);
    const items = rss.rss.channel.item;
    let tambah=``;
    items.forEach(el => {
        var description = el.description["#cdata-section"];
      tambah += `
        <article>
          
          <h2 id="h23">
            <a href="${el.link}" target="_blank" rel="noopener">
              ${el.title}
            </a>
          </h2>
          <img src="${el.img}" id="img3" align="left" hspace="12">${description}
          
          
        </article>
      `;
    });
    var div1 = document.getElementById("div3");
    div1.insertAdjacentHTML("beforeend", tambah);

  });
