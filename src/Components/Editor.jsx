import React from 'react'
import AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import '../App.css';

function SelectLanguage() {
    return (
        <>
            <select className="select select-secondary w-full max-w-xs">
                <option disabled>Pick your favorite language</option>
                <option>C++</option>
                <option>Java</option>
                <option>Go</option>
                <option>C</option>
                <option>C#</option>
                <option>Rust</option>
                <option>JavaScript</option>
                <option>Python</option>
            </select>
        </>
    )
}
function Editor() {
    return (
        <>
            <div className='flex'>
                <AceEditor
                    mode="CPP"
                    theme="monokai"
                    name="editor"
                    fontSize="20px"
                    height='650px'
                />
                <div className='flex flex-col'>
                    <textarea className="textarea textarea-primary" placeholder="Input Goes Here"></textarea>
                    <textarea className="textarea textarea-primary" placeholder="Output Goes Here"></textarea>
                    <SelectLanguage />
                    <button className="btn btn-warning">Run</button>
                </div>
            </div>
        </>
    )
}

export default Editor