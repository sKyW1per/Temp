function runthething() {
    var msdelay = 1000;

    function createHTMLBox() {
        // Getting input values
        var msDelay = document.getElementById("msDelay").value;
        var dateInput = document.getElementById("dateInput").value;
    
        // Creating the HTML box
        var htmlBox = document.createElement("div");
        htmlBox.style.width = "300px";
        htmlBox.style.padding = "20px";
        htmlBox.style.border = "1px solid #ccc";
        htmlBox.style.borderRadius = "5px";
        htmlBox.style.marginTop = "20px";
    
        // Creating input field for milliseconds delay
        var msInputLabel = document.createElement("label");
        msInputLabel.textContent = "Milliseconds Delay:";
        var msInput = document.createElement("input");
        msInput.type = "text";
        msInput.value = msDelay;
        msInput.style.width = "100%";
        msInputLabel.appendChild(msInput);
    
        // Creating input field for date
        var dateInputLabel = document.createElement("label");
        dateInputLabel.textContent = "Date (YYYY-MM-DD HH:mm:ss):";
        var dateInputField = document.createElement("input");
        dateInputField.type = "text";
        dateInputField.value = dateInput;
        dateInputField.style.width = "100%";
        dateInputLabel.appendChild(dateInputField);
    
        // Appending input fields to HTML box
        htmlBox.appendChild(msInputLabel);
        htmlBox.appendChild(document.createElement("br")); // Line break
        htmlBox.appendChild(dateInputLabel);
    
        // Appending HTML box to body
        document.body.appendChild(htmlBox);
    }


    function clickButton(msdelay) {
        setTimeout(function() {
            var button = document.getElementById("troop_confirm_submit");
            if (button) {
                button.click();
            } else {
                alert("Button not found with name: " + buttonName);
            }
        }, msdelay)
    };
    clickButton("troop_confirm_submit", msdelay);
    }
