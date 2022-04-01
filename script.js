
function foo(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(num+1), 1000);
    });
}
var ele=document.getElementsByClassName("countdown")[0];



foo(0).then((data1)=>{
    console.log(data1);
    ele.innerHTML=data1;
    document.body.append(ele);
    return foo(data1);
}).then((data2)=>{
    ele.innerHTML=data2;
    document.body.append(ele);
    return foo(data2);
}).then((data3)=>{
    ele.innerHTML=data3;
    document.body.append(ele);
    return foo(data3);
}).then((data4)=>{
    ele.innerHTML=data4;
    document.body.append(ele);
    return foo(data4);
}).then((data5)=>{
    ele.innerHTML=data5;
    document.body.append(ele);
    return foo(data5);
}).then((data6)=>{
    ele.innerHTML=data6;
    document.body.append(ele);
    return foo(data6);
}).then((data7)=>{
    ele.innerHTML=data7;
    document.body.append(ele);
    return foo(data7);
}).then((data8)=>{
    ele.innerHTML=data8;
    document.body.append(ele);
    return foo(data8);
}).then((data9)=>{
    ele.innerHTML=data9;
    document.body.append(ele);
    return foo(data9);
}).then((data10)=>{
    ele.innerHTML=data10;
    document.body.append(ele);
    ele.innerHTML="Happy Independence Day"
    document.body.append(ele);
    console.log();
    return foo(data10);
}).catch((error)=>{console.log(error);})