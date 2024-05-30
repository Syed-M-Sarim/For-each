
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

    allcontrollers.splice(ele.id, 1);
    console.log("allcontrollers updated=>", allcontrollers);
    showAllData();
  }
  
  function showAllData() {
    controllerDiv.innerHTML = "";
    allcontrollers.forEach(function (data, ind) {
      var ele = `<div onclick = "getItem(this)" id=${ind}>${data.code} - ${data.company} - ${data.type}  </div>`;
  
      controllerDiv.innerHTML += ele;
    });
  }
  
