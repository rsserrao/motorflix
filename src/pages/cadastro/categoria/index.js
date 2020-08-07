import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, etc
    setValues({
      ...values,
      [chave]: valor, // nome: valor
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    )
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values.nome
        ])

        setValues(valoresIniciais);
      }}>

        <FormField 
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <div>
          <label>
          Descrição da Categoria:
          <textarea
          type="text"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
          />
          </label>
        </div>

        <FormField 
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>
          <label>
          Cor:
          <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
          />
          </label>
        </div>
 */}
        <div>
          <label>
          Código de Segurança:
          <input
              type="text"
          />
          </label>
        </div>
        
        <button>
          Salvar
        </button>
        <button>
          Limpar
        </button>
      </form>

      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={categoria}>
              {categoria}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;