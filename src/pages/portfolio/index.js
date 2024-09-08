import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charset="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Carousel className="custom-carousel">
          {dataportfolio.map((data, i) => (
            <Carousel.Item key={i} className="Carousel_item">
              <p className="Description">{data.description}</p>
              <img className="d-block mx-auto" src={data.img} alt={`Project ${i + 1}`} style={{ width: '70%', height: '50%' }} />
              <Carousel.Caption className="Carousel">
                <a href={data.link} className="btn btn-primary">View Project</a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </HelmetProvider>
  );
};
