import { shell } from 'electron';

const helpMenu = {
  label: 'Help',
  submenu: [
    {
      click: async () => {
        const ur = 'https://github.com/cdlab-sit/editor';
        await shell.openExternal(ur);
      },
      label: 'Learn More',
    },
    {
      type: 'separator',
    },
    {
      label: 'Version',
    },
  ],
};

export default helpMenu;
