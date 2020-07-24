const editMenu = {
  label: 'Edit',
  submenu: [
    {
      label: 'Undo',
      role: 'undo',
    },
    {
      label: 'Redo',
      role: 'redo',
    },
    {
      type: 'separator',
    },
    {
      label: 'Cut',
      role: 'cut',
    },
    {
      label: 'Copy',
      role: 'copy',
    },
    {
      label: 'Paste',
      role: 'paste',
    },
    {
      label: 'Delete',
      role: 'delete',
    },
    {
      type: 'separator',
    },
    {
      label: 'Search',
    },
    {
      label: 'Replace',
    },
    {
      label: 'Select All',
      role: 'selectall',
    },
  ],
};

export default editMenu;
