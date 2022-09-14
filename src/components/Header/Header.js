import './styles.scss';

const Header = (logo) => {
    return (`
    <div class="headerArea">
        <img src=${logo} alt="b7-logo">
        <a>Acessar Plataforma</a>
    </div>
    `);
};

export default Header;