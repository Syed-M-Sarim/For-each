var allcontrollers = [
    {
        company: "sony",
        type: "PS5",
        price: "5000",
    },
    {
        company: "sony",
        type: "PS4",
        price: "4000",
    },
    {
        company: "Microsoft",
        type: "XBOX1",
        price: "3000",
    },
];

var controllerDiv = document.getElementById("controllers");

function getItem(ele) {
    console.log("element==>", ele.id);

    // Correcting the deletion logic
    var index = parseInt(ele.id); // Parsing ID to integer
    allcontrollers.splice(index, 1);
    console.log("allcontrollers updated=>", allcontrollers);
    showAllData();
}

function showAllData() {
    controllerDiv.innerHTML = "";
    allcontrollers.forEach(function (data, ind) {
        // Fixing the display of controller data
        var ele = `<div onclick="getItem(this)" id="${ind}">${data.price} - ${data.company} - ${data.type}</div>`;
        controllerDiv.innerHTML += ele;
    });
}

// Ensure initial data is shown
showAllData();

  
