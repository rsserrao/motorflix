import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>
        <div>
            <label>
            Nome da Categoria:
            <input
                type="text"
            />
            </label>
        </div>

        <div>
            <label>
            Observaçao da Categoria:
            <input
                type="text"
            />
            </label>
        </div>

        <div>
            <label>
            Cor:
            <input
                type="text"
            />
            </label>
        </div>

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


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;