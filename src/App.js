import React from 'react';
import Hero from './assets/Hero.png';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bike from './assets/BIke.jpeg';
import academia from './assets/Academia.jpeg';
import nadar from './assets/Nadar.jpeg';




const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header>
    <div className="header-content">
      <div className="logo">
        <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/2-bandeira-do-brasil.jpg" alt="Logo" className="logo-image" />
        <h1>Luiz L.</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#titulo01">Curiosidades</a></li>
          <li><a href="#titulo02">Educação</a></li>
          <li><a href="#titulo03">Causos</a></li>
          <li><a href="#titulo04">Habilidades</a></li>
          <li><a href="#titulo05">Contatos</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Main = () => (
  <main>
    <HeroSection />
    <PersonalParagraph />
    <SectionCuriosidades />
    <SectionCausos />
    <SectionHabilidades />
  </main>
);

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <img src={Hero} alt="Imagem de destaque" className="hero-image" />
    </div>
  </section>
);

const PersonalParagraph = () => (
  <section className="personal-paragraph">
    <div className="center">
      <h2>Biografia</h2>
      <p>
        Olá, meu nome é Luiz Lucas Costa Dantas. Gosto de tecnologia e estou sempre em busca de aprender novas habilidades. Além dos meus estudos em informática, gosto de frequenta academia andar de bicicleta e jogar futebol. Nas horas vagas, também curto jogar jogos online e aprender coisas novas. O aprendizado contínua e atividades prazerosas é essencial para um equilíbrio saudável na vida. Espero que você goste de conhecer um pouco mais sobre mim através desta página!
      </p>
    </div>
  </section>
);

const SectionCuriosidades = () => (
  <section className="section">
    <h2 id="titulo01" className="centered-title">Curiosidades</h2>
    <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={bike} alt="Bike" />
          <Card.Body>
            <Card.Title>Andar de Bike</Card.Title>
            <Card.Text>
              Gosto de andar de bike.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={academia} alt="Academia" />
          <Card.Body>
            <Card.Title>Academia</Card.Title>
            <Card.Text>
              Gosto de academia.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="imagem/call of duty.jfif" alt="Call of Duty" />
          <Card.Body>
            <Card.Title>Call of Duty</Card.Title>
            <Card.Text>
              Gosto de jogar Call of Duty.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="imagem/futebol.jpg" alt="Futebol" />
          <Card.Body>
            <Card.Title>Futebol</Card.Title>
            <Card.Text>
              Gosto de jogar bola.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={nadar} alt="Nadar" />
          <Card.Body>
            <Card.Title>Nadar</Card.Title>
            <Card.Text>
              Gosto de nadar.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </section>
);


const SectionCausos = () => (
  <section>
    <h2 id="titulo03">Causos</h2>
    <h3>A primeira vez que eu dirigi um carro na minha vida</h3>
    <p>
      Um certo dia o meu pai ofereceu o carro para eu dirigir, só que eu fiquei com medo e recusei pois não sabia quase nada sobre, devido nunca ter dirigido na minha vida. Mas em outro dia eu disse, não eu tenho que perder esse medo de dirigir ai então fui perdi o medo, tirarei minha CNH se deus quiser e hoje ando por qualquer canto da cidade conforme a lei.
    </p>
  </section>
);

const SectionHabilidades = () => (
  <section>
    <h2 id="titulo04">Habilidades</h2>
    <p>Quando eu era mais pequeno eu tinha muita habilidade em jogar bola, mas com o passar dos anos foi perdendo esse gás que tinha por falta de não treinar mais, é então só jogo as vezes com os amigos.</p>
    <p>Também tinha uma habilidade em desenhar, mas não foquei nessa área.</p>
  </section>
);

const Footer = () => (
  <footer>
    <h2 id="titulo05">Contatos:</h2>
    <a href="mailto:Luiz.lucas@escolar.ifr.edu.br">
      <img src="imagem/Gmail.png" alt="Gmail" />
      <p>Email: Luiz.lucas@escolar.ifr.edu.br</p>
    </a>
    <a href="https://github.com/LuizLUcas12" target="_blank" rel="noopener noreferrer">
      <img src="imagem/Github.png" alt="GitHub" />
      <p>GitHub: LuizLUcas12</p>
    </a>
    <a href="https://www.instagram.com/luiizlucas_12/" target="_blank" rel="noopener noreferrer">
      <img src="imagem/foto instagram.jfif" alt="Instagram" />
      <p>Instagram: luiizlucas_12</p>
    </a>
  </footer>
);

export default App;
