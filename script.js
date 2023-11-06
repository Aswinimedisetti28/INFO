$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Learner", "Tech Leader",  "Gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Leaner", "Tech Leader", "Gamer"],
        typeSpeed: 100,//, "Blogger", "Designer", "Developer"
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// Specify the path to your CV file
var cvFilePath = "https://github.com/Aswinimedisetti28/My-Personal-portfolio/blob/main/Aswini%20cv.pdf";
var AchiveFilepath ="https://github.com/Aswinimedisetti28/My-Personal-portfolio/blob/main/Best%20Achivements.pdf";
// Add an event listener to open the CV file in a new tab
document.getElementById('openCvLink').addEventListener('click', function() {
    window.open(cvFilePath, '_blank')});
document.getElementById('openAchivementLink').addEventListener('click', function(){
    window.open(AchiveFilepath, '_blank');
 } );
