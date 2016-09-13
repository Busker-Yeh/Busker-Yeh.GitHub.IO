function oneAuthorCite(options) {

    if (options.first != ""){
        if (options.last != ""){
            options.first = options.first.substring(0,1).toUpperCase() + ". ";
        }
    }
    if (options.middle != ""){
        options.middle = options.middle.substring(0,1).toUpperCase() + ". ";
    }
    if (options.last != ""){
        options.last = options.last.charAt(0).toUpperCase() +
            options.last.substring(1).toLowerCase();
        if (options.first == ""){
             options.last += ", ";
        }
        else {
            options.last += ". ";
        }
    }
    var name = options.last + options.first + options.middle;
    if (name == ""){
        if (options.company != ""){
            name = options.company;
        }
        else{
            name = options.title;
        }

    }
    if (options.year != ""){
        options.year = "(" + options.year + "). ";
    }
    else {
        options.year = "(n.d). ";
    }
    if (options.title != ""){
        options.title += ". "
    }
    if (options.city != "" ){
        if (options.state != ""){
            options.city += ", ";
        }
        else{
            options.city +=": ";
        }
    }
    if (options.state != ""){
        options.state += ": ";
    }
    if (options.company != ""){
        options.company += ".";
    }
    return name + options.year + options.title.italics() + options.city + options.state + options.company;
        
}

function createReference(){
    var reference = oneAuthorCite({
        first: O('firstName').value,
        middle: O('middleName').value,
        last: O('lastName').value,
        title: O('title').value,
        year: O('pubYear').value,
        company: O('pubComp').value,
        city:  O('pubCity').value,
        state: O('pubState').value
        });
    var li = document.createElement("li");
    li.innerHTML = reference;
    var ul = O("referenceList");
    ul.appendChild(li);
}
    

function O(obj){
    return document.getElementById(obj);
}
function S(obj){
    return O(obj).style;
}
