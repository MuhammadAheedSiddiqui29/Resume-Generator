                                        // WORK EXPERIENCE FIELD

function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we"); 
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

                                        // ACADEMIC QUALIFICATION FIELD

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

                                        // GENERATING CV

function generateCV() {

                                        // NAME FUNCTIONALITY
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    let nameT2 = document.getElementById("nameT2");

    nameT1.innerHTML = nameField;
    nameT2.innerHTML = nameField;

                                        // CONTACT FUNCTIONALITY

    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");

    contactT.innerHTML = contactField;

                                        // ADDRESS FUNCTIONALITY

    let addressField = document.getElementById("addressField").value;
    let addressT = document.getElementById("contactT");

    addressT.innerHTML = addressField;

                                        // FACEBOOK FUNCTIONALITY

    let fbField = document.getElementById("fbField").value;
    let fbT = document.getElementById("fbT");

    fbT.innerHTML = fbField;

                                        // INSTA FUNCTIONALITY

    let instaField = document.getElementById("instaField").value;
    let instaT = document.getElementById("instaT");

    instaT.innerHTML = instaField;

                                        // LINKEDIN FUNCTIONALITY

    let linkedField = document.getElementById("linkedField").value;
    let linkedT = document.getElementById("linkedT");

    linkedT.innerHTML = linkedField;

                                        // OBJECTIVE FUNCTIONALITY

    let objectiveField = document.getElementById("objectiveField").value;
    let objectiveT = document.getElementById("objectiveT");

    objectiveT.innerHTML = objectiveField;
    objectiveT.style.color = "#4f4f4f";

                                        // WORK EXPERIENCE FUNCTIONALITY

    let wes = document.getElementsByClassName("weField");
    let str1 = '';

    for (let e of wes) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str1;

                                       // ACADEMIC QUALIFICATION FUNCTIONALITY


    let aqs = document.getElementsByClassName("eqField");
    let str2 = '';

    for (let e of aqs) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str2;

                                        // IMAGE FUNCTIONALITY

    let file = document.getElementById("imgField").files[0];
    
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function() {
        document.getElementById("imgT").src = reader.result;
    }
    
                                        // HIDE SHOW FUNCTIONALITY
                                        
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

                                        // PRINT CV

function printCV() {
    window.print();
}

