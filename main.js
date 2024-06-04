// localStorage.setItem("ism","Qodir");
// localStorage.setItem("familiya","Bahodirov");
// localStorage.setItem("yoshi","18 yoshda");

// // localStorage["ism"] = "Doniyor";
// // localStorage["familiya"] = "Artikbaev";
// // localStorage["yoshi"] = "13 yoshda"

// // localStorage.removeItem("ism");
// // localStorage.removeItem("familiya");
// // localStorage.removeItem("yoshi");

// localStorage.clear();

// let uningIsmi = localStorage.getItem("ism");
// let uninngFamiliyasi = localStorage.getItem("familiya");
// let uningYoshi = localStorage.getItem("yoshi");

// console.log(uningIsmi,uninngFamiliyasi,uningYoshi);

// let sorov = new XMLHttpRequest();
// sorov.open("get","https://getty.uz/serverdan/malumot/olish");
// sorov.send();
// sorov.onload = function(){
//     console.log(sorov.responseText);
// }


// let jsFile = {ism: "Shaxzoda", yoshi: 20};

// let jsonFile = '{"ism": "Donik", "yoshi": 22}';

// console.log(JSON.stringify(jsFile));

//console.log(JSON.parse(jsonFile));

// let sorov = new XMLHttpRequest();
// sorov.open("get","jsonFile.json");
// sorov.send();
// sorov.onload = function(){
//     console.log(JSON.parse(sorov.responseText));
// }

// let matn = "sen gapir sen men esa sen bilan yozim boramiz sen";

// let birinchiSenIndeksi = matn.indexOf("sen")

// console.log(matn.lastIndexOf("sen"));

let matn = "Salom hammaga! salom berdim hammaga. salom";

// console.log(matn.replace("salom","alik"));


let yangiMatn = matn.replace(/salom|hammaga/gi,function(soz){
     if(soz == "Salom" || soz == "salom"){
        return "alik";
     }else if(soz == "hammaga"){
        return "barchaga";
     }
});
console.log(yangiMatn);