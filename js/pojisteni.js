class Pojistovna {

    constructor(jmeno, prijmeni, vek, telefon){
        this.jmeno = jmeno;
        this.prijmeni = prijmeni;
        this.vek = vek;
        this.telefon = telefon;
    }

    toString() {
                return `${this.jmeno}, ${this.prijmeni}, věk ${this.vek}, telefon ${this.phone}`;
    }
}
