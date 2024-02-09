
const dersProgrami = [
    ["", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA"],
    ["09:00 - 10:00", "Java", "Atatürk Proglamlama temelleri", "C#", "Atatürk Türkçe", "Java"],
    ["10:20 - 11:20", "Java", "Atatürk Web Tasarımı", "C#", "Java", "Atatürk Türkçe"],
    ["12:00 - 13:00", "c#", "Atatürk Grafik tasarımı", "C#", "Atatürk Matematik", "Java"],
    ["13:20 - 14:20", "Java", "Atatürk Yabancı dil", "C#", "Java", "Kitap Oku"],
    ["14:40 - 15:40", "Java", "Java", "Atatürk Temel Bilgi", "Kitap Oku", "Java"],
    ["16:00 - 17:00", "Genel Tekrar", "Genel Tekrar", "C#", "Genel Tekrar", "Genel Tekrar"],
    ["20:00 - 24:30", "Genel Araştırma", "Genel Araştırma", "Genel Araştırma", "Genel Araştırma", "Genel Araştırma"],
];

function haftalikDersPrograminiGuncelle() {
    const table = document.getElementById("dersProgrami");

    for (let i = 0; i < dersProgrami.length; i++) {
        const row = table.insertRow();

        for (let j = 0; j < dersProgrami[i].length; j++) {
            const cell = row.insertCell();
            cell.innerHTML = dersProgrami[i][j];
        }
    }
}

haftalikDersPrograminiGuncelle();
