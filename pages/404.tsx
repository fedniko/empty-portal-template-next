import Image from 'next/image';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import MainLayout from '../components/MainLayout';

export default function Custom404() {
  const router = useRouter();

  return (
    <MainLayout title="Страница не найдена">
      <section className="not-found mt-3 mb-3 d-flex justify-content-center align-items-center">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center align-items-center flex-column">
              <Image
                quality={100}
                src="/img/404.png"
                alt="search"
                width={302}
                height={302}
              />
              <p className="text">
                Sorry, the page you are looking for does not exist.
              </p>
              <Button className="button" onClick={() => router.push(`/`)}>
                Вернуться на главную
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </MainLayout>
  );
}
