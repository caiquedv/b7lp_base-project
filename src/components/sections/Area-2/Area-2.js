import Content_1 from './Content_1/Content_1';
import Content_2 from './Content_2/Content_2';
import Content_3 from './Content_3/Content_3';
import Content_4 from './Content_4/Content_4';
import './styles.scss'

const Area_2 = (img) => {
    return (`
    <div class="green">
        <div>O curso mais completo e didático do Brasil</div>
    </div>
    <h2>Um curso que tem ATÉ aulas</h2>
    <p>Conheça um pouco alguns dos recursos e ferramentas disponíveis pra você ao se tornar aluno. E são só algumas.</p>
    <div class="area_2--grid">
        ${Content_1(img[0])}
        ${Content_2(img[1])}
        ${Content_3(img[2])}
        ${Content_4(img[3])}
    </div>
    `);
};

export default Area_2; 