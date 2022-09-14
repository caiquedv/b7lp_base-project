import './styles.scss';

export const Area_9 = (img) => {
    return(`
    <h2>Curso focado em Projetos Práticos</h2>
    <p>
        Durante o curso criamos DEZENAS de projetos práticos, usando vários conceitos diferentes. Projetos que misturam
        tecnologias, integrados e completos. Confira alguns:
    </p>
    <div class="area_9--grid">
        <article>
            <figure>
                <img src=${img[0]} alt="">
                <figcaption>Intermediário</figcaption>
            </figure>
            <div>
                <h3>Painel de Controle</h3>
                <p>Feito em Laravel + AdminLTE</p>
            </div>
        </article>
        <article>
            <figure>
                <img src=${img[1]} alt="">
                <figcaption>Iniciante</figcaption>
            </figure>
            <div>
                <h3>Rede Social</h3>
                <p>Projeto com API, app e diversas versões diferentes</p>
            </div>
        </article>
        <article>
            <figure>
                <img src=${img[2]} alt="">
                <figcaption>Intermediário</figcaption>
            </figure>
            <div>
                <h3>Loja Virtual</h3>
                <p>Completa, integrada a vários pagamentos, frete, tudo</p>
            </div>
        </article>
        <article>
            <figure>
                <img src=${img[3]} alt="">
                <figcaption>Avançado</figcaption>
            </figure>
            <div>
                <h3>App tipo Uber</h3>
                <p>App com controle de localização, rotas, solicitação de motorista, etc</p>
            </div>
        </article>
    </div>
    <p>E dezenas de outros projetos incríveis.</p>
    `);
};