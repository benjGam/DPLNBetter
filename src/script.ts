let theme_color = "#181818"; //Let it blank if you don't want to add color theme else write hexa formatted color : #FFFFFF
let font_color = "#E7E7E7"; //Let it blank to get default color text else write hexa formatted color : #FFFFFF
let resources_selector_enabled = true; // Switch it on false / true depending your needs
let resources_selected_color = "#5FA233"; //Let it blank to get default color text else write hexa formatted color : #FFFFFF
let font_balises = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'ul']; //Do not modify

function apply_theme() {
    document.getElementsByTagName('table')[1].style.backgroundColor = theme_color;
}

function apply_font_color() {
    font_balises.forEach(x => {
        modify_font_color(x);
    });
    modify_font_color('paragraph', 'class');
    modify_font_color('fast-travel-coord', 'class');
}
function modify_font_color(target: string, hook_method = 'tag') {
    for (let x of hook_method === 'class' ? document.getElementsByClassName(target) : document.getElementsByTagName(target)) { // Hook method specified like class so, op. by class else op. by tag
        (x as HTMLInputElement).style.color = font_color;
    }
}
function resources_selector() {
    const rgb2hex = (rgb: string) => {
        if (rgb.search("rgb") === -1) return rgb; // Param doesnt seems like rgb formatted str so return without processed
        let realRGB = rgb.match(/^rgb?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);

        if (realRGB == null) return '';

        const hex = (x: string) => parseInt(x).toString(16).slice(-2); // Parse x from 10 base to 16 base  
        return "#" + hex(realRGB[1]) + hex(realRGB[2]) + hex(realRGB[3]); // Return formated rgb output
    };


    let tables = document.getElementsByTagName("table");

    for (let table of tables) {

        let para = table.getElementsByClassName("paragraph")
        for (let paragraph of para) {

            
            let paragraph_children = paragraph.children;
            let list;
            for(let i = 0; i < paragraph_children.length; i++){
                if(paragraph_children[i].innerHTML.includes('À prévoir :') || paragraph_children[i].innerHTML.includes("Pour les quêtes de ce succès prévoyez")){
                    list = paragraph_children[i + 1];
                    break;
                }
            }

            if(list != undefined){
                for (let puce of list.getElementsByTagName('li')) {
                    puce.addEventListener('click', function (e) {
                        e.preventDefault();
                        console.log(this.style.color)
                        if (this.style.color != '' && rgb2hex(this.style.color) != '') {
                            if (rgb2hex(this.style.color).toUpperCase() === resources_selected_color.toLocaleUpperCase()) {
                                this.style.color = font_color != '' ? font_color : '#626262';
                            }
                        } else {
                            this.style.color = resources_selected_color;
                        }
                    });
                }
        }
    }
}

window.addEventListener('load', (event) => {
    event.preventDefault();
    if(document.URL.includes("https://www.dofuspourlesnoobs.com/")) //We're on DPLN
    {   
        if(theme_color != '') {
            apply_theme();
        }
        if(font_color != '') {
            apply_font_color();
        }
        if(resources_selector_enabled) {
            resources_selector();
        }
    }
})