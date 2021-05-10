var hesapA={
    ad:"Hellen",
    hesapNo:"1234567",
    bakiye:3000,
    ekHesap:2000
}

var hesapB={
    ad:"Hellen",
    hesapNo:"1234567",
    bakiye:3000,
    ekHesap:2000
}

function paracek(hesap,miktar){
    console.log(hesap)
    console.log("Çekilecek miktar:",+miktar)
    if (hesap.bakiye>=miktar){
        console.log("Paranızı Çekebilirsiniz")
    }
    else {
        console.log("Bakiyeniz yeterli değil")
    }
}

paracek(hesapA,4000)