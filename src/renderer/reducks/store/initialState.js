const initialState = {
  editor: {
    documents: [
      {
        editorId: 'editor1',
        selectedText: '',
        editedText: '',
        fileText: 'init Text form file',
        fileName: 'testFile1',
        filePath: '',
      },
      {
        editorId: 'editor2',
        selectedText: '',
        editedText: '',
        fileText: 'this is 2init',
        fileName: 'testFile2',
        filePath: '',
      },
    ],
    activeEditorId: 'editor1',
  },
};

export default initialState;
