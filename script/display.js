function displayRow() {
    let table = document.getElementById("pets");
    let row = "";
    //travel the array(for)
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        //create the template
        row +=`
        <tr id= '${i}'>
            <td>${i+1}</td>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i});">Delete</button></td>
        </tr>
        `;
        //display the row on the html
    }

    table.innerHTML = row;
    displayInfo();
}

function displayInfo(){
    document.getElementById("totalPet").innerHTML=pets.length;
}