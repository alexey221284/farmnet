function createNewFormat() {
    const newFormat = cards[i].time;
    let day = newFormat.split('').slice(8, 10).join('');
    let mounth = newFormat.split('').slice(5, 7).join('');
    let year = newFormat.split('').slice(0, 4).join('');
    let hourMinut = newFormat.split('').slice(11, 16).join('');
    let newDate = `${day}.${mounth}.${year} ${hourMinut}`;
    return newDate;
}

for (i=0; i<cards.length; i++) {
    let item = cards[i];
    let newRow = document.createElement("tr");
    newRow.className = 'newRow';
    document.getElementById('main_table').append(newRow);
    let newDate = createNewFormat();
    newRow.insertAdjacentHTML("afterbegin", `<td>${newDate}</td><td>${item.sum}</td><td>${item.name}</td><td>${item.email}</td><td>${item.city}</td>`);
}