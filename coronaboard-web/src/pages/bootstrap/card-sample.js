import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

export default function CardSamplePage() {
  return (
    <div>
      <Container className="pt-3">
        <Card>
          <Card.Header>
            <span role="img" aria-label="">
              π
            </span>
            μκ΅­μ ν ν΄μ  (24κ°κ΅­)
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className={'text-muted mb-3'}>
              β»λ°©λ¬Ένμλ €λ κ΅­κ°.μ§μ­ κ΄ν  μ°λ¦¬ κ³΅κ΄(λμ¬κ΄.μ΄μμ¬κ΄.μΆμ₯μ.λΆκ΄
              λ±) ννμ΄μ§, ν΄λΉ μ λΆ κ³΅μ ννμ΄μ§ λ±μ μ¬μ μ νμμ μΌλ‘
              μ°Έκ³ νμκΈ° λ°λλλ€
            </Card.Subtitle>
            <Card.Title>
              <span role="img" aria-label="">
                βοΈ
              </span>
              μ λ½
            </Card.Title>
            <Card.Text>
              λ€λλλ(7/1), λΌνΈλΉμ(7/1), λ£¨λ§λμ(8/5), λ£©μλΆλ₯΄ν¬(7/1),
              λ¦¬ννμνμΈ(7/20), λͺ¬νλ€κ·Έλ‘(5/30), λͺ°ν(7/11), λ²¨κΈ°μ(9/23),
              λΆλ§μΌλλμ(6/26), λΆκ°λ¦¬μ(7/16), μ¬μ΄νλ¬μ€(4/20),
              μ€μμ€(7/20), μ¬λ‘λ°ν€μ(7/6), μ¬λ‘λ² λμ(9/29), μλ°λμ(7/1),
              μμ€ν λμ(7/6), μ€μ€νΈλ¦¬μ(9/28), μ²΄μ½(7/13), ν°ν€(6/11)
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
