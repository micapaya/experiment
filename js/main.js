const itOne = document.querySelector('#item_1');
const itTwo = document.querySelector('#item_2');
const itTree = document.querySelector('#item_3');
const itFour = document.querySelector('#item_4');

const frame1 = document.querySelector('#submenu1');
const frame2 = document.querySelector('#submenu2');
const frame3 = document.querySelector('#submenu3');
const frame4 = document.querySelector('#submenu4');

const colorOne = document.querySelector('#color_1');
const colorTwo = document.querySelector('#color_2');
const colorThree = document.querySelector('#color_3');
const colorFour = document.querySelector('#color_4');

const menu3d = document.querySelector('#menu3d');



itOne.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     menu3d.style.transform = 'rotateX(-32deg) rotateY(-8deg)' ;
     colorOne.style.opacity = '1';
     colorTwo.style.opacity = '0';
     colorThree.style.opacity = '0';
     colorFour.style.opacity = '0';
     frame1.style.opacity = '0';
     frame2.style.opacity = '0';
     frame3.style.opactiy = '0';
     frame4.style.opactiy = '0';
});

itOne.addEventListener("click",  function( event ) {   
    // met en surbrillance la cible de mouseenter
     menu3d.style.transform = 'rotateX(-90deg) rotateY(-90deg)' ;
     colorOne.style.opacity = '0';
     colorTwo.style.opacity = '0';
     colorThree.style.opacity = '0';
     colorFour.style.opacity = '0';
     frame1.style.opacity = '1';

});


itTwo.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     menu3d.style.transform = 'rotateX(0deg) rotateY(-8deg)' ;
     colorTwo.style.opacity = '1';
     colorOne.style.opacity = '0';
     colorThree.style.opacity = '0';
     colorFour.style.opacity = '0';
     frame1.style.opacity = '0';
     frame2.style.opacity = '0';
     frame3.style.opactiy = '0';
     frame4.style.opactiy = '0';
});
itTwo.addEventListener("click",  function( event ) {   
    // met en surbrillance la cible de mouseenter
     menu3d.style.transform = 'rotateX(-60deg) rotateY(-36deg)' ;
     colorOne.style.opacity = '0';
     colorTwo.style.opacity = '0';
     colorThree.style.opacity = '0';
     colorFour.style.opacity = '0';
     frame2.style.opacity = '1';
});

itTree.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     menu3d.style.transform = 'rotateX(65deg) rotateY(-8deg)' ;
     colorThree.style.opacity = '1';
     colorTwo.style.opacity = '0';
     colorOne.style.opacity = '0';
     colorFour.style.opacity = '0';
     frame1.style.opacity = '0';
     frame2.style.opacity = '0';
     frame3.style.opactiy = '0';
     frame4.style.opactiy = '0';
});
itTree.addEventListener("click",  function( event ) {   
    // met en surbrillance la cible de mouseenter
     menu3d.style.transform = 'rotateX(-25deg) rotateY(-76deg)' ;
     colorOne.style.opacity = '0';
     colorTwo.style.opacity = '0';
     colorThree.style.opacity = '0';
     colorFour.style.opacity = '0';
     frame3.style.opactiy = '1';
   
});


itFour.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     menu3d.style.transform = 'rotateX(90deg) rotateY(-8deg)' ;
     colorThree.style.opacity = '0';
     colorTwo.style.opacity = '0';
     colorOne.style.opacity = '0';
     colorFour.style.opacity = '1';
     frame1.style.opacity = '0';
     frame2.style.opacity = '0';
     frame3.style.opactiy = '0';
     frame4.style.opactiy = '0';
});

itFour.addEventListener("click",  function( event ) {   
    // met en surbrillance la cible de mouseenter
     menu3d.style.transform = 'rotateX(-91deg) rotateY(-26deg)' ;
     colorOne.style.opacity = '0';
     colorTwo.style.opacity = '0';
     colorThree.style.opacity = '0';
     colorFour.style.opacity = '0';
     frame4.style.opactiy = '1';
});