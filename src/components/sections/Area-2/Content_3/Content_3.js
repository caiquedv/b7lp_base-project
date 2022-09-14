import '../left.scss'

const Content_3 = (img) => {
    return(`
    <div class="area_2--content_left">
        <div>
            <span>Praticar é muito importante</span>
            <h3>Exercícios e desafios para fixação</h3>
            <p>
            Nós sabemos que apenas assistir uma aula não é o suficiente, por isso temos esse grande diferencial, que são vários e vários exercícios entre as aulas.
            <br><br>
            Dessa forma conseguimos garantir que você está de fato aprendendo e fixando seus conhecimentos. A prática é o que diferencia um aprendiz de um programador.
            </p>
        </div>
        <div><img src=${img} alt="exemplo de navegação dos modulos"></div>
    </div> 
    `);
};

export default Content_3;