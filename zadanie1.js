//Utworz kopię tablicy obiektów tylko tych 
//które mają wiek (years) większy od 16.
// Możesz sprobować wykorzystać some, includes, find  i przy okazji porownać czym się różnią.
let obiekty = [
  {
    id: 10,
    name: "tomek",
    years: 14,
  },
  {
    id: 2,
    name: "janek",
    years: 30,
  },
  {
    id: 41,
    name: "asia",
    years: 16,
  },
  {
    id: 99,
    name: "stas",
    years: 22,
  }
];

// const kopiaObiekty = obiekty.some(x => x > 16);
// console.log(kopiaObiekty)
// function wypisanieLiczb(obiekty){
//     console.log('obiekty=>', obiekty)
//     obiekty.map(n=>{
//       console.log(n)
//       console.log('obiekty=>', obiekty)
//       let wiek = n.years
//         console.log(wiek)
// const  kopiaObiekty = n.years.some(x => x > 16);
// console.log(kopiaObiekty);

//     })
//   }
//   wypisanieLiczb(obiekty)

// console.log(obiekty)
// for(n of Object.keys(obiekty))
// {   console.log(obiekty[n]. years)
//     const kopiaObiekty = obiekty.some(x => x > 16);
//     console.log(kopiaObiekty)

//     if (kopiaObiekty === true)
//     {
//         console.log(obiekty[n].id)
//         console.log(obiekty[n].name)
//     }
//     else{
//         console.log("ma mniej niz 16 lat",obiekty[n].name,"ma",obiekty[n]. years)
//     }
//     console.log("------------------------------------------")
// }

// let t = [14, 15, 10, 18, 20]
// const kopiaObiektyt = t.find(x => x > 16);
// console.log(kopiaObiektyt)


//<<----------------------------------------->>
// console.log(obiekty)
// for(n of Object.keys(obiekty))
// {   console.log(obiekty[n]. years)
//     const kopiaObiekty = obiekty.includes(x => x > 16);
//     console.log(kopiaObiekty)

//     if (kopiaObiekty === true)
//     {
//         console.log(obiekty[n].id)
//         console.log(obiekty[n].name)
//     }
//     else{
//         console.log("ma mniej niz 16 lat",obiekty[n].name,"ma",obiekty[n]. years)
//     }
//     console.log("------------------------------------------")
// }

// let t = [14, 15, 10, 18, 20]
// const kopiaObiektyt = t.find(x => x > 16);
// console.log(kopiaObiektyt)

//<<----------------------------------------->>
console.log(obiekty)
for(n of Object.keys(obiekty))
{   console.log(obiekty[n]. years)
    // const kopiaObiekty = obiekty.includes(x => x > 16);
    // console.log(kopiaObiekty)
    var wiek =obiekty[n]. years

    if (wiek > 16)
    {
        console.log(obiekty[n].id)
        console.log(obiekty[n].name)
    }
    else{
        console.log("ma mniej niz 16 lat",obiekty[n].name,"ma",obiekty[n]. years)
    }
    console.log("------------------------------------------")
}
