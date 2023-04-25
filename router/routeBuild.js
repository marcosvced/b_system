const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const beautify = require('js-beautify').html;
const pretty = require('pretty');

const distPath = `${process.cwd()}/dist`;

module.exports = (response, path, html) => {
  if (!fs.existsSync(`${distPath}${path}`)) {
    fs.mkdirSync(`${distPath}${path}/`, { recursive: true });
  }

  const options = {
    indent_size: '2',
    indent_char: ' ',
    max_preserve_newlines: '5',
    preserve_newlines: true,
    keep_array_indentation: false,
    break_chained_methods: false,
    indent_scripts: 'separate',
    brace_style: 'collapse',
    space_before_conditional: true,
    unescape_strings: false,
    jslint_happy: false,
    end_with_newline: false,
    wrap_line_length: '0',
    indent_inner_html: true,
    comma_first: false,
    e4x: false,
    indent_empty_lines: false,
  };

  const dirDepth = path.split('/')
    .map((value) => (value ? '..' : ''))
    .filter((n) => n)
    .join('/');
  const replacedHtml = html.replace(/\/assets/g, `${dirDepth}/assets`)
    .replace(/href="\/\//g, 'href="cdn//')
    .replace(/href="\//g, `href="${dirDepth}/`)
    .replace(/href="\//g, `href="${dirDepth}/`)
    .replace(/href="cdn/g, 'href="')
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/(^[ \t]*\n)/gm, '');

  fs.writeFileSync(`${distPath}${path}/index.html`, beautify(replacedHtml, options));
  response.send(html);
};
