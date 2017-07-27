var scriptSource = (function() {
    var scripts = document.getElementsByTagName('script'),
        script = scripts[scripts.length - 1];
    if (script.getAttribute.length !== undefined) {
        return script.getAttribute('src')
    }
    return script.getAttribute('src', 2)
}());

var docname = scriptSource + ' is loaded sucsessfully. Happy coding!';
console.log(docname);

/*START CODING HERE*/
