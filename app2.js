var url_headlines = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ca73a18f0fee4491a7cb22b9979cb8fa`;
var url_business = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca73a18f0fee4491a7cb22b9979cb8fa`;
var url_entertainment = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=ca73a18f0fee4491a7cb22b9979cb8fa`;
var logged_uname_container = document.getElementById('logged_uname');
var headline_container = document.getElementById(
  'list-Items-container-headline'
);
var business_container = document.getElementById(
  'list-Items-container-business'
);
var entertainment_container = document.getElementById(
  'list-Items-container-entertainment'
);
//-------------------------------------------------
async function findHeadlineNews(url_headlines) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=ca73a18f0fee4491a7cb22b9979cb8fa`
    );
    const news = await response.json();
    console.log(news);
    //------render in cards
    let html = '';
    if (news.articles) {
      news.articles.forEach((news) => {
        html += `<div class="news-card"">
          <div class="news-card-image">
              <img src="${news.urlToImage}" alt="${news.title}" >
                <small style="display:block">${news.author}</small>
              
              <small>${news.publishedAt}</small>
              </div>
              <div class="news-card-info">
               <h3> <a href="${news.url}" target="_blank">${news.title}</a></h3>
                  </div>
                 
              </div>`;
      });
    }
    headline_container.innerHTML = html;
  } catch (error) {
    console.log('error', error);
  }
}
async function findBusinessNews(url_business) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca73a18f0fee4491a7cb22b9979cb8fa`
    );
    const news = await response.json();
    console.log(news);
    //-------render in cards
    let html2 = '';
    if (news.articles) {
      news.articles.forEach((news) => {
        html2 += `<div class="news-card"">
          <div class="news-card-image">
              <img src="${news.urlToImage}" alt="${news.title}" >
                <small style="display:block">${news.author}</small>
              
              <small>${news.publishedAt}</small>
              </div>
              <div class="news-card-info">
               <h3> <a href="${news.url}" target="_blank">${news.title}</a></h3>
                  </div>
                 
              </div>`;
      });
    }
    business_container.innerHTML = html2;
  } catch (error) {
    console.log('error', error);
  }
}
async function findEntertainmentNews(url_business) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=ca73a18f0fee4491a7cb22b9979cb8fa`
    );
    const news = await response.json();
    console.log(news);
    //-------render in cards
    let html3 = '';
    if (news.articles) {
      news.articles.forEach((news) => {
        html3 += `<div class="news-card"">
            <div class="news-card-image">
                <img src="${news.urlToImage}" alt="${news.title}" >
                  <small style="display:block">${news.author}</small>
                
                <small>${news.publishedAt}</small>
                </div>
                <div class="news-card-info">
                 <h3> <a href="${news.url}" target="_blank">${news.title}</a></h3>
                    </div>
                   
                </div>`;
      });
    }
    entertainment_container.innerHTML = html3;
  } catch (error) {
    console.log('error', error);
  }
}
function uname_writer() {
  var user = localStorage.getItem('logged_username');
  let html4 = '';
  html4 += `<span>${user}</span>`;
  console.log(html4);
  logged_uname_container.innerHTML = html4;
}
function logout() {
  window.open('SignIn.html', '_self');
  localStorage.removeItem('logged_username');
  localStorage.removeItem('logged_password');
}
//----------------------------------------------
window.onload = function () {
  findHeadlineNews();
  findBusinessNews();
  findEntertainmentNews();
  uname_writer();
};
