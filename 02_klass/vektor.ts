class Vektor{
    constructor(protected x:number, protected y:number)
    kuva():void{
        console.log(this.x, this.y);
    }
    pikkus():number{
        return Math.sqrt(this.x*this.x + this.y*this.y)
    }
    liida(teine:Vektor):Vektor{
        return new Vektor(this.x+teine.x, this.y+teine.y);
    }
    //vektori korrutamine arvuga
    korruta(koef:number):Vektor{
        return new Vektor(this.x*koef, this.y*koef);
    }
    skalaarkorruta(teine:Vektor):number{
        return (this.x*teine.x + this.y*teine.y)
    }
    liidaneli(teine:Vektor, kolmas:Vektor, neljas:Vektor):Vektor{
        return new Vektor(this.x+teine.x+kolmas.x+neljas.x, this.y+teine.y+kolmas.y+neljas.y)
    }

}


let vektorid:Vektor[]=[
    new Vektor(1, 3),
    new Vektor(1, 5),
    new Vektor(3, 3),
    new Vektor(2, 1)
];

let v1:Vektor=new Vektor(3, 5);
v1.kuva();
console.log(v1.pikkus());

let v3:Vektor=v1.liida(new Vektor(1, 2));
v3.kuva();

v1.korruta(4).kuva();

