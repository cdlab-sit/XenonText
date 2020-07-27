const initialState = {
  editor: {
    documents: [
      {
        editorId: 'editor1',
        selectedText: '',
        editedText: '',
        fileText: 'fileText',
        fileName: 'editor1 title',
        filePath: '',
      },
    ],
    activeEditorId: 'editor1',
  },
};

export default initialState;
