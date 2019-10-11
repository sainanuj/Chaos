window.onload = () => {
    var canvas = document.getElementById("mycanvas");
    var canvas2 = document.getElementById("mycanvas2");
    var context = canvas.getContext("2d");
    var context2 = canvas2.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;

    var arm = new Arm().create(width/4, height/2, 50, 0);
    var angle = 0;
    var arm2 = new Arm().create(arm.getEndX(), arm.getEndY(), 50, 1.3);
    var arm3 = new Arm().create(arm2.getEndX(), arm2.getEndY(), 50, 1.3);

    arm2.parent = arm;
    arm3.parent = arm2;

    update();

    function update() {
        context.clearRect(0,0,width,height);
        arm.angle = Math.sin(angle)*1.2;
        arm2.angle = Math.cos(angle*.874)*.92;
        arm3.angle = Math.sin(angle*1.57)*1.34;
        
        arm2.x = arm.getEndX();
        arm2.y = arm.getEndY();
        
        arm3.x = arm2.getEndX();
        arm3.y = arm2.getEndY();
        
        angle += 0.05;

        arm.render(context);
        arm2.render(context);
        arm3.render(context);

        context2.fillStyle = "pink";
        context2.fillRect(arm3.getEndX(), arm3.getEndY(), 2,2);

        requestAnimationFrame(update);
    }

    arm.render(context);
}