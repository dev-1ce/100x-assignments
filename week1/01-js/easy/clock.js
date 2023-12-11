
setInterval(()=>{
    let curr= new Date();
    let hh = curr.getHours();
    let mm = curr.getMinutes();
    let ss = curr.getSeconds();
    console.log(`${hh}:${mm}:${ss}`)
},1000)