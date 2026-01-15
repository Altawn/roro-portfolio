import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Ronan Meyer est un étudiant en master 1 d'ingénierie passionné par le développement web et le design d'interfaces."
      />
      <meta
        name="keywords"
        content="ronan meyer, ronan, meyer, web developer portfolio, ronan web developer, ronan developer, mern stack, ronan meyer portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Portfolio de Ronan Meyer" />
      <meta
        property="og:description"
        content="Un étudiant en master 1 d'ingénierie passionné par le développement web et le design d'interfaces."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Portfolio de Ronan Meyer',
};
