import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <meta name="title" content="Linkbrary" />
        <meta
          name="description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <meta
          property="og:url"
          content="https://linkbrary-haeun-week3.netlify.app/"
        />
        <meta property="og:title" content="Linkbrary" />
        <meta
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/gFDxRs4/rolling-img.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://linkbrary-haeun-week3.netlify.app/"
        />
        <meta property="twitter:title" content="Linkbrary" />
        <meta
          property="twitter:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <meta
          property="twitter:image"
          content="https://cdn.pixabay.com/photo/2022/10/25/04/51/cat-7544817_1280.jpg"
        />
      </Head>
      <main></main>
    </>
  );
}
