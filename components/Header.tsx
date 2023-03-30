import { Col, Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import React, { Dispatch } from 'react';
import Select from 'react-select';
import { AnyAction } from 'redux';
import styles from './header.module.scss';

const Header = () => {
  interface ILinks {
    id: number;
    name: string;
    route: string;
  }

  const router: NextRouter = useRouter();
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const typeOptions: { value: string; label: string }[] = [
    {
      value: 'link1',
      label: 'Link One',
    },
    {
      value: 'link2',
      label: 'Link Two',
    },
  ];

  const [typeOption, setTypeOption] = React.useState<any>(
    !router.pathname.startsWith('/partners')
      ? typeOptions[0]
      : router.pathname.startsWith('/') && typeOptions[1]
  );

  const items: ILinks[] = [
    {
      id: 1,
      name: 'Link5',
      route: '/',
    },
    {
      id: 2,
      name: 'Link6',
      route: '/link6',
    },
    {
      id: 3,
      name: 'Link7',
      route: '/link7',
    },
    {
      id: 4,
      name: 'Link8',
      route: '/link8',
    },
    {
      id: 5,
      name: 'Link9',
      route: '/link9',
    },
  ];

  const handleType = (option: any) => {
    setTypeOption(option);
    if (option.value === 'link1') {
      router.push('/');
    } else {
      router.push('/link2');
    }
  };

  return (
    <Navbar className={styles.header} collapseOnSelect expand="lg">
      <Container className={styles.container}>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand className={styles.logo}>
            <Image
              quality={100}
              src="/img/vercel.svg"
              alt="logo"
              width={142}
              height={32}
              priority
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Navbar.Brand>
        </Link>
        <Select
          isSearchable={false}
          className="react-select__container"
          classNamePrefix="react-select"
          instanceId="filter-select1"
          placeholder="Кому"
          defaultValue={typeOption}
          onChange={handleType}
          onInputChange={(e) => {
            setTypeOption(e);
          }}
          options={typeOptions}
          noOptionsMessage={() => 'Нет результатов'}
        />
        <div className={styles.topLeft}>
          <Link href="/" passHref legacyBehavior>
            <Nav.Link
              className={
                !router.pathname.startsWith('/link2')
                  ? `${styles.navLink} ${styles.active} text`
                  : `${styles.navLink} text`
              }
            >
              Link1
            </Nav.Link>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <Nav.Link
              className={
                router.pathname.startsWith('/link2')
                  ? `${styles.navLink} ${styles.active} text`
                  : `${styles.navLink} text`
              }
            >
              Link2
            </Nav.Link>
          </Link>
        </div>
        <div className={`d-none d-sm-flex ${styles.topRight}`}>
          <Nav.Link
            className={`${styles.navLink} text`}
            onClick={() => dispatch({ type: 'CONTACTUS_OPEN' })}
          >
            <p>Link3</p>
          </Nav.Link>
          <Nav.Link className={`${styles.navLink} text`}>
            <p
              onClick={() => {
                dispatch({ type: 'DISTRICT_OPEN' });
              }}
            >
              Link4
            </p>
          </Nav.Link>
        </div>
        <Col className="d-lg-none mt-3" xs={12}>
          <Navbar.Toggle
            className="d-lg-none"
            aria-controls="responsive-navbar-nav"
          />
        </Col>
        <Col className={styles.nav} xs={12}>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mt-md-3 mt-lg-0">
              {items.map((item) => (
                <Link href={item.route} passHref key={item.id} legacyBehavior>
                  <Nav.Link
                    className={
                      router.pathname.startsWith(item.route)
                        ? `${styles.navLink} active text`
                        : `${styles.navLink} text`
                    }
                  >
                    {item.name}
                  </Nav.Link>
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Header;
