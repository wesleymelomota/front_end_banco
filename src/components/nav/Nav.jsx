import { Link } from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../../recursos/conta/contaSlice'
import './nav.css'

export default () => {
    const saldo = useSelector((state) => state.conta.sessao.conta.saldo.saldo);
    const conta = useSelector((state) => state.conta.sessao.conta);
    const numeroConta = useSelector((state) => state.conta.sessao.conta.numeroConta);
    const isLoggedIn = useSelector((state) => state.conta.sessao.isLoggedIn);
    const dispatch = useDispatch();

    let contentTransferir;
    let contentTransferencias;
    let contentDepositar;
    let contentSaque;
    let contentInfoConta;
    let contentLogout;
    let contentEntrar;
    let contentCriarConta;

    const sair = ()=> {
        dispatch(logout())
        
    }
    if(isLoggedIn){
        contentTransferir = <Link className="nav-link text-white" to="/transferencia">Transferir</Link>
        contentTransferencias = <Link className="nav-link text-white" to="/transferencias">Transferencias</Link>
        contentDepositar = <Link className="nav-link text-white" to="/deposito">Depositar</Link>
        contentSaque = <Link className="nav-link text-white" to="/saque">Saque</Link>
        contentLogout = <Link onClick={sair} className="nav-link text-white">Sair</Link>
        contentInfoConta = <Link className="nav-link text-white" type="button" 
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample">Informações da conta</Link>
        
    }else{
        contentEntrar = <Link class="nav-link active text-white" aria-current="page" to="/login">Entrar</Link>
        contentCriarConta = <Link class="nav-link active text-white" aria-current="page" to="/conta">Criar Conta</Link>
        
    }
    
    const formatMoeda = (moeda) => {
        return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(moeda)
    }
    return(
        <>
            <nav class="navbar navbar-expand-lg  nav-green">
                <div class="container-fluid">
                    <Link class="navbar-brand text-white" to="/index">Banco</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            {contentCriarConta}
                        </li>
                        <li class="nav-item">                       
                            {contentEntrar}
                        </li>
                        <li class="nav-item">
                            {contentTransferir}
                        </li>
                        <li class="nav-item">
                            {contentTransferencias}
                        </li>
                        <li class="nav-item">
                            {contentDepositar}
                        </li>
                        <li class="nav-item">
                            {contentSaque}
                        </li>
                        <li class="nav-item">
                            {contentInfoConta}
                        </li>
                        
                        <li class="nav-item">
                            {contentLogout}
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
           

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Informações da Conta</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div>
                <label><b>Nome Responsavel</b></label>
                <p>{conta.nomeResponsavel}</p>
                <label><b>Numero da sua Conta</b></label>
                <p>{numeroConta}</p>
                <label><b>Id Conta</b></label>
                <p>{conta.idConta}</p>
                <label><b>Saldo Atual</b></label>
                <p>{formatMoeda(saldo)}</p>
                
            </div>
            <div class="dropdown mt-3">
            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Perfil
            </button>
            <ul class="dropdown-menu">
                <li><Link class="dropdown-item disabled" to="/">Alterar dados da Conta</Link></li>
                <li><Link class="dropdown-item disabled" to="#">Another action</Link></li>
                <li><Link class="dropdown-item disabled" to="#">Apagar Conta</Link></li>
            </ul>
            </div>
        </div>
    </div>
        </>
    )
}