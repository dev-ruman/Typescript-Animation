const words = ["Sayfur Rahman", "a Developer"];
let currentWord = ""
let letter = "";
let c = 0;
let i = 0;
(function type(){
    if (c===words.length) {
        c=0;
    }
    currentWord = words[c];
    letter = currentWord.slice(0, ++i);
    document.querySelector(".name").textContent = letter;
    if(letter.length===currentWord.length){
        c++;
        i=0;
    }
    setTimeout(type, 400);
})();