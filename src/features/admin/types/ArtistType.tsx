export type ArtistType = {
  id_artist: string;
  userId: string;
  name: string;
  prenom: string;
  pseudo: string;
  phone: string;
  pays: string;
  sexe: string;
  biographie: string;
  profile: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id_user: string;
    email: string;
    role: string;
  };
}