document.getElementById('readBtn').addEventListener('click', function() {
    let fileUpload = document.getElementById('fileUpload');
    
    if (fileUpload.files.length > 0) {
        let file = fileUpload.files[0];
        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = function() {
            let content = reader.result;
            let data = parseFileContent(content);
            createTbody(data);
        };

        reader.onerror = function() {
            console.log(reader.error);
        };
    } else {
        alert('Zehmet olmasa file-ni check edin');
    }
});

function parseFileContent(content) {
    return content.split('\n').map(line => {
        const [name, surname, email, tel] = line.split(',');
        return { name, surname, email, tel };
    });
}

function createTbody(data) {
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; 

    data.forEach(person => {
        let row = tableBody.insertRow();
        let name = row.insertCell(0);
        let surname = row.insertCell(1);
        let email = row.insertCell(2);
        let tel = row.insertCell(3);

        name.textContent = person.name;
        surname.textContent = person.surname;
        email.textContent = person.email;
        tel.textContent = person.tel;
    });
}
