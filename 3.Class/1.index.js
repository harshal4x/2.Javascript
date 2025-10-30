class Shape{
    constructor(h,w,color){
        this.h=h
        this.w=w
        this.color=color
    }
    // over ride methods
    greet(){}
    area(){}
    print_color(){
        throw new Error("print_color should be declare in chlid class !!");
    }
}

class Rectangle extends Shape{
    constructor(h,w,color){
        super(h,w,color);
    }
    // Methods
    greet(){
        console.log(this.h,this.w,this.color)
    }
    area(){
        console.log("Area ", this.h * this.w)
    }
    // Static Method:
    static detail(){
        console.log("This is rec. this use h,w,color.")
    }
}

const obj = new Rectangle(2,3,"Red")
obj.greet()
obj.area()
Rectangle.detail()