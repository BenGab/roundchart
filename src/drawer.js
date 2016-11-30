function strokeCircleGraph(canvas, data) {
    var arcs = [];
     var context = canvas.getContext('2d');
            var centerX = canvas.width / 2;
            var centerY = canvas.height / 2;
            var radius = 65;
            var circleRad = 2 * Math.PI;
            var startAngle = 0 * Math.PI;
            var counterClockwise = false;
            var sum = data.reduce(add, 0);
            for(var i = 0; i < data.length; i++)
            {
                console.log(i +'. startangle : '+ startAngle);
                var currval = data[i].val;
                var currColor = data[i].color;
                var valPerc = (currval / sum) * 100;
                var endAngle = circleRad - (2 * (valPerc / 100));
                context.beginPath();
                context.arc(centerX, centerY, radius, startAngle, endAngle * Math.PI, counterClockwise);
                arcs.push({cx: centerX, cy: centerY, r: radius, st: startAngle, end: endAngle * Math.PI});
                context.lineWidth = 15;
                context.strokeStyle = currColor;
                context.stroke();
                startAngle = endAngle * Math.PI;
                console.log(i +'. endAngle : '+ endAngle * Math.PI);
            }
            return arcs;
}


 function handleMouseMove(e, arcs, offsetX, offsetY, context) {
       var mouseX=parseInt(e.clientX-offsetX);
       var mouseY=parseInt(e.clientY-offsetY);

        for(var i=0;i<arcs.length;i++){
            if(context.isPointInStroke(mouseX,mouseY)){
                console.log(arcs[i].val);
                return;
            }

        }

    }