function factorielle(a){
    let resultat = 1n
    for (let i = 1; i <= a; i++){
        resultat *= BigInt(i);
    }
    return resultat
}

const note = [1, 2, 3, 6, 7]
const resultat = note.map(factorielle)

console.log("note " + resultat)