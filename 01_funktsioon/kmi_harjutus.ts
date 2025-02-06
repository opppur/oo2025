function kehamassiindeks(cm:number, kg:number):number{
    let m:number=cm/100;
    return kg/(m*m)
}

console.log(kehamassiindeks(181, 110));

let massid:number[]=[80, 90, 100, 110, 115]
for(let mass of massid){
    console.log(kehamassiindeks(181, mass));
}

let indeksid:number[]=massid.map(mass => kehamassiindeks(181, mass));
console.log(indeksid);

//Looge teine valem kehamassiindeksi arvutamiseks:
//1,3 korda kehakaal jagatud pikkusega astmes 2,5
// aitab käsklus Math.pow (to the power of)
// Arvutage kehamassiindeks mitmesuguste massidega sama pikkuse juures
// Näidake kuidas väärtused erinevad

//Arvutage mõlema valemiga sama massi ja eri pikkuste juures
function kmi(cm:number, kg:number):number{
    let m:number=cm/100;
    return 1.3*kg/Math.pow(m, 2.5);
}

let indeksid2:number[]=massid.map(mass => kehamassiindeks(181, mass));
console.log(indeksid2);

let vastus:number[][]=[];
for(let pikkus=150; pikkus<190; pikkus+=2){
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), kmi(pikkus, 90)]);
}
console.log(vastus);