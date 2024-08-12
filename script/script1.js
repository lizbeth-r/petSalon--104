let pet = {
    name: ["Kia", "Chloe", "Boby"],
    age: [4, 13, 9],
    gender: ["Female", "Female", "Male"],
    service: ["Grooming", "Grooming", "Grooming"],
    breed: ["Australian pastor", "French Poodle", "French Poodle"],
};

function init() {
    //Loop to display the content in the array
    for (i = 0; i < 3; i++) {
        document.getElementById("pets").innerHTML += `
             <div class="text-result">
                 <p>Pet ${i + 1}: ${pet.name[i]}, ${pet.age[i]} years, ${pet.gender[i]}, ${pet.breed[i]}, Service: ${pet.service[i]}</p>
             </div>
             `;
    }
}
function average() {
    let average = (pet.age[0] + pet.age[1] + pet.age[2]) / 3;
    document.getElementById("average").innerHTML += `
             <div class="text-result">
                 <p>The average is ${average.toFixed(2)}</p>
             </div>
             `;
}