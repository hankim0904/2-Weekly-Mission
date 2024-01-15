export const SOCIAL_LIST = [
  {
    id: 1,
    name: '페이스북',
    icon: '/images/icons_facebook.svg',
    link: 'https://www.facebook.com/?locale=ko_KR',
  },
  {
    id: 2,
    name: '트위터',
    icon: '/images/icons_twitter.svg',
    link: 'https://twitter.com/?lang=ko',
  },
  {
    id: 3,
    name: '유튜브',
    icon: '/images/icons_youtube.svg',
    link: 'https://www.youtube.com/',
  },
  {
    id: 4,
    name: '인스타그램',
    icon: '/images/icons_instagram.svg',
    link: 'https://www.instagram.com/',
  },
] as const;

export const ENDPOINT = {
  profile: '/api/sample/user',
  folder: '/api/sample/folder',
  user: '/api/users/1',
  userFolders: '/api/users/1/folders',
  userLinks: '/api/users/1/links',
} as const;

export const ERROR_MESSAGE = {
  profile: '유저 정보를 불러오는데 실패했습니다.',
  folder: '폴더를 불러오는데 실패했습니다.',
  user: '유저 정보를 불러오는데 실패했습니다.',
  userFolders: '유저 폴더를 불러오는데 실패했습니다.',
  userLinks: '유저 링크를 불러오는데 실패했습니다.',
} as const;
