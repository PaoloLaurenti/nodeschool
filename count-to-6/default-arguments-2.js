module.exports = (text, exclamationsCounts = text.length) => {
  return `${text}${'!'.repeat(exclamationsCounts)}`;
};
