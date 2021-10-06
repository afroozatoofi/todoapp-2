import React from "react";

import { Accordion, Card } from "react-bootstrap";

const About = ({teacherName}) => {
  return (
    <Accordion defaultActiveKey="0" style={{cursor:"pointer"}}>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          درباره سازنده
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle : {teacherName}
              </Card.Subtitle>
              <Card.Text>
                چند نمونه مثال سریع برای ساختن عنوان کارت و تشکیل بخش عمده ای از
                محتوای کارت.
              </Card.Text>

              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          اطلاعات بیشتر
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="1">
          <Card.Body>This is second tab body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default About;
