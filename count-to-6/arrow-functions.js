var inputs = process.argv.slice(2);

var result = inputs
              .map(x => x.substring(0, 1))
              .reduce((prev, curr) => `${prev}${curr}`, '')

console.log(`[${inputs}] becomes "${result}"`);
