//Jaden Casing Strings

String.prototype.toJadenCase = function () {
  //...
  return (this.valueOf().split(' ').map((w) => {
      return(w.charAt(0).toUpperCase() + w.substring(1))
      } ).join(' '))
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
