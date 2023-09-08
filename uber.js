class UberPrice{
    constructor(basic,km,rsperkm,prevDue){
        this.basicFare=basic;
        this.distance=km;
        this.costPerKm=rsperkm;
        this.previousDue=prevDue;
    };
    getCost(){
        var cost = this.basicFare+(this.distance*this.costPerKm)+this.previousDue;
        console.log(`Uber Price: ${cost}`);
    };
    };
    var trip1 = new UberPrice(30,5,20,250);
    trip1.getCost();