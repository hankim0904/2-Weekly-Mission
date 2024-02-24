export const getUserQueryKey = () => ['user'];

export const getFolderListQueryKey = () => ['folderList'];

export const getWholeLinkListQueryKey = () => ['linkList'];

export const getFolderQueryKey = (folderId: string | string[] | undefined) => [
  'folder',
  folderId,
];

export const getLinkListQueryKey = (
  folderId: string | string[] | undefined
) => ['linkList', folderId];
