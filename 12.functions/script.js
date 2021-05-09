// --- Functions

function old(birthyear){
    return 2021-birthyear
}

console.log(old(2011));

function retired(name,birthyear){
    let years= old(birthyear)
    console.log(years)
    let retiring=65-years
    console.log(retiring)
    if (retiring>0) {
        console.log("To retire you need:"+retiring)
    }
    else if (retiring<=0) {
        console.log("you can retired")
    }
    

}

retired("Hellen",1984)