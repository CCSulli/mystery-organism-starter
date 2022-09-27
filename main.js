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

const strongpAequors = []; // Stores pAequor who are more likley to survive

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {  // Changes one base in DNA strand
      console.log('Old DNA: ' + dna)
      let newBase = returnRandBase();
      let newLocation = Math.floor(Math.random() * 15);
      while (newBase !== dna[newLocation]) {
        dna.splice(newLocation, 1, newBase);
      }   
        console.log('New DNA: ' + dna);
    },
    compareDNA(otherSpecimen) { //Compares DNA between two specimens
      let baseCounter = 0;
      for (i = 0; i < 15; i++) {
        if (this.dna[i] === otherSpecimen.dna[i]) {
          baseCounter++;
        } 
      }
      let percentDNA = baseCounter / 15 * 100; 
      console.log(`Specimen #${this.specimenNum} and #${otherSpecimen.specimenNum} have ${percentDNA.toFixed()}% DNA in common.`)
    },

    willLikelySurvive() { // Survival rate is high if DNA contains 60% or more C or G
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
while (strongpAequors.length < 30) { // Stores 30 specimens with high survival rate
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    strongpAequors.push(newOrg);
  }
  idCounter++;
}

console.log(strongpAequors);
strongpAequors[1].mutate(); // Tests of DNA mutation on one specimen
strongpAequors[1].compareDNA(strongpAequors[2]); // Test comparing DNA between two specimens









