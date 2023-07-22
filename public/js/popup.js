let toggle = document.getElementById("dark-mode");
console.log(toggle);
toggle.addEventListener('change', function() {
    // Envoie un message au script de contenu
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, {darkMode: toggle.checked});
    // });
    console.log('test');
});