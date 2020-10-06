class Vehicle{

    constructo(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`)
    }
}

let myVehicle = new Vehicle('VW', 'Gold', 2000);
let info = myVehicle.Information();