import './styles.scss';

const Area_5 = (img) => {
    return(`
    <h2>Tecnologias abordadas no curso</h2>
    <p>Em milhares de aulas, centenas de projetos e exercícios, você vai aprender do início ao avançado de:</p>
    <div class="area_5--grid">
        <div class="box">
            <img src=${img[0]} alt="">
            <h4>HTML/CSS</h4>
            <p>
                Você vai aprender desde os primeiros passos da web, como estruturar suas páginas para sites e sistemas com
                as técnicas de responsividade e acessibilidade mais modernas.
            </p>
        </div>
        <div class="box">
            <img src=${img[1]} alt="">
            <h4>Javascript e Typescript</h4>
            <p>
                Manipulação de elementos na interface é um dos itens mais importantes para um programador, por isso te
                ensinamos tudo sobre Javascript e depois utilizamos o Typescript para ir um passo além.
            </p>
        </div>
        <div class="box">
            <img src=${img[2]} alt="">
            <h4>NodeJS</h4>
            <p>
                Com Node vamos aprender a criar um backend moderno, apis, autenticação, manipulação de imagens e vários
                outros assuntos importantíssimos em desenvolvimento de sistemas.
            </p>
        </div>
        <div class="box">
            <img src=${img[3]} alt="">
            <h4>PHP e Laravel</h4>
            <p>
                Uma das linguagens mais usadas no mercado, vamos aprender tudo, desde os primeiros passos, com orientação a
                objetos e boas práticas, tanto do PHP quanto do framework Laravel.
            </p>
        </div>
        <div class="box">
            <img src=${img[4]} alt="">
            <h4>ReactJS</h4>
            <p>
                Uma tecnologia super requisitada pelas empresas para criação de interfaces modernas e utilizando técnicas de
                gigantes da tecnologia, vamos aprender React do básico ao avançado.
            </p>
        </div>
        <div class="box">
            <img src=${img[5]} alt="">
            <h4>React Native</h4>
            <p>
                Vamos criar aplicativos nativos tanto para Android quanto para iOS, com manipulação de câmera, localização e
                técnicas de animação usadas pelos melhores.
            </p>
        </div>
    </div>
    <span>Além de cursos complementares de Flutter, Vue, Angular, Docker e outros.</span>
    `);
};

export default Area_5;