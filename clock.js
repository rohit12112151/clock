// document.getElementById("hr").innerText=h
setInterval(async function () {
    let a = new Date();
    let h = ("0"+a.getHours()).slice(-2);
    let m = ("0"+(a.getMinutes())).slice(-2);
    let s = ("0"+a.getSeconds()).slice(-2);
    let y=a.getFullYear();
    // let mt=a.getMonth()+1;
    let mt=("0" + (a.getMonth() + 1)).slice(-2);
    let d=("0"+a.getDate()).slice(-2)
    // let date = new Date(year,month,day)
    let date=("0"+a.getDate()).slice(-2);
    document.getElementById("hr").innerText = h;
    document.getElementById("min").innerText = m;
    document.getElementById("sec").innerText = s;
    let dt=`${d} \\ ${mt} \\ ${y}`
    // console.log(d)
    document.getElementById("date").innerText = dt
}, 100)