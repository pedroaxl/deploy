$(document).ready(function() {
  $.Juitter.start({
    searchType:"fromUser", // needed, you can use "searchWord", "fromUser", "toUser"
    searchObject:"pedroaxl,joaomilho,danielweinmann,felipebcabral,dbiazus", // needed, you can insert a username here or a word to be searched for, if you wish multiple search, separate the words by comma.
    // The values below will overwrite the ones on the Juitter default configuration. 
    // They are optional here.
    // I'm changing here as a example only
    lang:"en", // restricts the search by the given language
    live:"live-10", // the number after "live-" indicates the time in seconds to wait before request the Twitter API for updates.
    placeHolder:"softa_twitter", // Set a place holder DIV which will receive the list of tweets example <div id="juitterContainer"></div>
    loadMSG: "image/gif", // Loading message, if you want to show an image, fill it with "image/gif" and go to the next variable to set which image you want to use on 
    imgName: "/images/loader.gif", // Loading image, to enable it, go to the loadMSG var above and change it to "image/gif"
    total: 7, // number of tweets to be show - max 100
    readMore: "link permanente »", // read more message to be show after the tweet content
    nameUser:"image", // insert "image" to show avatar of "text" to show the name of the user that sent the tweet 
    openExternalLinks:"newWindow", // here you can choose how to open link to external websites, "newWindow" or "sameWindow"
    filter:""  // insert the words you want to hide from the tweets followed by what you want to show instead example: "sex->censured" or "porn->BLOCKED WORD" you can define as many as you want, if you don't want to replace the word, simply remove it, just add the words you want separated like this "porn,sex,fuck"... Be aware that the tweets will still be showed, only the bad words will be removed
  });
});
