import Head from 'next/head';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: any;
  title: string;
}

export default function MainLayout({ children, title }: Props) {
  const router = useRouter();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    window.onscroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      if (scrolled > 300) {
        document.getElementById('arrowUp')!.style.display = 'block';
      } else {
        document.getElementById('arrowUp')!.style.display = 'none';
      }
    };
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=11" />
      </Head>
      <Header />
      <main>
        {children}
        <div className="arrowUp" id="arrowUp" onClick={scrollToTop}>
          <Image
            src="/img/arrowUp.svg"
            unoptimized
            width={60}
            height={60}
            alt="arrowUp"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
