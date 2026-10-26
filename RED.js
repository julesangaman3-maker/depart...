const intervalle = [5,10,15,20]

const moyenne = intervalle.reduce((somme, valeur) => somme + valeur, 0) / intervalle.length
console.log("La moyenne est : " + moyenne)
