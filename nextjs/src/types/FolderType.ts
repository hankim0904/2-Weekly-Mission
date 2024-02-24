export interface CurrentFolder {
  id: number;
  name: string;
}

export interface Folder {
  created_at: string;
  favorite: boolean;
  id: number;
  link_count: number;
  name: string;
}

export interface Link {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: number | null;
}

export interface UserProfile {
  auth_id: string;
  created_at: string;
  email: string;
  id: number;
  image_source: string;
  name: string;
}

export interface LinkListItem {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: string | null;
}
