

var buttonLength = document.querySelectorAll("button").length ;
for( var i =0 ; i< buttonLength ; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click" , 
        function (){
            // alert("Clicked");
            

            let buttonSound = {
                'w': 'sounds/tom-1.mp3',
                'a': 'sounds/tom-2.mp3',
                's': 'sounds/tom-3.mp3',
                'd': 'sounds/tom-4.mp3',
                'j': 'sounds/snare.mp3',
                'k': 'sounds/crash.mp3',
                'l': 'sounds/kick-bass.mp3',
            };


            button = this.innerHTML;
            var audio = new Audio(buttonSound[button]);
            audio.play();

            // for( key in buttonSound){
            //     console.log(key);
            //     console.log(buttonSound[key]);
            // }

           
            // console.log(buttonSound);
    });
}