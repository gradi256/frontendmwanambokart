export type CustomerType = {
  id_user: string // Gardé si utilisé à la racine quelque part
  email: string
  customer: {
    id_customer: string
    userId: string
    name: string
    prenom: string
    phone: string
    pays: string
    sexe: string
    createdAt: string
    updatedAt: string
  }
}
