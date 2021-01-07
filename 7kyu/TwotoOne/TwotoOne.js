// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

function longest(s1, s2) {
  // your code
  const s3 = s1 + s2;
  return [...new Set(s3.split('').sort())].join(''); 
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")