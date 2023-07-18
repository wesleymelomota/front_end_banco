import { useEffect, useState } from "react"
import "./transaction.css"
import Pagination from "../paginator/Paginator"


export default ({transactions}) => {
    
    const itensPorPagina = 3;
    const [paginaAtual, setPaginaAtual] = useState(1);
    const indiceInicial = (paginaAtual - 1) * itensPorPagina;
    const indiceFinal = paginaAtual * itensPorPagina;
    const dadosPaginados = transactions.slice(indiceInicial, indiceFinal);
    const totalPaginas = Math.ceil(transactions.length / itensPorPagina);

    const getTotalPeriodo = () =>{
        let total = 0;
        transactions.map(dado => {
            total += dado.saldo
        })
        return total;
    }
    const getTotalSaldoConta = ()=> {
        let total = 0;
        transactions.map(dado => {
            total += dado.conta.saldo.saldo
        })
        return total;
    }
    
    const handleChangePagina = (pagina) => {
        setPaginaAtual(pagina);
      };

    function renderizarLinhas() {
        return(
            dadosPaginados.map((item, index) => {
                return(
                <tr key={item.id}>
                     
                     <td >{item.dataTransacao}</td>
                     <td>{item.saldo}</td>
                     <td>{item.transferencia.tipo}</td>
                     <td>{item.transferencia.nomeOperadorTransferencia}</td>
                 </tr>  )   
             }))
    }
    return(
        <div className="d-flex flex-column m-4">
            <header className="d-flex justify-content-evenly">
                <label><b>Saldo total: {getTotalSaldoConta()}</b> </label>
                <label><b>Saldo total no periodo: {getTotalPeriodo()}</b> </label>
            </header>
            <div className="conteudo">

            <table className="table">
                <thead>
                    <tr>
                    
                    <th scope="col">Dados</th>
                    <th scope="col">Valencia</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Nome operador Transacionado</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        renderizarLinhas()
                     }
                
                </tbody>
            </table>
            </div>
            
            <footer className="d-flex align-items-center justify-content-center">
                <div>
                    <button className="btn btn-primary"
                    disabled={paginaAtual === 1}
                    onClick={() => handleChangePagina(paginaAtual - 1)}
                    >
                    Anterior
                    </button>
                    <span>Página {paginaAtual} de {totalPaginas}</span>
                    <button className="btn btn-primary"
                    disabled={paginaAtual === totalPaginas}
                    onClick={() => handleChangePagina(paginaAtual + 1)}
                    >
                    Próxima
                    </button>
                </div>
                
                
            </footer>
        </div>
    )
}
