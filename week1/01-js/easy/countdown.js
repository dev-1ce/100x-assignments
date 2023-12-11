let i = 30;
function show()
{
    
    if(i <0)
    {clearInterval(time)
    return;}
    console.log(i);
    i--;
}

const time = setInterval(show,1000);