document.addEventListener('DOMContentLoaded', () => {

    const profileBtn = document.getElementById('profileBtn');
    const listBtn = document.getElementById('listBtn');
    const addBtn = document.getElementById('addBtn');
    const profileSection = document.getElementById('profile');
    const vytvorPojisteniSection = document.getElementById('vytvorPojisteni');
    const pojisteniListContainer = document.getElementById('pojisteniListContainer');
    const pojisteniForm = document.getElementById('pojisteniForm');
    const pojisteniList = document.getElementById('pojisteniList');
    let pojisteniCollection = [];



    const showSection = (section) => {
            console.log(vytvorPojisteni);
            profileSection.style.display = 'none';
            addPojisteniSection.style.display = 'none';
            pojisteniListContainer.style.display = 'none';
            section.style.display = 'flex';
    };

    profileBtn.addEventListener('click', () => showSection(profileSection));
    listBtn.addEventListener('click', () => showSection(pojisteniListContainer));
    addBtn.addEventListener('click', () => showSection(vytvorPojisteniSection));


        const addPojisteniToList = (pojisteni) => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = `${pojisteni.jmeno} ${pojisteni.prijmeni}`;
            button.classList.add('insured-button');
            button.addEventListener('click', () => {
                const details = li.querySelector('.details');
                details.style.display = details.style.display === 'block' ? 'none' : 'block';
            });

            const div = document.createElement('div');
            div.classList.add('details');
            div.style.display = 'none';
            div.innerHTML = `
                    <p><strong>Věk:</strong> ${insured.age}</p>
                    <p><strong>Telefon:</strong> ${insured.phone}</p>
            `;

            listBtn.appendChild(button);
            li.appendChild(div);
            insuredList.appendChild(li);
        };

        const vytvorPojisteni = (jmeno, prijmeni, vek, telefon) => {
            return new Pojisteny(jmeno, prijmeni, vek, telefon);
        };
        

        const loadPojisteniFromLocalStorage = () => {
            const storedPojisteni = localStorage.getItem('pojisteniCollection');
            if(storedPojisteni){
                pojisteniCollection = JSON.parse(storedPojisteni);
                pojisteniCollection.forEach(pojisteni => addPojisteniToList(new Pojisteny(pojisteni.jmeno, pojisteni.prijmeni, pojisteni.vek, pojisteni.telefon)));
            }
        }

        const savePojisteniToLocalStorage = () => {
            const savePojisteni = (pojisteniCollection) => {
                localStorage.setItem('pojisteniCollection', JSON.stringify(pojisteniCollection));
            };
            savePojisteni(pojisteniCollection);
        };

        pojisteniForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const jmeno = document.getElementById('jmeno').value;
            const prijmeni = document.getElementById('prijemni').value;
            const vek = document.getElementById('vek').value;
            const telefon = document.getElementById('telefon').value;

            const pojisteni = vytvorPojisteni(jmeno, prijmeni, vek, telefon);
            pojisteniCollection.push(pojisteni);
            addPojisteniToList(pojisteni);
            savePojisteniToLocalStorage();

            pojisteniForm.rest();
        });


    if (jmeno && prijmeni && vek && telefon) {
        
        //const clovek = new Pojisteny(jmeno, prijmeni, vek, telefon);

        // Pojisteny.push(clovek);

        // PojistenecList.displayPojisteny(pojisteny);
        // PojistenecList.clearForm();

    } else{
        PojistenecList.showAlert('Vyplňte všechna pole!');
    }

    showSection(profileSection);
});