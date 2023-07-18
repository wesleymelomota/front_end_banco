import { Link } from "react-router-dom"
//mudando a cor background
export default () => {

    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Banco</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/conta">Abrir Conta</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link disabled" to="/transferencia">Transferir</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/transferencias">Transferencias</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link disabled">Disabled</Link>
                        </li>
                    </ul>
                    </div>
                </div>
        </nav>
    )
}