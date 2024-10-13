import React, { Component } from "react";
import './Compiler.css';

export default class Compiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: localStorage.getItem('input') || "",
      output: "",
      language_id: localStorage.getItem('language_Id') || 2,
      user_input: "",
    };
  }

  input = (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    this.setState({ input: inputValue });
    localStorage.setItem('input', inputValue);
  };

  userInput = (event) => {
    event.preventDefault();
    const userInputValue = event.target.value;
    this.setState({ user_input: userInputValue });
  };

  language = (event) => {
    event.preventDefault();
    const languageId = event.target.value;
    this.setState({ language_id: languageId });
    localStorage.setItem('language_Id', languageId);
  };

  submit = async (e) => {
    e.preventDefault();
    let outputText = document.getElementById("output");
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";

    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key": "50ca932b02msh3fcc579ee27dd41p14ce6fjsnd5da9d354efd",
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          source_code: this.state.input,
          stdin: this.state.user_input,
          language_id: this.state.language_id,
        }),
      }
    );

    outputText.innerHTML += "Submission Created ...\n";
    const jsonResponse = await response.json();

    let jsonGetSolution = {
      status: { description: "Queue" },
      stderr: null,
      compile_output: null,
    };

    while (
      jsonGetSolution.status && 
      jsonGetSolution.status.description !== "Accepted" &&
      jsonGetSolution.stderr == null &&
      jsonGetSolution.compile_output == null
    ) {
      outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status ? jsonGetSolution.status.description : 'Unknown'}`;
      if (jsonResponse.token) {
        let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
        const getSolution = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": "50ca932b02msh3fcc579ee27dd41p14ce6fjsnd5da9d354efd",
            "content-type": "application/json",
          },
        });
        jsonGetSolution = await getSolution.json();
      }
      await new Promise(r => setTimeout(r, 1000)); // Adding delay to prevent rapid requests
    }

    if (jsonGetSolution.stdout) {
      const output = atob(jsonGetSolution.stdout);
      outputText.innerHTML = "";
      outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
    } else if (jsonGetSolution.stderr) {
      const error = atob(jsonGetSolution.stderr);
      outputText.innerHTML = "";
      outputText.innerHTML += `\n Error :${error}`;
    } else if (jsonGetSolution.compile_output) {
      const compilation_error = atob(jsonGetSolution.compile_output);
      outputText.innerHTML = "";
      outputText.innerHTML += `\n Error :${compilation_error}`;
    } else {
      outputText.innerHTML = "An unknown error occurred.";
    }
  };

  copyCode = () => {
    const codeTextArea = document.getElementById("source");
    codeTextArea.select();
    document.execCommand("copy");
    alert("Code copied to clipboard!");
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="form-group">
                <label htmlFor="solution">
                  <span className="badge badge-info heading mt-2">
                    <i className="fas fa-code fa-fw fa-lg"></i> Code Here
                  </span>
                </label>
                <label htmlFor="tags" className="mr-1">
                  <b className="heading">Language:</b>
                </label>
                <select
                  value={this.state.language_id}
                  onChange={this.language}
                  id="tags"
                  className="form-control form-inline mb-2 language"
                >
                  <option value="54">C++</option>
                  <option value="50">C</option>
                  <option value="62">Java</option>
                  <option value="71">Python</option>
                </select>
                <textarea
                  required
                  name="solution"
                  id="source"
                  onChange={this.input}
                  className="source"
                  value={this.state.input}
                  style={{ width: "100%" }}
                ></textarea>
                <button
                  type="button"
                  className="btn btn-primary ml-2 mr-2"
                  onClick={this.copyCode}
                >
                  <i className="fas fa-copy fa-fw"></i> Copy Code
                </button>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={this.submit}
                >
                  <i className="fas fa-cog fa-fw"></i> Run
                </button>
              </div>
              <div className="form-group mt-2">
                <span className="badge badge-primary heading my-2">
                  <i className="fas fa-user fa-fw fa-md"></i> User Input
                </span>
                <br />
                <textarea
                  id="input"
                  onChange={this.userInput}
                  className="form-control"
                  placeholder="Enter user input here..."
                  value={this.state.user_input}
                  style={{ width: "100%" }}
                ></textarea>
              </div>
              <div className="form-group">
                <span className="badge badge-info heading my-2">
                  <i className="fas fa-exclamation fa-fw fa-md"></i> Output
                </span>
                <br />
                <textarea
                  id="output"
                  className="form-control"
                  readOnly
                  style={{ width: "100%" }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
