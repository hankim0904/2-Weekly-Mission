export interface FolderOwner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

export interface Folder {
  id: number;
  name: string;
  owner: FolderOwner;
  links: Link[];
  count: number;
}

export interface UserProfile {
  auth_id: string;
  created_at: string;
  email: string;
  id: number;
  image_source: string;
  name: string;
}
