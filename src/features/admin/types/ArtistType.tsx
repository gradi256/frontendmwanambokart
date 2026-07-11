export type ArtistType = {
  id_user: string; // Gardé si utilisé à la racine quelque part
  email: string;
  artist: {
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
  };
}