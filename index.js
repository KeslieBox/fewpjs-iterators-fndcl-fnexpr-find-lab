
function superbowlWin(arrayObjects) {
    let results = arrayObjects.find(object => object.result === "W") 

    return !!results ? results.year : undefined
    
}