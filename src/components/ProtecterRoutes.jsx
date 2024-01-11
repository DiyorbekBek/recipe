import { Navigate } from "react-router-dom"
function ProtecterRoutes({children, user}) {
if (user) {
    return children
} else {
    return <Navigate to='/login'/>
}
}

export default ProtecterRoutes