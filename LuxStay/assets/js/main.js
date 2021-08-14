// header search box
var searchLocation = document.querySelector('.search__location');
var searchDate = document.querySelector('.search__date');
var searchGuest = document.querySelector('.search__guest');
searchLocation.onclick = function () {
    searchLocation.classList.add('search__box--active');
}
searchDate.onclick = function () {
    searchDate.classList.add('search__box--active');

}
searchGuest.onclick = function () {
    searchGuest.classList.add('search__box--active');
}

// slider 
$('.slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1500,
    items: 1

})

// tour slider
$('.tour .owl-carousel').owlCarousel({
    nav: true,
    dots: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed: 1000,

        },
        739: {
            items: 3,

        },
        1023: {
            items: 5,
        }
    }
})

// suggest slider
$('.suggest .owl-carousel').owlCarousel({
    nav: true,
    dots: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            // nav: false,

        },
        739: {
            items: 3,

        },
        1023: {
            items: 4,
        }
    }
})

//discover slider
$('.discover .owl-carousel').owlCarousel({
    nav: true,
    dots: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },
        739: {
            items: 3,

        },
        1023: {
            items: 3,
        }
    }
})

// Open modal menu

var openModalMenu = document.querySelector('.menu-btn');
var closeModalMenu = document.querySelector('.modal-menu__close');
var modalMenu = document.querySelector('.modal-menu');
var containerModalMenu = document.querySelector('.modal-menu-container');

function showModalMenu() {
    modalMenu.classList.add('modal-menu--show');
    containerModalMenu.classList.add('modal-menu-container--pull-right');
}

function hideModalMenu() {
    modalMenu.classList.remove('modal-menu--show');
    containerModalMenu.classList.remove('modal-menu-container--pull-right');
}
// open menu
openModalMenu.onclick = showModalMenu;
// close menu
closeModalMenu.onclick = hideModalMenu;
modalMenu.onclick = hideModalMenu;
containerModalMenu.onclick = function (event) {
    event.stopPropagation();
}

// show select language on moblie and tablet
var selectOnMBTL = document.querySelector('.js-select-on-mobile-tablet');
var openSelectOnMBTL = document.querySelector('.js-modal-menu__btn');

openSelectOnMBTL.onclick = function () {
    if (selectOnMBTL.className.indexOf('select-on-mobile-tablet--show') === -1) {
        selectOnMBTL.classList.add('select-on-mobile-tablet--show');
    }
    else {
        selectOnMBTL.classList.remove('select-on-mobile-tablet--show');

    }
}