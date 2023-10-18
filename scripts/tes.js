orang = ["adib", "sessa", "zaky"];
jumlahTim = 3;

let acak = orang.sort(() => Math.random() - 0.5);

function chunkArray(list, pembagi) {
    var index = 0;
    var arrayLength = list.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += pembagi) {
        divide = list.slice(index, index + pembagi);
        tempArray.push(divide);
    }
    return tempArray;
}
var hasil = chunkArray(acak, jumlahTim);
console.log(hasil);