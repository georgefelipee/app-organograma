import { useState } from 'react';
import Banner from './componentes/banner/Banner.js';
import Formulario from './componentes/Fomulario/index.js';
import Time from './componentes/Time/index.js';

function App() {

  const times = [
    {
      nome:'Progamação',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  const[colaboradores,setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado= (colaborador)=>{
      console.log(colaborador)
      setColaboradores([...colaboradores, colaborador])     // Adiciona colaboradores no Array
  }
  return (
    <div className="App">
     
      <Banner />
      <Formulario nomeDosTimes={times.map(time=> time.nome)} aoColaboradorAdicionado={colaborador=> aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time=> <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria} 
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}     //array de Colaboradores
      />)}
    </div>
  );
}

export default App;
