let theme_color = "#181818"; //Let it blank if you don't want to add color theme else write hexa formatted color : #FFFFFF
let font_color = "#E7E7E7"; //Let it blank to get default color text else write hexa formatted color : #FFFFFF
let font_balises = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'ul']; //Do not modify

function apply_theme() {
    document.getElementsByTagName('table')[1].setAttribute('style', 'width:100%;background-color:' + theme_color + ';');
}
function apply_font_color() {
    font_balises.forEach(x => {
        modify_font_color(x);
    });
    for (let x of document.getElementsByClassName('paragraph')) {
        x.setAttribute('style', x.getAttribute('style') != null ? x.getAttribute('style') + 'color:' + font_color + ';' : 'color:' + font_color + ';');
    }
    for (let x of document.getElementsByClassName('fast-travel-coord')) {
        x.setAttribute('style', x.getAttribute('style') != null ? x.getAttribute('style') + 'color:' + font_color + ';' : 'color:' + font_color + ';');
    }
}
function modify_font_color(what) {
    for (let x of document.getElementsByTagName(what)) {
        x.setAttribute('style', x.getAttribute('style') != null ? x.getAttribute('style') + 'color:' + font_color + ';' : 'color:' + font_color + ';');
    }
}

(function() {
    if(document.URL.includes("https://www.dofuspourlesnoobs.com/")) //We're on DPLN
    {   
        if(theme_color != '') {
            apply_theme();
        }
        if(font_color != '') {
            apply_font_color();
        }
    }


})();