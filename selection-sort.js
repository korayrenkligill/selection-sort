const info = document.getElementById("info");
let list = [22,27,16,2,18,6];

function SelectionSort(list){
    for(let i = 0; i<list.length; i++){
        for(let j = i; j<list.length; j++){
            if(list[j]<list[i]){
                let temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }
    return list;
}

info.innerHTML = "Liste uzunluğunda bir döngü başlatılır<br>bu döngü içerisinde yeni bir döngü daha başlatılıp iki döngüdeki değerler karşılaştırılır ve yer değişir <br> O(n^2) <br> 18 in Time Complexitysi Average Casetir";
//Liste uzunluğunda bir döngü başlatılır
//bu döngü içerisinde yeni bir döngü daha başlatılıp iki döngüdeki değerler karşılaştırılır ve yer değişir

//list big o n''

//Average case

console.log(list);
list = SelectionSort(list);
console.log(list);