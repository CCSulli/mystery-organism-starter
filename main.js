// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const strongpAequors = [];

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {  
      console.log('Old DNA: ' + dna)
      let newBase = returnRandBase();
      let newLocation = Math.floor(Math.random() * 15);
      while (newBase !== dna[newLocation]) {
        dna.splice(newLocation, 1, newBase);
      }   
        console.log('New DNA: ' + dna);
    },
    compareDNA(otherSpecimen) {
      let baseCounter = 0;
      for (i = 0; i < 15; i++) {
        if (this.dna[i] === otherSpecimen.dna[i]) {
          baseCounter++;
        } 
      }
      let percentDNA = baseCounter / 15 * 100; 
      console.log(`Specimen #${this.specimenNum} and #${otherSpecimen.specimenNum} have ${percentDNA.toFixed()}% DNA in common.`)
    },

    willLikelySurvive() {
      let survivalCounter = 0;
      for (i = 0; i < 15; i++) {
        if (dna[i] === 'C' || dna[i] === 'G') {
          survivalCounter++
        }
      }
      let chance = survivalCounter / 15 * 100;
      return chance >= 60 ? true : false;

      } 
  }
};
 
let idCounter = 1;

while (strongpAequors.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    strongpAequors.push(newOrg);
  }
  idCounter++;
}

console.log(strongpAequors);
strongpAequors[1].mutate();
strongpAequors[1].compareDNA(strongpAequors[2]);









