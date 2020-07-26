const initialState = {
  /* 編集機能で利用する */
  edit: {
    activeEditorId: 'editor1',
    editorInfo: [
      {
        editorId: 'editor1',
        selectedText: '',
        text: '',
      },
      {
        editorId: 'editor2',
        selectedText: '',
        text: '',
      },
      {
        editorId: 'editor3',
        selectedText: '',
        text: '',
      },
    ],
  },

  /* ファイル機能で利用する */
  file: [
    {
      editorId: 'editor1',
      name: '',
      path: '',
      text: 'abcde',
    },
    {
      editorId: 'editor2',
      name: '',
      path: '',
      text: 'fghij',
    },
    {
      editorId: 'editor3',
      name: '',
      path: '',
      text: 'fghij',
    },
  ],
};

export default initialState;
