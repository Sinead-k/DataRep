//blueprint of an object
class BMI { 
   //Starting point of the class - Initiallised 
   constructor(height, weight){ 
        this.height = height;
        this.weight = weight;
    }

    calculateBMI(){
        //BMI calculation
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

let MyBmi = new BMI(185, 95);
let calculateBMI = MyBmi.calculateBMI();
console.log(calculateBMI)