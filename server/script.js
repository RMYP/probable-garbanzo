const cars = [
{
    "model" : "Panzer II",
    "year" : "1938",
    "available" : true
},{
    "model" : "Panzer III",
    "year" : "1943",
    "available" : true
},{
    "model" : "Panzer IV",
    "year" : "1949",
    "available" : true
}
]

function CreateCard(cars){
    let card = document.createElement('div');
    card.classList.add('col');
    card.innerHTML = `              
    <div class="card h-100">
        <img src="/public/images/maxresdefault.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${cars.model}</h5>
            <p class="card-text">year ${cars.year}</p>
        </div>
        <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>`;
    return card;
    }

function sortCarByYearDescendingly(cars) {
    const result = [...cars];
    let tempResult = []
    tempResult = result.sort((carA, carB) => carB.year - carA.year)
        // createCard
        for(let car of tempResult){
            cardBuild = CreateCard(car)
            cardCar.append(cardBuild)
        }
    }

function sortCarByYearAscendingly(cars) {
    const result = [...cars];
    let tempResult = []
    tempResult = result.sort((carA, carB) => carA.year - carB.year)
        // Create card
        for(let car of tempResult){
            cardBuild = CreateCard(car)
            cardCar.append(cardBuild)
        }
    }

function filterCarByAvailability(cars) {
    const result = [];
    let carData = cars.length;
        for (let i = 0; i < carData; i++){
            if (cars[i]['available'] === true){
                result.push(cars[i])
            }
        }
    return result;
    }

const cardCar = document.getElementById("card-search");

let carsAvaibility = filterCarByAvailability(cars)
// ASCE
sortCarByYearAscendingly(carsAvaibility)

// DESC
sortCarByYearDescendingly(carsAvaibility)
