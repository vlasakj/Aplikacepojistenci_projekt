class SeznamPojistencu {
    constructor() {
        this.vypisTabulka = document.getElementById("vypisTabulka");
        this.seznam = JSON.parse(localStorage.getItem('seznamPojistencu')) || [];
        this.vypisInfoPojistenec();
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
}

window.onload = () => {
    new SeznamPojistencu();
}