const fs=require("fs")
const filePath="day1.txt"
const input = fs.readFileSync(filePath, 'utf8');

function determineFloor(input){
    var floor=0
    for(char of input){
        if(char===')'){
            floor=floor-1
        }
        else if(char ==="("){
            floor=floor+1
        }
    }
    return floor
}

function determinePosition(input){
    var floor=0
    var position = 0
    for(char of input){
        position++
        if(char===")"){
            floor=floor-1
        }
        else if (char ==="("){
            floor+=1
        }
        if(floor===-1){
            return position
        }
    }
}
console.log(determineFloor(input))
console.log(determinePosition(input))