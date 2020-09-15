
const RSS_URL = "https://www.antaranews.com/rss/top-news";

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    let judul = ``;
      judul += `
          <section>
            <h1>${data.querySelector("title").innerHTML}</h1>
          </section>

          `;
    var judul1 = document.getElementById("div1");
      judul1.insertAdjacentHTML("afterbegin",judul);
    const items = data.querySelectorAll("item");
    let tambah = ``;
    items.forEach(el => {
      var description = el.querySelector("description").innerHTML;
      var img = description.replace("<![CDATA[","");
      img = img.replace("]]>","");
      //img = img.replace('align="left"','');
      img = img.replace('border="0"','hspace="9"');
      tambah += `
        <article>
          
          <h2>
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML}
            </a>
            
          </h2>
          ${img}
          <p id="date">${el.querySelector("pubDate").innerHTML}</p>
        </article>
      `;
    });
    var div1 = document.getElementById("div1");
    div1.insertAdjacentHTML("beforeend", tambah);
  });

  const RSS_URL2 = "http://rss.detik.com/index.php/detikcom_nasional";

  fetch(RSS_URL2)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
    .then(data =>{
      let judul = ``;
      judul += `
          <section>
            <h1>${data.querySelector("title").innerHTML}</h1>
          </section>

          `;
      var judul1 = document.getElementById("div2");
      judul1.insertAdjacentHTML("afterbegin",judul);
      const items = data.querySelectorAll("item");
      let tambah = ``;
      items.forEach(el => {
        var title = el.querySelector("title").innerHTML;
        title = title.replace("<![CDATA[","");
        title = title.replace("]]>", "");
        var description = el.querySelector("description").innerHTML;
        description = description.replace("&lt;","<");
        description = description.replace('&quot;','"');
        description = description.replace("&gt;",">");
        description = description.replace('hspace="7"','hspace="9"');
        description = description.replace("<![CDATA[","");
        description = description.replace("]]>", "");
        tambah += `
          <article >
            <h2>
                  <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
                  ${title}
                  </a>
            </h2>
            ${description}
            <p id="date">${el.querySelector("pubDate").innerHTML}</p>
            </article>

            
          `;
      });
      var div2 = document.getElementById("div2");
      div2.insertAdjacentHTML("beforeend",tambah);
    })


var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
RSS_URL3 = "https://rss.tempo.co/bisnis";

fetch(proxyUrl + RSS_URL3)
  .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      let judul = ``;
      judul += `
          <section>
            <h1>${data.querySelector("title").innerHTML}</h1>
          </section>
          `;
      var judul1 = document.getElementById("div3");
      judul1.insertAdjacentHTML("afterbegin",judul);
    const items = data.querySelectorAll("item");
    let tambah=``;
    items.forEach(el => {
      var description = el.querySelector("description").innerHTML;
      description = description.replace("<![CDATA[","");
        description = description.replace("]]>", "");
      tambah += `
        <article>
          <h2>
            <a href ="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML}
            </a>
          </h2>
          <img src="${el.querySelector("img").innerHTML}" id="img3" align="left" hspace="12">${description}
          
        </article>
      `;
    });
    var div3 = document.getElementById("div3");
    div3.insertAdjacentHTML("beforeend",tambah);
  });








