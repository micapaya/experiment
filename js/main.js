const itOne = document.querySelector('#item_1');
const itTwo = document.querySelector('#item_2');
const itTree = document.querySelector('#item_3');
const itFour = document.querySelector('#item_4');

const frame1 = document.querySelector('.frame_1')

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
});

itTwo.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     menu3d.style.transform = 'rotateX(0deg) rotateY(-8deg)' ;
     colorTwo.style.opacity = '1';
     colorOne.style.opacity = '0';
     colorThree.style.opacity = '0';
     colorFour.style.opacity = '0';
});

itTree.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     menu3d.style.transform = 'rotateX(65deg) rotateY(-8deg)' ;
     colorThree.style.opacity = '1';
     colorTwo.style.opacity = '0';
     colorOne.style.opacity = '0';
     colorFour.style.opacity = '0';
});


itFour.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     menu3d.style.transform = 'rotateX(90deg) rotateY(-8deg)' ;
     colorThree.style.opacity = '0';
     colorTwo.style.opacity = '0';
     colorOne.style.opacity = '0';
     colorFour.style.opacity = '1';
});