function average(scores) {
  const sum = eval(scores.join("+"));
  return Math.round(sum / scores.length);
}