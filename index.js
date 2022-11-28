// Code your solution here

function sameUpper(item){
    return item.charAt(0).toUpperCase() + item.slice(1)
}
function firstLetters(item, input){
    return item.substring(0, input.length)
}
// I could have used toUpperCase on both. I thought this would be fun though
function findMatching(arr, string){
    const newArr = []
    arr.filter(name => {
        if(sameUpper(name) === sameUpper(string)){
            newArr.push(name)
        }
    })
    return newArr
}

function fuzzyMatch(arr, string){
    const newArr = []
    arr.filter(name => {
        if(firstLetters(name, string) === string){
            newArr.push(name)
        }
    })
    return newArr
}


function matchName(arr, string){
    const newArr = []
    arr.filter(obj => {
        if(obj.name === string){
            newArr.push(obj)
        }
    })
    return newArr
}
