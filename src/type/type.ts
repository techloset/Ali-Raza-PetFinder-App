export type Photos = {
  small: string;
  medium: string;
  large: string;
  full: string;
};
export type Address = {
  address1: string | null;
  address2: string | null;
  city: string;
  country: string;
  postcode: number;
  state: string;
};
export type Contact = {
  email: string;
  phone: number;
  address: Address;
};
export type Colors = {
  primary: string;
  secondary: string;
  tertiary: string;
};
export type Breeds = {
  mixed: boolean;
  primary: string;
  secondary: string;
  unknown: boolean;
};

export type animal = {
  age: string;
  gender: string;
  name: string;
  description: string | null;
  contact: Contact | null;
  photos: Photos[];
  status: string;
  species: string;
  size: string;
  type: string;
  colors: Colors[];
  coat: string;
  breeds: Breeds | null;
  organization_id: string;
  url: string;
};
export interface GetPetState {
  animal: animal | null;
  loading: boolean;
  error: string | null;
}
export type organization = {
  organization_id: string;
  id: string;
  name: string;
  photos: Photos[];
  organization: string;
  description: string;
};
export interface GetOrganizationState {
  organization: organization[] | null;
  loading: boolean;
  error: string | null;
}

export interface Response {
  name: string;
  image_url: string;
  age: string;
  id: number;
  animalId: [];
  photos: Photos[] | [];
}

export interface CounterState {
  data: petData[] | null;
  loading: boolean;
  error: string | null;
}
export interface petData {
  age: string;
  gender: string;
  name: string;
  description: string;
  contact: Contact[] | [];
  photos: Photos[] | [];
  status: string;
  species: string;
  size: string;
  type: string;
  colors: Colors[] | [];
  coat: string;
  breeds: Breeds[] | [];
  organization_id: string;
  url: string;
  image_url: string;
  id: number;
  animalId: [];
}
