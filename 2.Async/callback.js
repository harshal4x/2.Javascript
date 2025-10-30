function sum(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}

console.log(sum(1,3))

// callback

function fn(a,b,ope){
    return ope(a,b)
}
console.log(fn(1,2,sum))
