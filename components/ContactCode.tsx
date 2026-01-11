import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'ronanmeyer.vercel.app',
    href: 'https://ronanmeyer.vercel.app',
  },
  {
    social: 'email',
    link: 'ronanmeyergo@gmail.com',
    href: 'mailto:ronanmeyergo@gmail.com',
  },
  {
    social: 'github',
    link: 'Altawn',
    href: 'https://github.com/Altawn',
  },
  {
    social: 'linkedin',
    link: 'Ronan Meyer-Roussilhon',
    href: 'https://www.linkedin.com/in/ronan-meyer',
  },
  // {
  //   social: 'twitter',
  //   link: 'iamnitinr',
  //   href: 'https://www.twitter.com/iamnitinr',
  // },
  // {
  //   social: 'telegram',
  //   link: 'iamnitinr',
  //   href: 'https://t.me/iamnitinr',
  // },
  {
    social: 'letterboxd',
    link: 'Ronskeen',
    href: 'https://letterboxd.com/Ronskeen',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
