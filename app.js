// Case 1

/*
function haftaKuniniTopish() {
    let haftaKunlari = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];
    
    let son = +prompt("Hafta kuni raqamini kiriting (1-7):");

    if (son >= 1 && son <= 7) {
        let kunIndeksi = son - 1;
        let haftaKuni = haftaKunlari[kunIndeksi];
        alert( haftaKuni);
    } else {
        alert("Noto'g'ri kiritildi");
    }
}

haftaKuniniTopish();
*/

//CAse 2
/*
function baho() {
    let bahoTurlari = ["Yomon", "Qoniqarsiz", "Qoniqarli", "Yaxshi", "A'lo"];
    
    let son = +prompt("Olgan bahoingizni  kiriting (1-5):");

    if (son >= 1 && son <= 5) {
        let bahoIndeksi = son - 1;
        let bahoTuri = bahoTurlari[bahoIndeksi];
        alert( bahoTuri);
    } else {
        alert("Xato");
    }
}

baho();
*/

//Case3
/*
function tekshirish(son) {
    if (son >= 1 && son <= 12) {
        if (son == 1 || son ==2 ||son ==12) {
            return "Qish";
        } else if(son==3 || son ==4 ||son==5) {
            return "Bahor";
        }else if(son==6|| son==7 || son==8){
            return "Yoz";
        }else{
            return "Kuz"
        }
    } else {
        return "Xato";
    }
}


let raqam = prompt("Iltimos, bir oy raqamini kiriting:");


let fasl = tekshirish(Number(raqam)); 
console.log("Kiritilgan raqamdagi oy", fasl, "ga mos keladi.");
*/


//Case 4
/*
function kunlarSoni(oy, yil) {
    
    let kunlar;
    switch (oy) {
        case 1: 
        case 3: 
        case 5: 
        case 7: 
        case 8: 
        case 10: 
        case 12: 
            kunlar = 31;
            break;
        case 4: 
        case 6: 
        case 9: 
        case 11: 
            kunlar = 30;
            break;
        case 2: 
          
            kunlar = (yil % 4 == 0 && (yil % 100 != 0 || yil % 400 == 0)) ? 29 : 28;
            break;
        default:
            kunlar = "Noto'g'ri oy raqami";
    }
    return kunlar;
}


let oy = Number(prompt("Oy raqamini kiriting (1-12):"));
let yil = Number(prompt("Yilni kiriting:"));


let kunlar = kunlarSoni(oy, yil);


if (typeof kunlar === "number") {
    console.log("Kiritilgan oyda", kunlar, "kun bor.");
} else {
    console.log(kunlar);
}

*/

// Case 5

/*
function arifmetikAmallar(a, b) {
    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {
        return "Noto'g'ri son kiritildi, iltimos, raqam kiriting!";
    } else {
        let yigindi = a + b;
        let ayirish = a - b;
        let kopaytirish = a * b;
        if (b !== 0) {
            let bolish = a / b;
            return "Qo'shilgan sonlar: " + a + " va " + b + "\nYig'indisi: " + yigindi + "\nAyirish: " + ayirish + "\nKo'paytirish: " + kopaytirish + "\nBo'lish: " + bolish;
        } else {
            return "Nolga bo'lish mumkin emas!";
        }
    }
}

let a = prompt("Birinchi sonni kiriting:");
let b = prompt("Ikkinchi sonni kiriting:");

console.log(arifmetikAmallar(a, b));

*/

//Case 6
/*

function uzunlikAylantir(uzunlikBirlik, uzunlikQiymat) {
    switch(uzunlikBirlik) {
        case 1:
            return uzunlikQiymat / 10;
        case 2:
            return uzunlikQiymat * 1000; 
        case 3:
            return uzunlikQiymat; 
        case 4:
            return uzunlikQiymat / 1000; 
        case 5:
            return uzunlikQiymat / 100; 
        default:
            return "Noto'g'ri uzunlik birlik";
    }
}

let uzunlikBirlik = +prompt("Uzunlik birliklarini tanlang:\n1-ditsimetr\n2-kilometr\n3-metr\n4-millimetr\n5-santimetr");
let uzunlikQiymat = +prompt("Uzunlik qiymatini kiriting:");

let uzunlikMetrga = uzunlikAylantir(uzunlikBirlik, uzunlikQiymat);
if(typeof uzunlikMetrga === 'number') {
    console.log("Kesmaning uzunligi metrlarda: " + uzunlikMetrga);
} else {
    console.log(uzunlikMetrga);
}
*/

//Case 7
/*
function uzunlikAylantir(ogirlikBirlik, ogirlikQiymat) {
    switch(ogirlikBirlik) {
        case 1:
            return ogirlikQiymat ;
        case 2:
            return ogirlikQiymat * 0.000001; 
        case 3:
            return ogirlikQiymat * 0.001;
        case 4:
            return ogirlikQiymat * 1000;
        case 5:
            return ogirlikQiymat * 10; 
        default:
            return "Noto'g'ri og'irlik birlik";
    }
}

let ogirlikBirlik = +prompt("og'irlik birliklarini tanlang:\n1-kilogram\n2-milligram\n3-gram\n4-tonna\n5-sentener");
let ogirlikQiymat = +prompt("Og'irlik qiymatini kiriting:");

let ogirlikKg = uzunlikAylantir(ogirlikBirlik, ogirlikQiymat);
if(typeof ogirlikKg === 'number') {
    console.log("Jisimning og'irliki kilogramda: " + ogirlikKg);
} else {
    console.log(ogirlikKg);
}
    */

//Case 8
