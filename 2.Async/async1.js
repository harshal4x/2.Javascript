// sync code-1

for(let i=0;i<5;i++){
    i++;
}
console.log("sync code-1")

// async code-1

setTimeout(() => {
    console.log("Async code-1")
}, (1000));

// sync code-2

for(let i=0;i<5;i++){
    i++;
}
console.log("sync code-2")
