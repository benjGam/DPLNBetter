let theme_color = "" //Let it blank if you don't want to add color theme else write hexa formatted color : #FFFFFF
let text_color = "" //Let it blank to get default color text

function turn_on_personnalized_theme() {

}

(function() {
    if(document.URL.includes("https://www.dofuspourlesnoobs.com/")) //We're on website
    {
        if(theme_color != '') {
            turn_on_personnalized_theme()
        }
    }


})();