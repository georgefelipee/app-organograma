import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = (props) => {
    return(
            //RENDERIZAÇÃO CONDICIONAL// 
            (props.colaboradores.length > 0) && <section style={{backgroundColor: props.corSecundaria}} className='time'>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador    =>   <Colaborador 
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}   
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                 />)}
            </div>
            
        </section>
    )
}

export default Time