export interface EnteredEmail {
  email: string;
}

export interface EnteredSigninInfo extends EnteredEmail {
  password: string;
}
