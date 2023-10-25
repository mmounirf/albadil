import { Alert, Card, Divider, Flex, Image, List, ListItem, Title } from '@mantine/core';
import { IconCircleCheck, IconInfoCircle } from '@tabler/icons-react';
import Link from 'next/link';
import { Brand } from '../types';

export default function BrandCard(props: Brand) {
  const { title, logo, alternative_brands } = props;

  return (
    <Card withBorder radius='md' p='md'>
      <Flex h={100} align='center' justify='center'>
        <Image src={logo} alt={title} height={100} fit='contain' />
      </Flex>
      <Divider my='md' />
      <Flex justify='center' direction='column' align='center'>
        <Title size='sm' order={1} dir='rtl'>
          بديل {title}
        </Title>
        <Title size='sm' order={1}>
          Alternatives for {title}
        </Title>
      </Flex>
      <Divider my='md' />
      {alternative_brands && alternative_brands.length > 0 ? (
        <List spacing='xs' size='sm' center icon={<IconCircleCheck color='green' size='1rem' />}>
          {alternative_brands.map((brand) => (
            <ListItem key={brand.id}>{brand.title}</ListItem>
          ))}
        </List>
      ) : (
        <>
          <Alert variant='light' color='yellow' icon={<IconInfoCircle />}>
            No alternatives, if you know an alternative please{' '}
            <Link href='mailto:m.mounir.f@gmail.com'>contact us</Link>
          </Alert>
          <Alert mt='md' variant='light' color='yellow' dir='rtl' icon={<IconInfoCircle />}>
            لا يوجد بديل، إذا كنت تعرف بديل من فضلك <Link href='mailto:m.mounir.f@gmail.com'>تواصل معنا</Link>
          </Alert>
        </>
      )}
    </Card>
  );
}
