import React from 'react';
import { useSelector } from 'react-redux';
import FileBlock from './FileBlock';
import { getActiveDocumentId, getDocuments } from '../reducks/editor/selectors';

export default function FileSelector() {
  const editorState = useSelector((state) => state.editor);
  const activeDocumentId = getActiveDocumentId(editorState);
  const documents = getDocuments(editorState);

  return (
    <div className="flex flex-auto flex-col">
      {documents.map((document) => {
        return (
          <FileBlock
            title={document.fileName}
            documentId={document.documentId}
            isActive={document.documentId === activeDocumentId}
            key={document.documentId}
          />
        );
      })}
    </div>
  );
}
