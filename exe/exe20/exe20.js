function search_fruit() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('fruits');
    let messageElement = document.getElementById('message'); // Get the message element

    let foundMatch = false; // Initialize a variable to check if a match is found

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
            foundMatch = true; // Set to true if a match is found
        }
    }

    if (!foundMatch) {
        messageElement.textContent = "no results found"; // Display the message if no match is found
    } else {
        messageElement.textContent = ""; // Clear the message if a match is found
    }
}
