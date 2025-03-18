const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


const swiper = new Swiper('.swiper',{
    directio:'vertical',
    loop:true,

    pagination:{
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',    
    },
})
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
menuOpenButton.addEventListener("click", ( )=> {
    document.body.classList.toggle("show-mobile-menu");
});