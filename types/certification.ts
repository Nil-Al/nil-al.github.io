export interface Certification {
  id: number;
  title: string;
  issuer: string;
  description: string;
  image_url: string;
  credential_url?: string;
}
