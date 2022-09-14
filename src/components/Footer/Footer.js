import './styles.scss';

const Footer = (img) => {
    return (`
    <img src=${img} alt="">
    <div><address>CNPJ: 00.000.000/0000-00</address>
    Política de Privacidade </div>
    <div>
        © 2022 B7Web. Todos os direitos reservados.
        <ul>
            <li>
                <svg  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z">
                    </path>
                </svg>
            </li>
            <li>
                <svg  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1"></circle>
                    <path
                        d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z">
                    </path>
                    <path
                        d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z">
                    </path>
                </svg>
            </li>
        </ul>
    </div>
    `);
};

export default Footer;