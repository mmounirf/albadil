export type Brand = {
  id: string;
  title: string;
  logo?: string;
  created_at: string;
  updated_at?: string;
  alternative_brands?: Brand[];
};
