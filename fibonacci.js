function fibs(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let seq = [0, 1];
  for (let i = 2; i < num; i++) {
    seq[i] = seq[i - 2] + seq[i - 1];
  }
  return seq;
}

// var seq = [0, 1];
function fibsRec(num, seq = [0, 1]) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  seq = fibsRec(num - 1, seq).concat([seq[num - 3] + seq[num - 2]]);
  return seq;
}

console.log(fibsRec(12));
