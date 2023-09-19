import CustomLayout from '@/components/layout';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MessageProvider } from '@/components/ui/Message';
import cx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(inter.className, 'min-h-screen')}>
        <MessageProvider>
          <CustomLayout>{children}</CustomLayout>
        </MessageProvider>
      </body>
    </html>
  );
}
