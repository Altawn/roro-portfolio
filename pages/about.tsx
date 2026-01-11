import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ronan Meyer</h1>
        <div className={styles.subtitle}>Développeur Web & Designer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Bonjour ! Je suis étudiant en Master 1 à l'ECE Paris, passionné par le développement web et le design d'interfaces.
            </p>
            <p className={styles.paragraph}>
              Si j'ai une préférence pour l'écosystème React et Next.js, je suis aussi à l'aise sur le backend (Express, SQL) et le prototypage avec Figma. Je reste toujours curieux et à l'écoute de nouveaux projets.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Formation</h2>
            <p className={styles.paragraph}>
              Je suis actuellement en Master 1 à <span className={styles.highlight}>l'ECE Paris</span>, avec une majeure en Ingénierie et Design Produit.
            </p>
            <p className={styles.paragraph}>
              Au fil de mon cursus, j'ai travaillé sur des projets variés, allant de la création d'un dashboard IoT complet à l'implémentation de solutions de reconnaissance faciale.
            </p>
            <p className={styles.paragraph}>
              J'ai également passé un semestre à <span className={styles.highlight}>l'université Chulalongkorn</span> en Thaïlande. Une expérience enrichissante qui m'a permis de découvrir l'IoT et une autre approche de l'entrepreneuriat.
            </p>
            <p className={styles.paragraph}>
              En parallèle, je continue de me former en autodidacte, notamment en approfondissant mes compétences en développement front-end.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Expérience</h2>
            <p className={styles.paragraph}>
              J'ai eu l'occasion de mettre mes compétences en pratique lors de plusieurs stages.
            </p>
            <p className={styles.paragraph}>
              Chez <span className={styles.highlight}>Daxone</span> (agence BI), j'ai travaillé sur l'intégration de l'IA. Ma mission principale touchait au prompt engineering et à son utilisation dans Power BI pour la création de contenu pédagogique.
            </p>
            <p className={styles.paragraph}>
              Plus récemment, j'ai rejoint l'agence <span className={styles.highlight}>Vingt-Cinq</span>. Ce stage m'a permis de solidifier mes acquis sur React et WordPress, tout en me familiarisant avec les process d'agence et la relation client.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Loisirs</h2>
            <p className={styles.paragraph}>
              Quand je ne suis pas devant un écran, je fais beaucoup de sport (musculation et course à pied). J'aime aussi le cinéma et la lecture.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
