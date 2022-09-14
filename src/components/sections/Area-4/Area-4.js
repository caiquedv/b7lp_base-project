import './styles.scss';

const Area_4 = (img) => {
    return(`
    <h2>Do Zero ao Fullstack</h2>
    <p>Aprenda do início e crie qualquer site, qualquer sistema web e qualquer aplicativo de celular.</p>

    <div class="area_4--grid">
        <div class="grid-box">
            <img src=${img[0]} alt="back-end">
            <h4><span>1</span>. Backend</h4>
            <p>
                Aprenda a manipular bancos de dados, criar APIs, autenticações e tudo que envolve a parte
                interna dos sistemas.
            </p>
        </div>
        <div class="grid-box">
            <div class="dashed"></div>
            <img src=${img[1]} alt="front-end">
            <h4><span>2</span>. Frontend</h4>
            <p>Crie as interfaces dos seus projetos usando tecnologias que gigantes da tecnologia como Facebook, Google
                e Microsoft estão usando.
            </p>
        </div>
        <div class="grid-box">
            <div class="dashed"></div>
            <img src=${img[2]} alt="mobile">
            <h4><span>3</span>. Mobile</h4>
            <p>
                Crie aplicativos completos para Android e iOS, manipulando câmera, localização e tudo que o celular pode
                oferecer.
            </p>
        </div>
    </div>
    `);
};

export default Area_4;