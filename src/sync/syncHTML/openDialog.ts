import { remote } from 'electron';

const { dialog } = remote;

type DialogResponse = [file: string, canceled: boolean];

export const openDialog = async (): Promise<DialogResponse> => {
  const result = await dialog.showOpenDialog(remote.getCurrentWindow(), {
    filters: [{ name: 'HTML file', extensions: ['html', 'htm'] }], //todo remove txt
    
    properties: ['openFile'],
  });

  if (result.canceled === true) {
    return ['', true];
  }

  return [result.filePaths[0], false];
};
