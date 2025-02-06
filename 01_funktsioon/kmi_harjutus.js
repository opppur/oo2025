function kehamassiindeks(cm, kg) {
    var m = cm / 100;
    return kg / (m * m);
}
console.log(kehamassiindeks(181, 110));
var massid = [80, 90, 100, 110, 115];
for (var _i = 0, massid_1 = massid; _i < massid_1.length; _i++) {
    var mass = massid_1[_i];
    console.log(kehamassiindeks(181, mass));
}
var indeksid = massid.map(function (mass) { return kehamassiindeks(181, mass); });
console.log(indeksid);
//Looge teine valem kehamassiindeksi arvutamiseks:
//1,3 korda kehakaal jagatud pikkusega astmes 2,5
// aitab käsklus Math.pow (to the power of)
// Arvutage kehamassiindeks mitmesuguste massidega sama pikkuse juures
// Näidake kuidas väärtused erinevad
//Arvutage mõlema valemiga sama massi ja eri pikkuste juures
function kmi(cm, kg) {
    var m = cm / 100;
    return 1.3 * kg / (Math.pow(m, 2.5));
}
for (var _a = 0, massid_2 = massid; _a < massid_2.length; _a++) {
    var mass = massid_2[_a];
    console.log(kmi(181, mass));
}
