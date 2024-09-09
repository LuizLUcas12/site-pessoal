// src/App.js
import React from 'react';


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
    <section>
      <div className="center">
        <div className="imagem">
        </div>
        <div className="sobre">
          <h2>Sobre mim</h2>
          <p>
            EU sou aluno de Infomatica do IFCM, moro atualmente em Ceará-Mirim no Rio Grande do Norte Brazil. Sou uma pessoa bastante legal só um pouco calado e timido as vezes mas quando pego uma intimidade com alguem chega a ser chato. kkkkk e através dessa pagina web eu irei falar um pouco sobre os meus afazeres do meu Dia a Dia que são esses baixo.<b> BIKE, FUTEBOL, ESTUDO E OUTROS </b> claro que tem muitas coisas mas não vem ao caso,
            nesse momento irei falar coisas que eu gosto de fazer nos horarios livres e o que eu pretendo com essa linguagem <b>WEB.</b> eu pretendo me aperfeisoar, aprender tudo sobre Html e CSS e poder desenvolver um site interativo e uma pagina criativa. E meu sonho é ter uma vida consideravelmente boa...
          </p>
        </div>
      </div>
    </section>
    <SectionCuriosidades />
    <SectionCausos />
    <SectionHabilidades />
  </main>
);

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Luiz Lucas Costa Dantas</h1>
      <img src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2024/02/image-64.webp" alt="Imagem de destaque" className="hero-image" />
    </div>
  </section>
);

const PersonalParagraph = () => (
  <section className="personal-paragraph">
    <div className="center">
      <h2>
        Biografia
      </h2>
      <p>
        Olá, meu nome é Luiz Lucas Costa Dantas. Sou apaixonado por tecnologia e estou sempre em busca de aprender novas habilidades. Além dos meus estudos em informática, gosto de me envolver em atividades ao ar livre como andar de bicicleta e jogar futebol. Nas horas vagas, também curto jogar videogame e explorar novos hobbies. Acredito que a combinação de aprendizado contínuo e atividades prazerosas é essencial para um equilíbrio saudável na vida. Espero que você goste de conhecer um pouco mais sobre mim através desta página!
      </p>
    </div>
  </section>
);

const SectionCuriosidades = () => (
  <section>
    <h2 id="titulo01">Curiosidade</h2>
    <div className="image-row">
      <div className="image3">
        <img className="image" src="imagem/bike.jpg" alt="Bike" />
        <p>Gosto de andar de bike</p>
      </div>
      <div className="image3">
        <img className="image" src="imagem/academia.webp" alt="Academia" />
        <p>Gosto de academia</p>
      </div>
      <div className="image3">
        <img className="image" src="imagem/call of duty.jfif" alt="Call of Duty" />
        <p>Gosto de jogar call of duty</p>
      </div>
    </div>
    <div className="image-row">
      <div className="image3">
        <img className="image" src="imagem/futebol.jpg" alt="Futebol" />
        <p>Gosto de Jogar bola</p>
      </div>
      <div className="image3">
        <img className="image" src="imagem/images.jfif" alt="Nadar" />
        <p>Gosto de Nadar</p>
      </div>
    </div>
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
    <h2 id="titulo04">Habilidade</h2>
    <p>Quando eu era mais pequeno eu tinha muita habilidade em jogar bola, mas com o passar dos anos foi perdendo esse gás que tinha por falta de não treinar mais, é então só jogo as vezes com os amigos.</p>
    <p>Também tinha uma Habilidade em desenhar mais não foquei nessa aréa</p>
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
