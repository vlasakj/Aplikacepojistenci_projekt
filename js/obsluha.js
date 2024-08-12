document.addEventListener('DOMContentLoaded', () => {
    const pojistenci = new Pojistenci();
    pojistenci.vypisInfoPojistenec(); 
});
//     const profileBtn = document.getElementById('profileBtn');
//     const listBtn = document.getElementById('listBtn');
//     const addBtn = document.getElementById('addBtn');

//     const profileSection = document.getElementById('profileSection');
//     const addInsuredSection = document.getElementById('addInsuredSection');
//     const insuredListContainer = document.getElementById('insuredListContainer');

//     const showSection = (section) => {
//         [profileSection, addInsuredSection, insuredListContainer].forEach(sec => {
//             sec.style.display = 'none';
//         });
//         section.style.display = 'flex';
//     };

//     profileBtn.addEventListener('click', () => showSection(profileSection));
//     listBtn.addEventListener('click', () => showSection(insuredListContainer));
//     addBtn.addEventListener('click', () => showSection(addInsuredSection));
