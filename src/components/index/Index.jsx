import { Link } from "react-router-dom"
import Nav from "../nav/Nav"

export default () => {
    
    return(
        <div className="index container-fluid d-block">
            <header className="f-1">
                <h1 className="text-white">Banco WMM</h1>
            </header>
           
            <div className="content d-flex  row">
                <div className="criar-conta m-2 p-1 badge text-wrap fs-6 text-capitalize col-sm">
                    <h4>Crie Sua conta. é simples e fácil.</h4>
                    <p>Forneça</p>
                    <ul >
                        <li> Seu nome</li>
                        <li>Um nome de usuário para acessar os serviços</li>
                        <li>Uma senha facil de você lembrar</li>
                        <li>O seu Email</li>
                    </ul>
                    <p>Apenas com estas informações você pode criar sua conta e logar. 😀</p>
                    <p>Bora Criar uma <Link className="text-decoration-none" to="/conta">conta</Link> ? </p>
                </div>
                <div className="services m-2 p-1  badge text-wrap fs-6 text-capitalize col-sm">
                    <h4>Aproveite nossos serviços</h4>
                    <ul >
                        <li>Saque</li>
                        <li>Deposito</li>
                        <li>Transferência</li>
                    </ul>
                    <p>Saque seu dinheiro quando quiser.</p>
                    <p>Faça um deposito para sua conta ou outra pessoa.</p>
                    <p>Transfira dinheiro sem taxa para qualquer conta.</p>
                </div>
            </div>
            
        </div>
    )
}