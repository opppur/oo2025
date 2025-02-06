let eesnimi:string = "Juku";
let vanus:number = 7
console.log("abc");
console.log("Tere, "+eesnimi);
if(vanus<7){
    console.log("Tasuta!");
} else if(vanus > 18) {
    console.log("Osta täispilet!");
} else {
    console.log("Osta lapsepilet!");
}

let symbolid:string[]=[];
for(let nr=0; nr<vanus; nr++){
    symbolid.push("*");
}
console.log("symbolid")
