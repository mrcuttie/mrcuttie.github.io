const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const showCase = document.querySelector('#showcase');
const photoPaths = ['../images/Mushrooms.jpg', '../images/falls.jpg','../images/Grad.jpg']
const l = photoPaths.length;
let photo = 0;



nextButton.addEventListener('click', nextPhoto);


function nextPhoto(e){
    //e.preventDefault();
    if(photo <= l-2){
        photo +=1
        console.log(photo)
        console.log(photoPaths[photo])
        showCase.style.backgroundImage = `url(${photoPaths[photo]})`;

    }
    else {
        photo = 0
        showCase.style.backgroundImage = `url(${photoPaths[photo]})`;
    }

}

prevButton.addEventListener('click', prevPhoto);

function prevPhoto(e){
    e.preventDefault();
    if (photo == 0){
        photo = l-1
        console.log(photo)
        showCase.style.backgroundImage = `url(${photoPaths[photo]})`;


    }
    else if(photo <= l){
        photo -=1
        showCase.style.backgroundImage = `url(${photoPaths[photo]})`;

    }

}
//function phototime(e){
  //e.preventDefault();
  //while(photo < l){
    //photo += 1;
    //console.log(photoPaths[photo]);
    //showCase.style.backgroundImage = `url(${photoPaths[photo]})`;
  //}
  //photo = 0
//}
var myVar = setInterval(nextPhoto, 10000);


//console.log(this.height)
