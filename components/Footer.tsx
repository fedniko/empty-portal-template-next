import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';

const Footer = () => {
  const items = [
    {
      id: 1,
      name: 'Link10',
      route: '/',
    },
    {
      id: 2,
      name: 'Link11',
      route: '/',
    },
    {
      id: 3,
      name: 'Link12',
      route: '/',
    },
    {
      id: 4,
      name: 'Link13',
      route: '/',
    },
  ];

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <Row>
          <Col xl="4" lg="5" xs="12">
            <div className={`${styles.links} ${styles.top}`}>
              <div className={styles.item}>
                <p className={`text ${styles.label}`}>Our contacts</p>
                <Link href="tel:+88001003422" className={`text ${styles.text}`}>
                  8 888 888 88 88
                </Link>
              </div>
              <div className={styles.item}>
                <p className={`text ${styles.label}`}>Our address</p>
                <p className={`text ${styles.text}`}>Yakutsk, Russia</p>
              </div>
            </div>
          </Col>
          <Col
            xl={{ span: 6, offset: 2 }}
            lg={{ span: 7, offset: 0 }}
            xs={{ span: 12, offset: 0 }}
            className={styles.right}
          >
            <a className={styles.rightItem}>
              <Image
                quality={100}
                src="/img/vercel.svg"
                alt="footer-link"
                width={100}
                height={100}
                unoptimized
                priority
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </a>
            <Link
              href="/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className={`text ${styles.rightItem}`}
            >
              <Image
                quality={100}
                src="/img/vercel.svg"
                alt="footer-app"
                width={100}
                height={100}
                priority
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Link>
          </Col>
        </Row>
        <div className={styles.divider} />
        <Row>
          <Col xl="6" lg="7" md="9" xs="12">
            <div className={`${styles.links} ${styles.middle}`}>
              {items.map((item) => (
                <div className={styles.item} key={item.id}>
                  <Link href={item.route} className={`text ${styles.text}`}>
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </Col>
          <Col
            xl={{ span: 6, offset: 0 }}
            lg={{ span: 5, offset: 0 }}
            md={{ span: 3, offset: 0 }}
            xs="12"
            className={styles.right}
          >
            <div className={styles.item}>
              <a
                className={`text ${styles.text}`}
                // onClick={() => dispatch({ type: 'CONTACTUS_OPEN' })}
                onClick={() => window.open(`https://google.com/`, '_blank')}
              >
                Contact Us
              </a>
            </div>
          </Col>
        </Row>
        <div className={styles.divider} />
        <Row>
          <Col xl="7" lg="9" xs="12">
            <div className={styles.credits}>
              <p className={`text ${styles.item}`}>
                © 2021-{new Date().getFullYear()} Designed by Fedniko
              </p>
            </div>
          </Col>
          <Col
            xl={{ span: 2, offset: 3 }}
            lg={{ span: 2, offset: 1 }}
            xs={{ span: 12, offset: 0 }}
          >
            <div className={styles.social}>
              <Link href="/" passHref className={`text ${styles.socialItem}`}>
                <Image
                  quality={100}
                  src="/img/facebook.svg"
                  alt="facebook"
                  width={32}
                  height={32}
                  priority
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </Link>
              <Link href="/" className={`text ${styles.socialItem}`}>
                <Image
                  quality={100}
                  src="/img/instagram.svg"
                  alt="instagram"
                  width={32}
                  height={32}
                  priority
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
