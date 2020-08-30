export const getActiveDocument = (editor) => {
  const activeDocument = editor.documents.find(
    (val) => val.documentId === editor.activeDocumentId,
  );
  return activeDocument;
};

export const getDocument = (editor, documentId) => {
  const document = editor.documents.find(
    (val) => val.documentId === documentId,
  );
  return document;
};
