// Třída Pojištěnec představuje pojištěnce
class Pojistenec{
    constructor(jmeno, prijmeni, vek, telefon){
        this.jmeno = jmeno;
        this.prijmeni = prijmeni;
        this.vek = vek;
        this.telefon = telefon;
    }


    // Metoda toString() je pro výpis informací o pojištěnci
    toString(){
        return `${this.jmeno} ${this.prijmeni} ${this.vek} ${this.telefon}`;
    }

    getJmeno(){
        return this.jmeno;
    }

    getPrijmeni(){
        return this.prijmeni;
    }
}


const pojistenec = new Pojistenec('Jan', 'Novák', 25, '123456789');

console.log(pojistenec.toString());
console.log(pojistenec.getJmeno());


console.log(pojistenec.getPrijmeni());