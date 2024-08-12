class Pojistenci {
    constructor(jazyk = "cs-cz") {
        this.submitTlacitko = document.getElementById("submit");
        this.jmenoInput = document.getElementById("jmeno");
        this.prijmeniInput = document.getElementById("prijmeni");
        this.vekInput = document.getElementById("vek");
        this.telefonInput = document.getElementById("telefon");
        this.vypisElement = document.getElementById("vypis");
        this.vypisTabulka = document.getElementById("vypisTabulka");
        this.seznam = [];
        this.init();
    }

    init() {
        this.submitTlacitko.addEventListener('click', (e) => {
            e.preventDefault();
            this.vytvorPojistence();
        }); 
    }

    vytvorPojistence() {
        const jmeno = this.jmenoInput.value.trim();
        const prijmeni = this.prijmeniInput.value.trim();
        const vek = this.vekInput.value.trim();
        const telefon = this.telefonInput.value.trim();

        if (jmeno && prijmeni && vek && telefon) {
            this.seznam.push({ jmeno, prijmeni, vek, telefon });
            this.vypisInfoPojistenec();
            this.vycistitForm();
        } else {
            this.ukazatAlert("Vyplňte prosím všechna pole!");
        }
    }

    validovatVstupy(jmeno, prijmeni, vek, telefon) {
        return jmeno && prijmeni && vek && telefon && !isNaN(vek) && !isNaN(telefon);
    }


    vypisInfoPojistenec() {
        this.vypisTabulka.innerHTML = "";
        this.seznam.forEach(poj => {
            const row = this.vytvoritRadek(poj);
            this.vypisTabulka.appendChild(row);
        });
    }
    vytvoritRadek(poj) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${poj.jmeno}</td>
            <td>${poj.prijmeni}</td>
            <td>${poj.vek}</td>
            <td>${poj.telefon}</td>
        `;
        return row;
    }

    vycistitForm() {
        this.jmenoInput.value = '';
        this.prijmeniInput.value = '';
        this.vekInput.value = '';
        this.telefonInput.value = '';
    }

    ukazatAlert(zprava) {
        alert(zprava);
    }

}

window.onload = () => {
    new Pojistenci();
}
