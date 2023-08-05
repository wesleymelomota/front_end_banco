import { useEffect, useState } from "react"
import "./transaction.css"
import { useSelector } from "react-redux";

export default () => {
    const transactionList = useSelector((state) => state.conta.sessao.conta.transacoes)
    const saldoTotal = useSelector((state) => state.conta.sessao.conta.saldo.saldo)
    const itensPorPagina = 3;
    const [paginaAtual, setPaginaAtual] = useState(1);
    const indiceInicial = (paginaAtual - 1) * itensPorPagina;
    const indiceFinal = paginaAtual * itensPorPagina;
    const dadosPaginados = transactionList.slice(indiceInicial, indiceFinal);
    const totalPaginas = Math.ceil(transactionList.length / itensPorPagina);
    
    useEffect(()=> {
        
    }, [transactionList])

    const getTotalPeriodo = () =>{
        let total = 0;
        dadosPaginados.map(dado => {
            total += dado.transferencia.valor
            
        })
        return total;
    }
    
    const handleChangePagina = (pagina) => {
        setPaginaAtual(pagina);
    };
    
    const dateFormat = (date)=> {
          let dataNova = new Date(date)
          return dataNova.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    }

    const formatMoeda = (moeda) => {
        return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(moeda)
    }
   
    function renderizarLinhas() {
        return(
            dadosPaginados.map((item, index) => {
                return(
                <tr key={item.id}>
                     
                     <td >{dateFormat(item.transferencia.dataTransferencia)}</td>
                     <td>{formatMoeda(item.transferencia.valor)}</td>
                     <td>{item.transferencia.tipo}</td>
                     <td>{item.transferencia.nomeOperadorTransferencia}</td>
                 </tr>  )   
             }))
    }
    return(
        <div className="d-flex flex-column m-4">
            <header className="d-flex justify-content-evenly">
                <label className="color-white"><b>Saldo total: {formatMoeda(saldoTotal)}</b> </label>
                <label className="color-white"><b>Saldo total no periodo: {formatMoeda(getTotalPeriodo())}</b> </label>
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
