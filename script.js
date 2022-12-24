let dropdown = document.getElementById("dropdown-box");
let result = document.getElementById("result");
let filterbtn = document.getElementById("btn");
let newName = document.getElementById("input1");
let newProfession = document.getElementById("input2");
let newAge = document.getElementById("input3");
let newBtn = document.getElementById("btn2");

let userData= [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" },
]
// let newThing = userData.filter();
function filterCode() {
    result.innerHTML = "";
    let dropdownValue = dropdown.value;

    if (dropdownValue == "profession") {
        alert("Select a profession before clicking the button.");
        return;
    }

    userData.forEach((item) => {
        if (item.profession === dropdownValue) {
            let div = document.createElement("div");
            div.innerText = item.id + ". Name: " + item.name + "  Profession: " + item.profession + "  Age: " + item.age;
            result.append(div);
        }
    })

}btn.addEventListener("click", filterCode);

function createNew() {
    let Uname = newName.value;
    let age = newAge.value;
    let prf = newProfession.value;
    let nomber = userData.length;
    ++nomber;

    let newArr = { id: nomber, name: `${Uname}`, age: `${age}`, profession: `${prf}` }

    if(Uname !== "" && age !== "" && prf !== ""){
        userData.push(newArr);
    }
    else{
        alert("fill complete detail.")
    }
    newName.value = "";
    newAge.value = "";
    newProfession.value = "";
}
newBtn.addEventListener("click", createNew);