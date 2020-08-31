export const getActiveDocument = (editor) => {
  const activeDocument = editor.documents.find(
    (val) => val.documentId === editor.activeDocumentId,
  );
  return activeDocument;
};

export const getDocumentAndIndex = (editor, documentId) => {
  const { documents } = editor;
  const documentIndex = documents.findIndex(
    (val) => val.documentId === documentId,
  );
  return { document: documents[documentIndex], documentIndex };
};
