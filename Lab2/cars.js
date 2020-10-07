class Vehicle{

    //Initiallise
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        //Output the object details
        console.log(`Make: ${this.make},\nModel: ${this.model}, \nYear: ${this.year},`)
    }
}

// let myVehicle = new Vehicle('VW', 'Golf', 2000);
// let info = myVehicle.Information();

//Declare new type of Vehicle
//Vehicle is parent of Car
class Cars extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

    Information(){
        //Inherits from class it extends
        super.Information();
        //Declare new property
        console.log(`Doors: ${this.doors}`);
    }
}

//New instance of object
let myCar = new Cars('VW', 'Golf', 2011, 5);
myCar.Information()