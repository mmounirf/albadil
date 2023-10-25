import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);

  const supabase = createClient();

  const { data, error } = await supabase.from('boycott_brands').select(`*, alternative_brands (*)`);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
}
