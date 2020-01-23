import * as monaco from 'monaco-editor'

import 'minireset.css';
import './style.css';

const code = {
  javascript: {
    value: `const hoge = 1;
console.log(hoge)`,
    language: 'javascript'
  }
}
const container = document.getElementById('container');

monaco.editor.create(container, {
  value: code.javascript['value'],
  language: code.javascript['language'],
  theme: 'vs-dark',
  fontSize: 16,
  minimap: {
    enabled: false
  },
  tabSize: 2
});