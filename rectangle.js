var argv = require('yargs').usage('Usage: node $0 --l=[num] --b=[num]').demand(['l', 'b']).argv;

var rect = {
    perimeter: function (x, y) {
        return (2*(x+y));
    },
    area: function (x, y) {
        return (x*y);
    }
};

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if(l < 0 || b < 0) {
        console.log("Rectangle dimensions should be grater than zero: l = " + l + " and b = " + b);
    }
    else {
        console.log("the area of a rectangle of dimensions lenght = " + l + " and breadth = " + b + " is " +rect.area(l,b));

        console.log("the area of a perimeter of a rectangle of dimensions length = " + l + " and breadth = " + b + " is " +rect.perimeter(l,b));
    }
}

solveRect(argv.l, argv.b)

//node rectangle.js --l=5 --b=3