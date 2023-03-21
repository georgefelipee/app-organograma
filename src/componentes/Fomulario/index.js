import Botao from '../Botao/botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'
import { useState } from 'react';

const Formulario = (props) => {
   
    

    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')

    function aoSalvar(evento) {
        evento.preventDefault()  // para previnir o recarregar da pagina, comportamento padrão do HTML
        props.aoColaboradorAdicionado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
       return(
            /* Quando o usuario fizer o SUBMIT no formulario executa a função ' aoSalvar ' para pegar os estados */
            <section className="formulario">
            
                <form onSubmit={ aoSalvar}>                                      
                    <h2> Preencha os dados para criar o card do colaborador </h2>
                    <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu Nome"
                    valor={nome}
                    aoAlterado={valor=> setNome(valor)}
                    />
                    <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={valor=> setCargo(valor)}
                    />
                    <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor=> setImagem(valor)}
                    />
                    <ListaSuspensa 
                    obrigatorio={true}
                    label="Time" 
                    itens={props.nomeDosTimes}
                    valor={time}
                    aoAlterado={valor=> setTime(valor)}
                    />
                    <Botao>
                        Criar Card
                    </Botao>
                </form>

            </section>
       )
}

export default Formulario