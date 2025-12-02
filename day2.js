const fs = require("fs")
const filePath="day2.txt"
const input = fs.readFileSync(filePath, 'utf8');
const data = input.split("\n")
var answer = 0
var ribbon =0
function determineArea(input){
    var dimensions=input.split("x")
    var length = dimensions[0]
    var width = dimensions[1]
    var height = dimensions[2]
    var area = (2*length*width) + (2*width*height) + (2*height*length) + Math.min(length*width,width*height,height*length)
return area}

for(set of data){
answer+=determineArea(set)
}
console.log(answer)

function determineRibbon(input){
    var dimensions = input.split("x")
    var length = dimensions[0]
    var width = dimensions[1]
    var height = dimensions[2]
    var smaller = dimensions.sort((a, b) => a - b)
    var area = (length*width*height)
    return area + ((smaller[0]*2)+smaller[1]*2)
}
for(set of data){
ribbon+=determineRibbon(set)
}
console.log(ribbon)