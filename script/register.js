let pets=[];//pets array

function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}

function isValid(pet){
    let validation = true;
    let inputName = document.getElementById("txtName");
    let inputAge = document.getElementById("txtAge");

    inputName.classList.remove("error")
    inputAge.classList.remove("error")

    if(pet.name == ""){
        validation=false;
        inputName.classList.add("error")
    }

    if(pet.age == ""){
        validation=false;
        inputAge.classList.add("error")
    }
    return validation;
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("service").value;


    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed, inputService);

    if(isValid(newPet)==true){
        pets.push(newPet);
        displayRow();
    }

    document.getElementById("petsForm").reset();
}

function deletePet(id){
    console.log("Deleting"+ id);
    pets.splice(id,1);
    document.getElementById(id).remove();
    displayRow();

}

function init(){
    let pet1 = new Pet("Scooby", 10,"Male","Husky", "Grooming");
    let pet2 = new Pet("Scrappy", 9, "Male", "Mixed", "Grooming");
    pets.push(pet1, pet2);
    displayRow();
;}

window.onload=init;//wait to render the html