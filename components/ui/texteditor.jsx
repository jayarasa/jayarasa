import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const TextEditor = ({onChange, id}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <div>
      <Editor
        id
        editorState={editorState}
        wrapperClassName="border border-2 demo-editor"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        required
        toolbar={{
          options: ['inline', 'blockType', 'list', 'textAlign', 'remove', 'history'],
        }}
      />
    </div>
  );
};

export default TextEditor;
