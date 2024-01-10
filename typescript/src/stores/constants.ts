import facebookIcon from '../../../images/landing/icons_facebook.svg';
import twitterIcon from '../../../images/landing/icons_twitter.svg';
import youtubeIcon from '../../../images/landing/icons_youtube.svg';
import instagramIcon from '../../../images/landing/icons_instagram.svg';

export const SOCIAL_LIST = [
  {
    id: 1,
    name: '페이스북',
    icon: facebookIcon,
    link: 'https://www.facebook.com/?locale=ko_KR',
  },
  {
    id: 2,
    name: '트위터',
    icon: twitterIcon,
    link: 'https://twitter.com/?lang=ko',
  },
  {
    id: 3,
    name: '유튜브',
    icon: youtubeIcon,
    link: 'https://www.youtube.com/',
  },
  {
    id: 4,
    name: '인스타그램',
    icon: instagramIcon,
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
