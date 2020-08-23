class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyB=bodyB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    display(){
        if(this.sling.bodyA!= null){
         var pointA = this.sling.bodyA.position;
        var pointB = this.bodyB;
        strokeWeight(4);
        stroke("yellow")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
        }   
}