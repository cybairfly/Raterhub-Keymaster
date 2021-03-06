// ==UserScript==
// @name         Raterhub Keymaster - pronunciation/task 1 (rating)
// @description  Raterhub interface keyboard mapping for easy rating
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       cybærfly
// @match        https://www.raterhub.com/evaluation/rater/task/show*
// @icon         data:image/x-icon;base64,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AP////////////7+/v///////////gAAAP8AAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlAAAAMQAAACUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJMTEx///////+/v7//v7+//7+/v//////MTEx/wAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKUAAAD//////v/////+/v7///////////4AAAD/AAAApAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKwAAAP9OTk7+/////v/////////+Tk5O/gAAAP8AAAAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdgAAAP8AAAD/MzMz/wAAAP8AAAD/AAAAdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKwAAAKUAAADHAAAApQAAACoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////+P////B////gP///wB///8Af8B/AH8AH4D+AA4B/AAA4/gAAf/wAAH/8AAB//AAAf/gAAD/4AAA/+AAAP/gAAD/8AAB//AAAf/wAAH/+AAB//wAAOP+AA4B/wAfgP/AfwB///8Af///AH///4D////B////4//////
// @run-at       document-start
// @grant        none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function() {
    var sample = document.getElementsByTagName("audio")[0];
    sample.play();

    var overlay = document.createElement("div");
    overlay.style = "position: fixed; top: 0; right: 0; font-family: monospace; background-color: orange;";
    overlay.innerHTML += "Correct: Enter<br>";
    overlay.innerHTML += "Incorrect: Decimal (Delete)<br><br>";
    overlay.innerHTML += "Unfamiliar: Num 4 (LEFT)<br>";
    overlay.innerHTML += "Not Sure: Num 6 (RIGHT)<br><br>";
    overlay.innerHTML += "Play sample: Num 0 (Insert) / UP (Num 8)<br>";
    overlay.innerHTML += "Play context: Num 1-3 / END, DOWN, PGDN<br><br>";
    overlay.innerHTML += "<a href=''><b>PLEASE SUPPORT THIS TOOL IF IT HELPS YOU</b></a>";
    document.body.appendChild(overlay);

    var comment;
    var submitted = false;

    document.addEventListener("keydown", keyDown);
    var context1 = document.getElementsByTagName("audio")[2];
    var context2 = document.getElementsByTagName("audio")[4];
    var context3 = document.getElementsByTagName("audio")[6];
    var correct = document.getElementById("editable-102-input");
    var wrong = document.getElementById("editable-104-input");
    var unsure = document.getElementById("editable-106-input");
    var unfamiliar = document.getElementById("editable-98-input");

    function keyDown(e) {
        var keyCode = e.keyCode;

        switch (keyCode) {
            case 13://enter
                if (context1) context1.play();
                if (submitted) break;
                submitted = true;
                correct.checked = true;
                document.taskForm.submit();
                break;
            case 38://up
            case 45://insert
            case 96://numpad0
            case 104://numpad8
                sample.play();
                break;
            case 35://end
            case 49://alpha1
            case 97://numpad1
                context1.play();
                break;
            case 40://down
            case 50://alpha2
            case 98://numpad2
                context2.play();
                break;
            case 34://pagedown
            case 51://alpha3
            case 99://numpad3
                context3.play();
                break;
            case 37://left
            case 100://numpad4
                unfamiliar.checked = true;
                document.taskForm.submit();
                break;
            case 46://delete
            case 110://decimal
                wrong.checked = true;
                document.taskForm.submit();
                break;
            case 39://right
            case 102://numpad6
                unsure.checked = true;
                document.taskForm.submit();
                break;
        }
    }

}, true);

/*
window.document.onload = function(event) {
    document.getElementsByTagName("audio")[0].removeAttribute("controls");
    alert("test");
    //$("audio").prop("preload", "none");
};

var target = document.getElementsByTagName('body')[0];

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
      document.getElementsByTagName("audio")[1].onloadedmetadata = rem();
      //document.getElementsByTagName("audio")[1].removeAttribute("controls");
    //console.log(mutation);
  });
});

// configuration of the observer:
var config = { childList: true, subtree: true, attributes: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);

document.getElementsByTagName("audio")[1].addEventListener("loadstart", function(){
    //document.getElementsByTagName("audio")[0].preload = "none";
    alert("done");
});


$(document).ready(function() {
  $('audio').prop('preload', 'none');
    document.getElementsByTagName("audio")[1].removeAttribute("controls");
});

audio.addEventListener("play", function(){
    //document.getElementsByTagName("audio")[0].preload = "none";
    alert("done");
});

(function() {
    //'use strict';
    document.getElementsByTagName("audio")[3].preload = "none";
    document.getElementsByTagName("audio")[1].removeAttribute("controls");
    //alert("done");

})();
*/
