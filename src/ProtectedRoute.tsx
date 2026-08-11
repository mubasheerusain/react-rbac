import { PropsWithChildren } from "react"
import { User } from "./auth"
import { useAuth } from "./AuthProvider";

type ProtectedRouteProps = PropsWithChildren & {
    allowedRoles: User['role'][];
}

export const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
    const {currentUser} = useAuth();

    if(currentUser === null || (allowedRoles && currentUser && !allowedRoles.includes(currentUser.role))) {
        return <h3>UnAuthorized Route</h3>
    }

    return children;
}