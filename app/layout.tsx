import { theme } from '@/theme';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

export const metadata = {
  title: 'AlBadil - البديل',
  description: 'Find brands alternatives - البحث عن بدائل العلامات التجارية',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript defaultColorScheme='light' />
      </head>
      <body className='bg-background text-foreground'>
        <main className='min-h-screen flex flex-col items-center'>
          <MantineProvider theme={theme}>
            <Notifications />
            {children}
          </MantineProvider>
        </main>
      </body>
    </html>
  );
}
