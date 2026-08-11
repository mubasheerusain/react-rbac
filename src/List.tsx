import { useEffect, useState } from "react"
import { useDebounce } from "./UseDebounce";

export const List = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearch = useDebounce(searchTerm);

    useEffect(() => {
        if(debouncedSearch) {
            console.log(`Making API call for: ${debouncedSearch}`);
        }
    }, [debouncedSearch])
    return (
        <>
            <input placeholder="search" type="text" onChange={(e) => setSearchTerm(e.target.value)}/>
        </>
    )
}