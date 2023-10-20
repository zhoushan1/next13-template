import CustomLayout from '@/components/layout';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MessageProvider } from '@/components/ui/Message';
import { cn } from '@/utils/common';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next13 template',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'min-h-screen')}>
        <MessageProvider>
          <CustomLayout>{children}</CustomLayout>
        </MessageProvider>
      </body>
    </html>
  );
}
