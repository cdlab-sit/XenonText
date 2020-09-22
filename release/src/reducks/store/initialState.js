/* eslint-disable */
const initialState = {
  editor: {
    documents: [
        {
          documentId: 'c',
          selectedText: null,
          editedText: '#include <stdio.h>\n\nint main()\n{\n    printf("Hello, world!");\n    return 0;\n}',
          fileText: '#include <stdio.h>\n\nint main()\n{\n    printf("Hello, world!");\n    return 0;\n}',
          fileName: 'C',
          filePath: null,
          lang: 'c_cpp',
        },
        {
          documentId: 'java',
          selectedText: null,
          editedText: 'public class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}',
          fileText: 'public class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}',
          fileName: 'Java',
          filePath: null,
          lang: 'java',
        },
        {
          documentId: 'python',
          selectedText: null,
          editedText: 'def main():\n    print(\'Hello World!\')\n\nif __name__ == \'__main__\':\n    main()',
          fileText: 'def main():\n    print(\'Hello World!\')\n\nif __name__ == \'__main__\':\n    main()',
          fileName: 'Python',
          filePath: null,
          lang: 'python',
        }
    ],
    activeDocumentId: 'c',
  },
};

export default initialState;
