function findShort(s){

    const sentence = s.split(' ');
    let shortest = Infinity
    for( let i = 0; i< sentence.length; i++){
        if(sentence[i].length < shortest){
            shortest = sentence[i].length
        }
    }
    return shortest
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"),3);