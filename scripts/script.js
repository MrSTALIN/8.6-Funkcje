var a = prompt("Please insert A value");
var h = prompt("Please insert H value");

function getTriangleArea(a, h)	{return a*h/2;}

if ((a > 0) && (h > 0))
{
    console.log("Triangle field= " + getTriangleArea(a, h));
    var value1 = getTriangleArea(Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1));
    var value2 = getTriangleArea(Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1));
    var value3 = getTriangleArea(Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1));
}
else {console.log("One of the parametr is equal 0 or less!");}

console.log("value1= " + value1 + "\nvalue2= " + value2 + "\nvalue3= " + value3);