/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css';
import StyledJsxRegistry from './registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledJsxRegistry>
          <main>
            <nav>
              <Link href="/">
                Home
              </Link>
              <Link href="/notes">
                Notes
              </Link>
            </nav>
              {children}
          </main>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}