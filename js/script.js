class Pojistenci {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            this.jmenoInput = document.getElementById('jmeno');
            this.prijmeniInput = document.getElementById('prijmeni');
            this.telefonInput = document.getElementById('telefon');
            this.vekInput = document.getElementById('vek');
            this.vlozitBtn = document.getElementById('vlozit');
            this.seznamUzivatelu = document.getElementById('seznam-uzivatelu');

            this.zaznamy = JSON.parse(localStorage.getItem('zaznamy')) || [];

            this.vlozitBtn.addEventListener('click', (event) => this.pridatZaznam(event));
            this.vypisZaznamy();
        });
    }

    ulozZaznamy() {
        localStorage.setItem('zaznamy', JSON.stringify(this.zaznamy));
    }

    vypisZaznamy() {
        this.seznamUzivatelu.innerHTML = '';
        this.zaznamy.forEach((zaznam, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${zaznam.jmeno} ${zaznam.prijmeni}</td>
                <td>${zaznam.telefon}</td>
                <td>${zaznam.vek}</td>
                <td class="center-button"><button class="btn btn-danger" onclick="pojistenci.smazatZaznam(${index})">Smazat záznam</button></td>
            `;
            this.seznamUzivatelu.appendChild(row);
        });
    }

    smazatZaznam(index) {
        if (confirm('Opravdu si přejete tento záznam odstranit?')) {
            this.zaznamy.splice(index, 1);
            this.ulozZaznamy();
            this.vypisZaznamy();
        }
    }

    pridatZaznam(event) {
        event.preventDefault();
        if (!this.jmenoInput.value || !this.prijmeniInput.value) {
            alert('Musíte vyplnit jméno a příjmení');
        } else if (!this.telefonInput.value || !this.vekInput.value || isNaN(this.telefonInput.value) || isNaN(this.vekInput.value)) {
            alert('Musíte vyplnit věk a telefon a to v číselném formátu');
        } else {
            const zaznam = {
                jmeno: this.jmenoInput.value,
                prijmeni: this.prijmeniInput.value,
                telefon: this.telefonInput.value,
                vek: this.vekInput.value
            };
            this.zaznamy.push(zaznam);
            this.ulozZaznamy();
            this.vypisZaznamy();
            this.jmenoInput.value = '';
            this.prijmeniInput.value = '';
            this.telefonInput.value = '';
            this.vekInput.value = '';
        }
    }
}