// Using a function that returns a promise

function setTimeoutFunction(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("After 1 sec...")
        },1000)
    })
}
const promise = setTimeoutFunction()

promise.then((data)=>{
    console.log("After Resolve: ",data)
})
console.log("Before Resolve: ",promise)