class Slingshot{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }

    fly(){

        this.Sling.bodyA=null
    }

    display(){
        if(this.Sling.bodyA !=null){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.Sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}