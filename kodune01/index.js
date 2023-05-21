//const koigiPakapikkudeToidud = 



let koigiPakapikkudeToidud = [[1000, 2000, 3000], [4000], [5000,6000], [7000, 8000, 9000], [10000]];
let koigiPakapikkudeKalorid = [];
for (let pakapikuToidud of koigiPakapikkudeToidud){
    console.log(pakapikuToidud);
    let pakapikukalorid = 0;
    for (let kalorid of pakapikuToidud){
        pakapikuKalorid += toidukalorid;
    }

    koigiPakapikkudeKalorid.push(pakapikuKalorid)

    let maxKalorid = Math.max(...koigiPakapikkudeKalorid);
    console.log('maxKalorid:',maxKalorid);

    console.log(pakapikuKalorid)
}

