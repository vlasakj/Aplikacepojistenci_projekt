// Definice třídy Zaznam
class Zaznam {
    // Konstruktor třídy, který inicializuje vlastnosti jmeno, prijmeni, vek a telefon
    constructor(jmeno, prijmeni, vek, telefon) {
        // Inicializace vlastnosti jmeno
        this.jmeno = jmeno;
        // Inicializace vlastnosti prijmeni
        this.prijmeni = prijmeni;
        // Inicializace vlastnosti vek
        this.vek = vek;
        // Inicializace vlastnosti telefon
        this.telefon = telefon;
    }

    // Metoda toString, která vrací textovou reprezentaci objektu
    toString() {
        // Vrací textovou reprezentaci objektu ve formátu "jmeno prijmeni (vek - telefon)"
        return `${this.jmeno} ${this.prijmeni} (${this.vek} - ${this.telefon})`;
    }
}
