import '../left.scss'

const Content_1 = (img) => {
    return(`
    <div class="area_2--content_left">
        <div>
            <span>Organização para facilitar sua vida</span>
            <h3>Acesso aos módulos de forma fácil</h3>
            <p>
                Nessa tela você terá acesso direto a todos os nossos módulos e suas respectivas aulas. É um sistema
                passo-a-passo e
                muito fácil de utilizar, em que você vai aprender sem ter nenhuma dificuldade e complicação que todos
                esses
                outros
                cursos tem.<br><br>E nós estamos constantemente adicionando novas aulas, sem nenhum custo adicional.
            </p>
        </div>
        <div><img src=${img} alt="exemplo de navegação dos modulos"></div>
    </div> 
    `);
};

export default Content_1;