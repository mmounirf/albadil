'use client';

import { createClient } from '@/utils/supabase/client';
import { Button, Container, Paper, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconX } from '@tabler/icons-react';
import { useState } from 'react';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const supabase = createClient();

  async function signInWithEmail() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.values.email,
      password: form.values.password,
    });
    setLoading(false);
    if (error) {
      notifications.show({
        title: error.name,
        message: error.message,
        color: 'red',
        icon: <IconX />,
        withBorder: true,
        withCloseButton: true,
      });
    }
  }

  return (
    <Container size={420} my={40}>
      <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
        <TextInput label='Email' placeholder='you@domain.com' required {...form.getInputProps('email')} />
        <PasswordInput
          label='Password'
          placeholder='Your password'
          required
          mt='md'
          {...form.getInputProps('password')}
        />

        <Button fullWidth mt='xl' loading={loading} onClick={() => signInWithEmail()}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
