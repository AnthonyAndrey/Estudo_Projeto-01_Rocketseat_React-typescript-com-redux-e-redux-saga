import React, { useEffect } from "react";
import { connect } from "react-redux";

import { bindActionCreators, Dispatch } from "redux";
import { Repository } from "../../store/ducks/repositories/types";
import { ApplicationState } from "../../store";

import * as RepositoriesActions from '../../store/ducks/repositories/actions'

import RepositoryItem from '../RepositoryItem'

/** mapeia o tipo das informações que vem do mapStateToProps */
interface StateProps {
    repositories: Repository[]
}

// mapeia as funções que vem do mapDispacthToProps
interface DispatchProps {
    // aqui eu to dizendo que load request é uma função que retorna void
    loadRequest(): void
}

// qual quer outra propriedade que vem por exemplo de um componente pai
// interface OwnProps {

// }

// unimos todas as interfaces em um lugar só 
// type Props = StateProps & DispatchProps & OwnProps
type Props = StateProps & DispatchProps

function RepositoryList({ repositories, loadRequest }: Props) {
    useEffect(() => {
        loadRequest();
    }, []);
    return (
        <ul>
            {repositories.map((repository) => <RepositoryItem key={repository.id} repository={repository}/>)}
        </ul>
    )
}

// aqui estamos tipando o state como application state, para pegar todos os types da aplicação
// mapeia os states para os props
const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data
})

// quando a gente quer conectar o componente com as actions que criamos
const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators(RepositoriesActions, dispatch)
)

// connect compartilha com o componente/page essas funções
// uma função que recebe o state e retorna quais propriedades queremos desse state
export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)