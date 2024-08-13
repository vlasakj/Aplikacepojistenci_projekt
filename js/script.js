// Definice třídy Pojistenci
class Pojistenci {
    // Konstruktor třídy
    constructor() {
        // Přidání event listeneru, který se spustí po načtení DOM
        document.addEventListener('DOMContentLoaded', () => {
            // Uložení referencí na HTML elementy do proměnných
            this.jmenoInput = document.getElementById('jmeno');
            this.prijmeniInput = document.getElementById('prijmeni');
            this.telefonInput = document.getElementById('telefon');
            this.vekInput = document.getElementById('datumNarozeni');
            this.vlozitBtn = document.getElementById('vlozit');
            this.seznamUzivatelu = document.getElementById('seznam-uzivatelu');

            // Načtení záznamů z localStorage nebo inicializace prázdného pole
            this.zaznamy = JSON.parse(localStorage.getItem('zaznamy')) || [];

            // Přidání event listeneru na tlačítko pro vložení záznamu
            this.vlozitBtn.addEventListener('click', (event) => this.pridatZaznam(event));
            // Vypsání záznamů do tabulky
            this.vypisZaznamy();
        });
    }

    // Metoda pro uložení záznamů do localStorage
    ulozZaznamy() {
        // Uložení záznamů jako JSON string do localStorage
        localStorage.setItem('zaznamy', JSON.stringify(this.zaznamy));
    }

    // Metoda pro vypsání záznamů do tabulky
    vypisZaznamy() {
        this.seznamUzivatelu.innerHTML = '';
        this.zaznamy.forEach((zaznam, index) => {
            const vek = this.vypocitejVek(zaznam.vek);
            const datumNarozeni = new Date(zaznam.vek).toLocaleDateString();
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${zaznam.jmeno} ${zaznam.prijmeni}</td>
                <td>${zaznam.telefon}</td>
                <td>${datumNarozeni} (${vek} let)</td>
                <td><button class="btn btn-danger" onclick="pojistenci.smazatZaznam(${index})">Smazat záznam</button></td>
            `;
            this.seznamUzivatelu.appendChild(row);
        });
    }

    // Metoda pro smazání záznamu
    smazatZaznam(index) {
        // Potvrzení smazání záznamu
        if (confirm('Opravdu si přejete tento záznam odstranit?')) {
            // Odstranění záznamu z pole zaznamy
            this.zaznamy.splice(index, 1);
            // Uložení aktualizovaných záznamů do localStorage
            this.ulozZaznamy();
            // Aktualizace výpisu záznamů
            this.vypisZaznamy();
        }
    }
 

      // Metoda pro přidání nového záznamu
    pridatZaznam(e) {
        // Zabránění výchozímu chování formuláře
        e.preventDefault();
        // Vytvoření nového záznamu s hodnotami z formuláře
        const novyZaznam = {
            jmeno: this.jmenoInput.value,
            prijmeni: this.prijmeniInput.value,
            telefon: this.telefonInput.value,
            vek: new Date(this.vekInput.value)// Přidání data narození  
        };
        // Přidání nového záznamu do pole zaznamy
        this.zaznamy.push(novyZaznam);
        // Uložení aktualizovaných záznamů do localStorage
        this.ulozZaznamy();
        // Vypsání aktualizovaných záznamů do tabulky
        this.vypisZaznamy();
        // Vyprázdnění formuláře
        this.jmenoInput.value = '';
        this.prijmeniInput.value = '';
        this.telefonInput.value = '';
        this.vekInput.value = '';
    }

    // Výpočet věku na základě data narození
    vypocitejVek(datumNarozeni) {
    // Vytvoření objektu data z data narození
    const narozeni = new Date(datumNarozeni);
    // Vytvoření objektu data pro aktuální datum
    const dnes = new Date();
    // Výpočet věku
    let vek = dnes.getFullYear() - narozeni.getFullYear();
    // Kontrola, zda narozeniny již proběhly v aktuálním roce
    const mesic = dnes.getMonth() - narozeni.getMonth();
    if (mesic < 0 || (mesic === 0 && dnes.getDate() < narozeni.getDate())) {
        vek--;
    }
    // Vrácení vypočítaného věku
    return vek;
    }
}
