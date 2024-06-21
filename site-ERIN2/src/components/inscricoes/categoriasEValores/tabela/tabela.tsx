import './tabela.css'

const Tabela = () => {
    return (
        <>
            <table className="tabela-conteudo" border={1}>
                <thead>
                    <tr className='cabecalho'>
                        <th colSpan={1}>Erin 2024</th>
                        <th colSpan={1}>1º PERÍODO (01/08 - 01/09)</th>
                        <th colSpan={1}>2º PERÍODO (02/09 - 25/09)</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Valor</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='est'>
                        <td className='text'>Estudante associado à SBC com anuidade vigente</td>
                        <td>R$  30</td>
                        <td>R$  40</td>
                    </tr>
                    <tr className='est'>
                        <td className='text'>Estudante associado à SBC com anuidade vencendo em até 90 dias (Melhor opção: COMBO Inscrição no evento + renovação da associação à SBC)</td>
                        <td>R$  61</td>
                        <td>R$  71</td>
                    </tr>
                    <tr className='est'>
                       
                        <td className='text'>Estudante não associado ou com associação não vigente à SBC (Melhor opção: COMBO Inscrição no evento + renovação da associação à SBC)</td>
                        <td>R$  61</td>
                        <td>R$  71</td>
                    </tr>
                    <tr className='est'>
                        <td className='text'>Estudante não associado à SBC (Somente inscrição no evento)</td>
                        <td>R$  64</td>
                        <td>R$  75</td>
                    </tr>
                    <tr>
                        <td className='vazio'></td>
                        <td className='vazio'></td>
                        <td className='vazio'></td>
                    </tr>
                    <tr>
                        <td className='text'>Estudante de pós-graduação associado à SBC com anuidade vigente</td>
                        <td>R$  40</td>
                        <td>R$  50</td>
                    </tr>
                    <tr>
                       
                        <td className='text'>Estudante de pós-graduação associado à SBC com anuidade vencendo em até 90 dias (Melhor opção: COMBO Inscrição no evento + renovação da associação à SBC)</td>
                        <td>R$  165</td>
                        <td>R$  175</td>
                    </tr>
                    <tr>
                       
                        <td className='text'>Estudante de pós-graduação não associado ou com associação não vigente à SBC (Melhor opção: COMBO Inscrição no evento + renovação da associação à SBC)</td>
                        <td>R$  165</td>
                        <td>R$  175</td>
                    </tr>
                    <tr>
                        <td className='text'>Estudante de pós-graduação não associado à SBC (Somente inscrição no evento)</td>
                        <td>R$  169</td>
                        <td>R$  180</td>
                    </tr>
                    <tr>
                        <td className='vazio'></td>
                        <td className='vazio'></td>
                        <td className='vazio'></td>
                    </tr>
                    <tr>
                        <td className='text'>Professor de Educação Básica associado à SBC com anuidade vigente</td>
                        <td>R$  40</td>
                        <td>R$  50</td>
                    </tr>
                    <tr>
                       
                        <td className='text'>Professor de Educação Básica associado à SBC com anuidade vencendo em até 90 dias (Melhor opção: COMBO Inscrição no evento + renovação da associação à SBC)</td>
                        <td>R$  165</td>
                        <td>R$  175</td>
                    </tr>
                    <tr>
                       
                        <td className='text'>Professor de Educação Básica não associado ou com associação não vigente à SBC (Melhor opção: COMBO Inscrição no evento + renovação da associação à SBC)</td>
                        <td>R$  165</td>
                        <td>R$  175</td>
                    </tr>
                    <tr>
                        <td className='text'>Professor de Educação Básica não associado à SBC (Somente inscrição no evento)</td>
                        <td>R$  169</td>
                        <td>R$  180</td>
                    </tr>
                    <tr>
                        <td className='vazio'></td>
                        <td className='vazio'></td>
                        <td className='vazio'></td>
                    </tr>
                    <tr>
                        <td className='text'>Profissional associado à SBC com anuidade vigente</td>
                        <td>R$  50</td>
                        <td>R$  60</td>
                    </tr>
                    <tr>
                       
                        <td className='text'>Profissional associado à SBC com anuidade vencendo em até 90 dias (Melhor opção: COMBO Inscrição no evento + renovação da associação à SBC)</td>
                        <td>R$  406</td>
                        <td>R$  416</td>
                    </tr>
                    <tr>
                       
                        <td className='text'>Profissional não associado ou com associação não vigente à SBC (Melhor opção: COMBO Inscrição no evento + renovação da associação à SBC)</td>
                        <td>R$  406</td>
                        <td>R$  416</td>
                    </tr>
                    <tr>
                        <td className='text'>Profissional não associado à SBC (Somente inscrição no evento)</td>
                        <td>R$  411</td>
                        <td>R$  422</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export { Tabela }

