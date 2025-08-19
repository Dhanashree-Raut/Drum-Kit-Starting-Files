

var buttonLength = document.querySelectorAll("button").length ;
for( var i =0 ; i< buttonLength ; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click" , 
        function (){
            alert("Clicked");
    });
}