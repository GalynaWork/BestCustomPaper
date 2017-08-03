$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 3,
        spaceBetween: 50,
        autoplay: 3000,
        loop: true,
        breakpoints: {
            1200: {slidesPerView: 3, spaceBetween: 40, pagination: 3},
            1199: {slidesPerView: 2, spaceBetween: 30},
            767: {slidesPerView: 1, spaceBetween: 20}
        }
    });
    $(".scroll-down").click(function () {
        $('html, body').animate({scrollTop: $(".why-choose-us").offset().top}, 2000);
    });
    $("#close_promo").click(function () {
        $('.promo-block').addClass("close");
        $('.promo-circle-section').addClass("open");
        $('.bg_top-menu').addClass("press_promo");
    });
    $(".promo-circle").click(function () {
        $('.promo-block').removeClass("close");
        $('.promo-circle-section').removeClass("open");
        $('.bg_top-menu').removeClass("press_promo");
    });
});
(function (window, document) {
    'use strict';
    var file = 'images/sprite.svg', revision = 1;
    if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect)return true;
    var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null, request, data, insertIT = function () {
        document.body.insertAdjacentHTML('beforeend', data);
    }, insert = function () {
        if (document.body) insertIT(); else document.addEventListener('DOMContentLoaded', insertIT);
    };
    if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
        data = localStorage.getItem('inlineSVGdata');
        if (data) {
            insert();
            return true;
        }
    }
    try {
        request = new XMLHttpRequest();
        request.open('GET', file, true);
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                data = request.responseText;
                insert();
                if (isLocalStorage) {
                    localStorage.setItem('inlineSVGdata', data);
                    localStorage.setItem('inlineSVGrev', revision);
                }
            }
        };
        request.send();
    } catch (e) {
    }
}(window, document));