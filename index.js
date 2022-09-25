// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2;
    }

    get area(){
        return Math.PI * Math.pow(this.radius,2);
    }

    get circumference(){
        return Math.PI * this.diameter;
    }
    set diameter(value){
        this.radius = value / 2;
    }

    set area(value){
        this.radius = Math.sqrt(value / Math.PI);
    }

    set circumference(value){
        this.radius = (value/ Math.PI) /2;
    }
}