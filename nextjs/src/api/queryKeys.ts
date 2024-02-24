export const getFolderQueryKey = (folderId: string | string[] | undefined) => [
  'folder',
  folderId,
];

export const getUserQueryKey = () => ['user'];

export const getLinkQueryKey = (folderId: string | string[] | undefined) => [
  'links',
  folderId,
];
