function shout(string){
    "Hello!".toUpperCase();
    return string.toUpperCase();

}
function whisper(string){
    "Hello!".toLowerCase();
    return string.toLowerCase();
}
function logShout(string){
    console.log("hello".toUpperCase());
    return;
}
function logWhisper(string){
        console.log("HELLO".toLowerCase());
        return;

}
function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase())
        {
            //console.log("I can\'t hear you!");
            return "I can\'t hear you!";
        }
    else if (string === string.toUpperCase())
        {
            //console.log("YES INDEED!");
            return "YES INDEED!"; 
        }
    else if (string === "Let's have dinner together!")
        {
            //console.log("I would love to!");
            return "I would love to!";
        }
}
