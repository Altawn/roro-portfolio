import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Contactez Moi</h1>
      <p className={styles.pageSubtitle}>
        N'hésitez pas à me contacter via les résaux sociaux ci-dessous.
        Je suis toujours ouvert aux nouvelles opportunités / connexions.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contactez Moi' },
  };
}

export default ContactPage;
