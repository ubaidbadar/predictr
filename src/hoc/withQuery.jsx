import React from "react";
import useQuery from "../hooks/useQuery"

export default function withQuery(Component) {
    return props => {
        const isMobile = useQuery();
        return <Component {...props} isMobile={isMobile} />
    }
}