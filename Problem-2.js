function generateOddSeries(a) {
  const result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  return result;
}
console.log("Output:", generateOddSeries(4).join(', ')); // 1, 3, 5, 7
