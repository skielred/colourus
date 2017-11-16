/*function printCategories {
    //loop trough each ul and write out the contents of it including which cat it is
    //Suggest that we also directly style the category colours via the html which is written via this function and not the already prewritten css.
    //If a list item has a colour and a hex write a style="" with that inside it for that list item so that each indivdual list item can actually be colour if the user so desires

    
} */
function writeLists(){

    config.forEach(function (element) { //Intial loop for the array of categories
        //Intial ul and li header
        //loop trough all the contents of the second array in the object
        console.log(element);
        document.write("<ul style='colour:" + element.colour + ";'>");
        document.write("<li>" + element.name + "</li>");
        document.write("</ul>");
    }, this);
}

