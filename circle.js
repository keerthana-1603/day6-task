class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    circlevalue(){
        console.log(`Circle: ${this.radius}`)
    }
    doublecirclevalue(){
        console.log(`Circle(double): ${this.radius}`)
    }
    getRadius(){
        let getradius=this.radius*2
        console.log(`getRadius = ${getradius}`);
        return this.radius;
    }
    setRadius(r){
        this.radius=r;
        let setradius=this.radius*2;
        console.log(`SetRadius:${setradius}`);
        return setradius;
    }
    getColor(){
        console.log(`GetColor = ${this.color}`);
        return this.color;
    }
    setColor(c){
        this.color=c;
        console.log(`SetColor: ${this.color}`);
    }
    toString(){
        var string = `toString :Circle[radius=${this.radius},color=${this.color}]`;
        console.log(string);
        return string;
    }
    getArea(){
        var area=((22/7)*this.radius*this.radius)*2;
        console.log(`Area = ${area}`);
        return area;
    }
    getCircumference(){
        var circumference=(2*(22/7)*this.radius)*2;
        console.log(`Circumference = ${circumference}`);
        return circumference;
    }
}

var circle1 = new Circle(1,"red");
circle1.circlevalue();
circle1.doublecirclevalue();
circle1.getRadius();
circle1.setRadius(3);
circle1.getColor();
circle1.setColor("blue");
circle1.toString();
circle1.getArea();
circle1.getCircumference();
