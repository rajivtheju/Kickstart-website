import React, { useState } from 'react';
import './Python.css';
import Skulpt from 'skulpt';

function Python() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const runCode = () => {
    setOutput('');
    window.Sk.configure({
      output: (text) => setOutput((prevOutput) => prevOutput + text),
      read: (x) => {
        if (window.Sk.builtinFiles === undefined || window.Sk.builtinFiles["files"][x] === undefined) {
          throw "File not found: '" + x + "'";
        }
        return window.Sk.builtinFiles["files"][x];
      }
    });
    window.Sk.misceval.asyncToPromise(() => {
      return window.Sk.importMainWithBody("<stdin>", false, code, true);
    }).then(() => {
      setOutput((prevOutput) => prevOutput + "\n");
    }).catch((error) => {
      setOutput((prevOutput) => prevOutput + `Error: ${error}\n`);
    });
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'bright-mode'}`}>
      <div className="code-panel">
        <textarea
          value={code}
          onChange={handleChange}
          placeholder="Write your Python code here..."
          className="code-input"
        />
        <button onClick={runCode} className="run-button">Run Code</button>
        <button onClick={copyCode} className="copy-button">Copy Code</button>
      </div>
      <div className="output-panel">
        <pre className="output-console" onClick={() => navigator.clipboard.writeText(output)}>{output}</pre>
      </div>
      <button onClick={toggleDarkMode} className="mode-toggle-button">
        {darkMode ? 'Switch to Bright Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}

export default Python;
