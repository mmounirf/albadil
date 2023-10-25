'use client';

import { createClient } from '@/utils/supabase/client';
import { Container, SimpleGrid } from '@mantine/core';
import BrandCard from './components/BrandCard';
import { Brand } from './types';

export const dynamic = 'force-dynamic';

const canInitSupabaseClient = () => {
  try {
    createClient();
    return true;
  } catch (e) {
    return false;
  }
};

export default async function Index() {
  const supabase = createClient();
  const { data } = await supabase.from('boycott_brands').select(`*, alternative_brands (*)`);

  return (
    <Container fluid p='md'>
      <SimpleGrid cols={4}>
        {data?.map((brand: Brand) => (
          <BrandCard key={brand.id} {...brand} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
