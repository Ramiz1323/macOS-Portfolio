import React, { useEffect, useState } from 'react'
import MacWindow from './MacWindow'
import '../../styles/Note.scss'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Note = ({windowName, setWindowState}) => {
    const [markdown, setMarkdown] = useState(null)

    useEffect(()=>{
        fetch('/note.txt')
            .then(response => response.text())
            .then(text => setMarkdown(text))
    })
  return (
    <MacWindow x='300' y='25' windowName={windowName} setWindowState={setWindowState}>
      <div className="note-window">
        {markdown ? <SyntaxHighlighter language='typescript' style={ atelierDuneDark }>{markdown}</SyntaxHighlighter>:<p>Loading...</p>}
      </div>
    </MacWindow>
  )
}

export default Note