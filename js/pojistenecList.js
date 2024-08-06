class PojistenecList {
    static displayPojisteny(pojistenecList){
        const list = document.getElementById('listPojistencu');
        list.innerHTML = '';
    

    pojistenecList.forEach(clovek => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${clovek.jmeno}</td>
            <td>${clovek.prijmeni}</td>
            <td>${clovek.vek}</td>
            <td>${clovek.telefon}</td>
            `;
            list.appendChild(row);
    });
}

static clearForm(){
    document.getElementById('jmeno').value = '';
    document.getElementById('prijmeni').value = '';
    document.getElementById('vek').value = '';
    document.getElementById('telefon').value = '';
}

static showAlert(message){
    alert(message);
}
}