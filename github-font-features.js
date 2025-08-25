// ==UserScript==
// @name         Enable GitHub Code Font Features
// @namespace    https://tampermonkey.net/
// @version      1.0
// @description  Enable advanced OpenType features in all GitHub code blocks
// @match        https://github.com/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

'use strict';

const features = `'calt', 'liga', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08', 'ss09', 'ss10'`;
const css = `
/* Markdown code, blobs, diffs, search results */
.markdown-body code,
.markdown-body pre,
pre code,
pre,
.blob-code,
.blob-code-inner,
.blob-num,
.react-code-line,
.react-code-lines,
.file-box pre,
.highlight pre,
.diff-table .blob-code-inner,
.codesearch-results .blob-code,
/* Editors (CodeMirror on github) */
.cm-editor .cm-content,
.cm-editor .cm-line {
  font-feature-settings: ${features} !important;
  -webkit-font-feature-settings: ${features} !important;
  font-variant-ligatures: common-ligatures contextual !important;
}
`;

GM_addStyle(css);
