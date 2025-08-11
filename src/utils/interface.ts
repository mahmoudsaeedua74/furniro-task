export type Product = {
  id: number;
  image: string;
  badge?: string;
  title: string;
  description: string;
  finalPrice: number;
  oldPrice?: number;
};
