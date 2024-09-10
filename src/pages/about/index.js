import React from "react";
import "./style.css";
import ImageAnimation from "../../components/animation_homepage/index";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, MonCV, skills } from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="pt-md-1">
          <Col lg="8">
          <ImageAnimation />
            <h1 className="display-4">A propos de moi</h1>
            <hr className="t_border my-4 mt-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp mt-10">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Mon CV</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {MonCV.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
                <div>
                  {/* <p className="color_sec py-4">Vous pouvez télécharger mon CV en entier juste en dessous</p> */}
                    <a href="/CV_Hemeline_AlternanceDevWeb.pdf" download="CV_Hemeline_AlternanceDevWeb.pdf">
                    Cliquez pour télécharger mon CV en entier
                    </a>
                </div>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Mes compétences</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i} className="skillsBlock">
                  <h3 className="progress-title">{data.name}</h3>
                  <img src={data.logo} alt="" className="logosSkills" />
                  {/* <div className="progress">
                    <div className="progress-bar" style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div> */}
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            {/* <h3 className="color_sec py-4">services</h3> */}
          </Col>
          <Col lg="7">
            {/* {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })} */}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
