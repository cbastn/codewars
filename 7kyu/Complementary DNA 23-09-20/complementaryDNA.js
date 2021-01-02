function DNAStrand(dna){
  //your code here
 return dna.split('').map(s => {
      if(s == "A"){
          return "T"
      }
      if( s == "T"){
          return "A"
      }
      if( s == "C"){
          return "G"
      }
      if(s == "G"){
          return "C"
      }
  }).join('')
}

console.log(DNAStrand("AAAA"),"TTTT","String AAAA is");
console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
console.log(DNAStrand("GTAT"),"CATA","String GTAT is");