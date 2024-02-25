export interface EnteredEmail {
  email: string;
}

export interface EnteredSignInfo extends EnteredEmail {
  password: string;
}

export interface NewLink {
  url: string;
  folderId: number;
}

export interface NewFolder {
  name: string;
}
