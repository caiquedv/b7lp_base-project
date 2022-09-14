import MainButton from '../../MainButton/MainButton';
import './styles.scss';

const Intro = (pcb7) => {
    return (`
        <h1>Aprenda a Programar Do ZERO</h1>

        <p>
            E trabalhe de casa, <u>ganhando entre 5 e 10 mil reais</u>, usando
            as tecnologias mais requisitadas do mercado em 2022
        </p>

        ${MainButton()}

        <div><img src=${pcb7} alt="Exemplo de responsividade"></div>
    `);
};

export default Intro;