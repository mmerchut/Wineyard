document.getElementById('kalkulator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const pole = parseFloat(document.getElementById('pole').value);
    const wydajnosc = parseFloat(document.getElementById('wydajnosc').value);

    const plon = obliczPlon(pole, wydajnosc);
    const wynikElement = document.getElementById('wynik');

    wynikElement.innerHTML = `Przewidywany plon winorośli z ${pole} ha wynosi ${plon} ton.`;
});

function obliczPlon(pole, wydajnosc) {
    return pole * wydajnosc;
}
