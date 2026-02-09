function acquireData(input) {
  const lines = input.split('\n');
  let firstLine = true;
  const result = [];
  const loopItems = lines;
  for (const line of lines) {
    if (firstLine) {
      firstLine = false;
      continue;
    }
    if(line.trim() === "") continue;
    if (recore[1].trim() === "India") {
      result.push({city: record[0].trim(), phone: record[2].trim()});
    }
  }
  return result;
}