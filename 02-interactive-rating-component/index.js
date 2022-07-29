
let ratingValue = 0;

function postToController() {
    
    // Removes the class "selectedNumber" from any element that has it
    let currentSelectedNumber = document.getElementsByClassName('selectedNumber');
    [].forEach.call(currentSelectedNumber, function(element) {
        element.classList.remove("selectedNumber");
    })

    // Goes through an array that containes all elements with the name "rating"
    for (i = 0; i < document.getElementsByName('rating').length; i++) {
            
        // If the "checked" property of an element is true, do what's inside the if
        if(document.getElementsByName('rating')[i].checked == true) {
            // Assigns the value of "value" property to ratingValue variable
            ratingValue = document.getElementsByName('rating')[i].value;
            
            // Gives to parent container the class "selectedNumber"
            let parent = document.getElementsByName('rating')[i].parentElement
            parent.classList.add("selectedNumber");
            
            break;
        }
    }
}

function onSubmit() {
    // check if the user has selected a number; if not, do nothing
    if (ratingValue !== 0) {
        document.getElementById('parentContainer').style.display = "none";
        document.getElementById('thankYouContainer').style.display = "flex";
        document.getElementById("selectedRating").innerHTML = ratingValue;
    }
}