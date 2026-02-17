// Fill in the most recent news and show more news if requested.

var news = document.getElementById("newsarticles");
var newsbutton = document.getElementById("newsbutton");

var numNewsArticles = 0;

function newsButtonClick() {
  numNewsArticles += 9;
  var text = "";
  for (let i = 0; i < Math.min(numNewsArticles, pubNews.length); i++) {
    let newsitem = pubNews[i];
    text += "<article class='col-4 col-12-xsmall work-item'><a href='images/news/" + newsitem.image + "' class='image fit thumb'><img src='images/news/" + newsitem.thumb + "' title=\"<p>" + newsitem.caption + "</p>\"/></a><h3><a class='highlight'>" + newsitem.date + "</a>" + newsitem.title + "</h3></article>";
  }
  news.innerHTML = text;

  // Disable button if all news articles are shown.
  if (numNewsArticles >= pubNews.length) {
    newsbutton.classList = "button disabled"
  }

  // Make the news poptrox.
  $('#news').poptrox({
    overlayColor: '#2c2c2c',
    overlayOpacity: 0.85,
    popupCloserText: '',
    popupLoaderText: '',
    selector: '.work-item a.image',
    usePopupCaption: true,
    usePopupDefaultStyling: false,
    usePopupEasyClose: false,
    usePopupNav: true,
    windowMargin: (breakpoints.active('<=small') ? 0 : 25)
  });
}

// Initialize the news when first created.
newsButtonClick();