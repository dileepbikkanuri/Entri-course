function callbackTest()
{
    console.log("I am being printed inside callbackTest function")
}


function add(n1,n2,a)
{
    console.log(n1+n2)
    a()
}
let a=1
let b=5
add(a,b)