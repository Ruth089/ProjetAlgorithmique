let texte ="Bonjour tout le monde,je suis Christian Lisangola,développeur logiciels à Kinshasa Digital.Mon numéro de téléphone est le +243840964176 qui un numéro vodacom,et mon adresse email privé est le christian.lisangola@gmail.com. Par le passé j'ai eu à utiliser d'autres numéros de téléphones à l'instar d'un numéro Airtel qui fut le +243971151294 mais qui ne passe plus je suppose et aussi un numéro Tigo,le +243895602911. Ici à Kinshasa Digital,j'utilise une adresse mail d'entreprise qui est le christian@kinshasadigital.com.";

//Fonction qui supprime le point
const supprimerLePointALaFin=(tableau)=>{
    for(let i=0; i<tableau.length; i++){
        if(tableau[i].endsWith('.')){
            tableau[i]=tableau[i].slice(0, tableau[i].length-1);
        }
    }
}

//le Split du tableau
texte=texte.split(/[ ,]/)

//// 1) Tous les adresses mail
const AllAdresseMail=texte.filter((Allmail)=>{
    return Allmail.includes('@')
})
console.log(`les nombres des adresses est de ${AllAdresseMail.length}`)
//Appel de la fonction supprimer le point dans tous les adresses mails
supprimerLePointALaFin(AllAdresseMail);
console.log(AllAdresseMail)

// 2) Tous les numeros de telephone
console.log("-----------------------------------------------")
const AllNumberPhones= texte.filter((AllNumber)=>{
    return AllNumber.startsWith('+243')
})
console.log(`Le nombre de tous les numeros est de : ${AllNumberPhones.length}`)
supprimerLePointALaFin(AllNumberPhones)
console.log(AllNumberPhones)

// 3) collecter tous les numéros de téléphones Vodacoms
console.log("-----------------------------------------------")
const AllNumberVodacom = AllNumberPhones.filter((numberVoda)=>{
    return numberVoda.startsWith('+24381')
});
if(AllNumberVodacom.length === 0){
    console.log('Pas de numéro vodacom');
}else{
    console.log(AllNumberVodacom);
}

// 4) collecter tous les numéros de téléphones Tigo
console.log("-----------------------------------------------")
const AllnumberTigo = AllNumberPhones.filter((numberTigo)=>{
    return numberTigo.startsWith('+24389')
});
console.log(AllnumberTigo);

// 5) collecter tous les numéros de téléphones Orange
console.log("-----------------------------------------------")
const AllnumberOrange = AllNumberPhones.filter((numberOrange)=>{
    return numberOrange.startsWith('+24384');
});
if(AllnumberOrange.length === 0){
    console.log('Aucun numéro orange');
}else{
    console.log(AllnumberOrange);
}

// 6) Lister toutes les adresses de messageries professionnelles
console.log("-----------------------------------------------")
    const AllMailProfessionnelle = AllAdresseMail.filter((mailPro)=>{
    return !mailPro.includes('@gmail');
});
console.log(AllMailProfessionnelle);

// 7)Lister toutes les adresses de messageries privées
console.log("-----------------------------------------------")
const AllMailPrive = AllAdresseMail.filter((mailPrive)=>{
    return mailPrive.includes('@gmail');
});
console.log(AllMailPrive);

// 8) Trouver le nombre des mots(Ici les numéros de téléphones,
//les adresses email,les articles,pronoms personnels,pronoms relatifs(qui),
//prépositions(à) ne sont pas des mots)
console.log("-----------------------------------------------")
let tableauDesMotsAIgnore = ['le', 'la', 'les', 'des', 'du', 'un', 'une', '+243', '@', 'je', 'tu', 'il', 'elle', 'nous', 'vous', 'elles', 'ils', 'à', 'qui'];

for(AllmotAignore of tableauDesMotsAIgnore){
    texte = texte.filter((mot)=>{
        return !mot.includes(AllmotAignore);
    });
}
console.log(`Le nombre de mots restant est de : ${texte.length}`);


 