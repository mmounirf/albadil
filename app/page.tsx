import { Alert, Badge, Button, Card, Container, Divider, Flex, SimpleGrid, Title } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export const dynamic = 'force-dynamic';

async function getData(): Promise<{ boycott: string; alternative: string }[]> {
  const res = await fetch(`http://localhost:3000/api/data`);
  return res.json();
}

export default async function Index() {
  const data = await getData();

  return (
    <Container fluid p='md'>
      <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }}>
        {data.map((item, i) => (
          <Card withBorder radius='md' p='md' key={`${i}-${item.boycott}`}>
            <Title order={1} size='sm' dir='rtl'>
              بدائل <Badge color='red'>{item.boycott}</Badge>
            </Title>
            <Divider my='sm' />
            <Flex wrap='wrap' gap='sm'>
              {item.alternative !== '' ? (
                item.alternative.split(',').map((alternative, i) => (
                  <Button
                    component='a'
                    target='_blank'
                    href={`https://www.google.com/search?q=${alternative} في مصر`}
                    radius='lg'
                    size='compact-xs'
                    color='green'
                    key={`${i}-${alternative}`}
                  >
                    <Title order={1} size='sm'>
                      {alternative}
                    </Title>
                  </Button>
                ))
              ) : (
                <Alert
                  icon={<IconInfoCircle />}
                  color='orange'
                  w='100%'
                  dir='rtl'
                  title={`لا توجد حالياً بدائل لـ ${item.boycott}`}
                >
                  <Button color='orange' variant='outline' size='xs' component='a' href='mailto:m.mounir.f@gmail.com'>
                    تواصل معنا لأضافة بديل
                  </Button>
                </Alert>
              )}
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
