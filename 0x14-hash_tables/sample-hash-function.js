/*implementation of a hash table*/

function hash(key, arrayLen) {
  let total = 0;
  let prime = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * prime + value) % arrayLen;
  }

  return total;
}
console.log(hash("hello", 13));
console.log(hash("goodbye", 13));
console.log(hash("rat", 13));
console.log(hash("tar", 13));
console.log(hash("on", 13));
console.log(hash("no", 13));
