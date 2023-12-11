const curr = new Date();
console.log(curr.getMilliseconds())
setInterval(()=>{
    const n = new Date()
    console.log(n.getMilliseconds())
},1000)
