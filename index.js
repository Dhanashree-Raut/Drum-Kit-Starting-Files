
 var buttonSound = {
                'w': 'sounds/tom-1.mp3',
                'a': 'sounds/tom-2.mp3',
                's': 'sounds/tom-3.mp3',
                'd': 'sounds/tom-4.mp3',
                'j': 'sounds/snare.mp3',
                'k': 'sounds/crash.mp3',
                'l': 'sounds/kick-bass.mp3',
            };

var buttonLength = document.querySelectorAll("button").length ;
for( var i =0 ; i< buttonLength ; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click" , 
        function (){
            button = this.innerHTML;
            makeSound( button);
    });
}

document.addEventListener("keypress", function (e) {
    keyPressed = e.key ;
    console.log(e.key );
    makeSound( keyPressed);
});

function makeSound( key){
     audio = new Audio(buttonSound[key]);
    audio.play();
}