function acquireData(input) {
  const lines = input.split('\n');
  const result = [];
  const loopItems = lines
      .slice(1)
      .filter(line => line.trim() !== "")
      .map(record => record.trim())
      .filter(record => record[1] === "India")
  ;
  for (const line of lines) {
    const record = line;
      result.push({city: record[0].trim(), phone: record[2].trim()});
  }
  return result;
}