var luca = {
    strings: ["Luca D'Amico-Wong."],
    typeSpeed: 100,
    onComplete: function(self){
        self.cursor.remove();
        var author = {
            strings: ["- The Souls of Black Folk by W. E. B. Du Bois"],
            typeSpeed: 40,
        }
        var author_typed = new Typed('.author', author)
    }
};

var luca_typed = new Typed('.typed_input', luca);

function section(arg){
    var sections = ["coursework", "home", "projects", "research", "about"];
    for (let i = 0; i < sections.length; i++){
        if (sections[i] != arg){
            var content = document.getElementById(sections[i]);
            content.style.display = "none"; 
        }
    }
    var content = document.getElementById(arg);
    content.style.display = "block";

    return arg;
}

let prince_seen = false
let flowers1_seen = false
let flowers2_seen = false
let barnes_seen = false

function type(arg){
    if (arg == "coursework" && prince_seen === false) {
        var prince = {
            strings: ["- Le Petit Prince by Antoine de Saint Exupéry"],
            typeSpeed: 40,
        }
        var prince_typed = new Typed('.prince', prince)
        prince_seen = true
    }

    if (arg == "research" && flowers1_seen === false) {
        var flowers1 = {
            strings: ["- Flowers for Algernon by Daniel Keyes"],
            typeSpeed: 40,
        }
        var f1_typed = new Typed('.flowers1', flowers1)
        flowers1_seen = true
    }

    if (arg == "projects" && flowers2_seen === false) {
        var flowers2 = {
            strings: ["- Flowers for Algernon by Daniel Keyes"],
            typeSpeed: 40,
        }
        var flowers2_typed = new Typed('.flowers2', flowers2)
        flowers2_seen = true
    }

    if (arg == "about" && barnes_seen === false) {
        var barnes = {
            strings: ["- A History of the World in 10 1/2 Chapters by Julian Barnes"],
            typeSpeed: 40,
        }
        var barnes_typed = new Typed('.barnes', barnes)
        barnes_seen = true
    }
}
