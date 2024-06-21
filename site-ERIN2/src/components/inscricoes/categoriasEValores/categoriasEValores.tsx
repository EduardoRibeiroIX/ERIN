import './categoriaEValores.css';
import { Tabela } from './tabela/tabela';

const CategoriasEValores = () => {
    return (
        <>
            <section className="categoriaEValores">
                <h2>Categorias e Valores de Inscrição</h2>
                <p>
                    Para as categorias que necessitam de comprovação, será exigido, no momento da 
                    inscrição, que se faça upload do comprovante que ateste a categoria escolhida. 
                    A verificação desse documento poderá levar até 1 (um) dia útil. As formas de 
                    pagamento serão liberadas somente após a validação pela equipe da SBC. O 
                    inscrito receberá e-mails informativos durante todas as etapas do processo de 
                    inscrição. Nosso evento contará com dois períodos de inscrição válidos: o 
                    primeiro até dia 01/09 (com maiores descontos) e o segundo, mais próximo do 
                    evento, de 02/09 até 25/09. A seguir, está a Tabela com as Categorias e Valores 
                    de Inscrição:
                </p>
                <Tabela />
            </section>
        </>
    );
}

export { CategoriasEValores };