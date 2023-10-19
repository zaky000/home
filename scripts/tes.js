const output = document.getElementById("output");
const nameInput = document.getElementById("name-input")
const numberOfTeam = document.getElementById("number-of-team")
const shuffle = document.getElementById("shuffle-button")
const reset = document.getElementById("reset-button")
const container = document.querySelector(".input-windows");
const answer = document.querySelector(".hidden");
const teams = document.querySelector(".teams");

function getteam() {
    const inter = nameInput.value;
    var orang = inter.split(/["\s,]+/);
    orang = orang.map(i => " " + i);
    const jmlTim = numberOfTeam.value;
    jumlahTim = jmlTim;
    jumlahAnggota = Math.floor(orang.length / jumlahTim);
    timLebihSatu = orang.length % jumlahTim;
    let acak = orang.sort(() => Math.random() - 0.5);
    console.log("click");
    function pengacak(list, pembagi, lebih) {
        var index = 0;
        var arrayLength = list.length;
        var tempArray = [];
        var timLebih = lebih;
        for (index = 0; index < (timLebih*(pembagi+1)); index += (pembagi+1)) {
            divide = list.slice(index, index + pembagi + 1);
            tempArray.push(divide);
        }
        for (index = (timLebih*(pembagi+1)); index < arrayLength; index += (pembagi)) {
            divide = list.slice(index, index + pembagi);
            tempArray.push(divide);
        }
        return tempArray;
    }
    var hasil = pengacak(acak, jumlahAnggota, timLebihSatu);
    console.log(hasil.length);
    for (i = 0; i < (hasil.length); i += 1) {
        output.innerHTML += `<p>Team ${i+1} : ${hasil[i]}</p>`;
        console.log(hasil[i]);
    }
}