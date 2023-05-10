
const rechartDataFormat = (dbDump) => {
  const sieveSet = new Set();
  const rechartData = {};

  for (const sample of dbDump) {
    for (const sieve of sample.results) {
      if (!sieveSet.has(sieve.size)) {
        sieveSet.add(sieve.size);
        rechartData[sieve.size] = {};
        rechartData[sieve.size].sieve = sieve.size;
      }
      rechartData[sieve.size][sample.serial] = sieve.passing;

    }
  }

  const rechartArr = Object.values(rechartData);
  rechartArr.sort((a, b) => {
    return a.sieve - b.sieve;
  });
  console.log('rechartData', rechartArr);
  return rechartArr;
};

const sampleSerials = (dbDump) => {
  const serials = [];
  for (const sample of dbDump) {
    serials.push(sample.serial);
  }
  return serials;
};

export { rechartDataFormat, sampleSerials };