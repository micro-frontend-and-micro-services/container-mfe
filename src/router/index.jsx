import AuthenticatedRoutes from './AuthenticatedRoutes'
import UnAuthenticatedRoutes from './UnAuthenticatedRoutes'

const IndexRoute = () => {
    const access_token=window.localStorage.getItem('accessToken')
    if(access_token){
        return <AuthenticatedRoutes/>
    }
    return <UnAuthenticatedRoutes/>
}

export default IndexRoute