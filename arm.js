class Arm {
    constructor() {
        this.x=0;
        this.y=0;
        this.length=0;
        this.angle=0;
        this.parent = null;
    }

    create(x, y, length, angle) {
        let obj = new Arm();
        obj.init(x, y, length, angle);
        return obj;
    }

    init(x, y, length, angle) {
        this.x=x;
        this.y=y;
        this.length=length;
        this.angle=angle;
    }

    getEndX() {
        var angle = this.angle;
        var parent = this.parent;
        while (parent) {
            angle += this.parent.angle;
            parent = parent.parent;
        }
        return this.x + Math.cos(angle)*this.length;
    }

    getEndY() {
        var angle = this.angle;
        var parent = this.parent;
        while (parent) {
            angle += this.parent.angle;
            parent = parent.parent;
        }
        return this.y + Math.sin(angle)*this.length;
    }

    render(context) {
        context.strokeStyle = "#000000";
        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.getEndX(), this.getEndY());
        context.stroke();
    }
}