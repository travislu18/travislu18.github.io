let homepage = {
    name: "Home",
    link: "index.html",
    color: "#f4f1de"

}

let travelpage = {
    name: "Travel",
    link: "travel.html",
    color: "#3d405b" 

}

var pathname = location.href;
alert(pathname==="/index");
switch(pathname) {
   case "/index" :
        body.style.background = homepage.color;
       break;
   case "/travel" :
        body.style.background = travelpage.color;
       break;
}