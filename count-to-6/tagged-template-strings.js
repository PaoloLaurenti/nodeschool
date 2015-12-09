var username = process.argv[2];
var comment = process.argv[3];

console.log(html`<b>${username} says</b>: "${comment}"`);

function html(text, ...args){
  var escaped = args.map(x => toHtml(x));
  return escaped.reduce((soFar, current, currentIndex, array) =>
    `${soFar}${current}${text[currentIndex + 1]}`
  , text[0]);
}

function toHtml(text) {
    return text
            .replace(/\&/g, '&amp;')
            .replace(/\'/g, '&apos;')
            .replace(/\"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}
