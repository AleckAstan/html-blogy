/***Animation On Scroll init****/
AOS.init();



/********READ MORE function************ */



function readMore(article) {
    let dots = document.querySelector(`.card .article[data-article="${article}"] .dots`);
    let moreText = document.querySelector(`.card .article[data-article="${article}"] .moreText`);
    let btnText = document.querySelector(`.card .article[data-article="${article}"] .btn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more ";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less";
        moreText.style.display = "inline";
    }
}

/*************SCROLL******** */
var social = document.getElementById("social");
window.onscroll = function() {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;

    if (offset >= height) {
        social.style.display = "none";
    } else {
        social.style.display = "flex";
    }
};