const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const beautify = require('js-beautify').js;
const pretty = require('pretty');

const distPath = `${process.cwd()}/dist`;

module.exports = (response, path, html) => {
  if (!fs.existsSync(`${distPath}${path}`)) {
    fs.mkdirSync(`${distPath}${path}/`, { recursive: true });
  }

  const dirDepth = path.split('/')
    .map((value) => {
      return value ? '..' : '';
    })
    .filter((n) => n)
    .join('/');

  const options = {
    indent_size: '4',
    indent_char: ' ',
    max_preserve_newlines: '5',
    preserve_newlines: false,
    keep_array_indentation: false,
    break_chained_methods: false,
    indent_scripts: 'normal',
    brace_style: 'collapse',
    space_before_conditional: true,
    unescape_strings: false,
    jslint_happy: true,
    end_with_newline: true,
    wrap_line_length: '120',
    indent_inner_html: false,
    comma_first: false,
    e4x: false,
    indent_empty_lines: false,
  };

  let replacedHtml = beautify(html, options);
  replacedHtml = replacedHtml.replace(/\/assets/g, `${dirDepth}/assets`)
    .replace(/href="\/\//g, 'href="cdn//')
    .replace(/href="\//g, `href="${dirDepth}/`)
    .replace(/href="cdn/g, 'href="')
    .replace(/ {2,}/g, ' ');


  fs.writeFileSync(`${distPath}${path}/index.html`, replacedHtml);

  response.send(html);
};
