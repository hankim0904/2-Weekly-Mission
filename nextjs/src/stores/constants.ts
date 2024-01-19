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
  signin: '/api/sign-in',
  signup: '/api/sign-up',
  checkEmail: '/api/check-email',
} as const;

export const ERROR_MESSAGE = {
  profile: '유저 정보를 불러오는데 실패했습니다.',
  folder: '폴더를 불러오는데 실패했습니다.',
  user: '유저 정보를 불러오는데 실패했습니다.',
  userFolders: '유저 폴더를 불러오는데 실패했습니다.',
  userLinks: '유저 링크를 불러오는데 실패했습니다.',
  signin: '로그인 정보를 불러오는데 실패했습니다.',
  signup: '회원가입 정보를 불러오는데 실패했습니다.',
  checkEmail: '이메일 중복 확인에 실패했습니다.',
} as const;

export const SIGN_ERROR_MESSAGE = {
  enterEmail: '이메일을 입력해주세요.',
  enterPassword: '비밀번호를 입력해주세요.',
  wrongEmail: '이메일을 확인해주세요.',
  wrongPassword: '비밀번호를 확인해주세요.',
  takenEmail: '이미 사용 중인 이메일입니다.',
  checkFormEmail: '올바른 이메일 주소가 아닙니다.',
  checkFormPassword: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  diffWithPassword: '비밀번호가 일치하지 않아요.',
} as const;
