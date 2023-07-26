import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import '@fontsource/sen/400.css';
import '@fontsource/sen/700.css';

import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Aditya | Frontend Developer"
        titleTemplate="Aditya | Frontend Developer"
        defaultTitle="Aditya | Frontend Developer"
        description="Hey! I'm Aditya, A Frontend Developer and a Student!"
        twitter={{
          handle: '@0Xaadityaa',
          site: 'adityarawat.tech',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content:
              'Frontend Developer, Software Engineer, Aditya, adityarawat007, Aditya Rawat, Web Developer, web development, web developer, blogger, tech enthusiast, open source',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
