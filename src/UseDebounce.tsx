import { useEffect, useState } from "react"

export const useDebounce = (search: string , delay = 300) => {
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(search);
        }, delay)

        return () => clearTimeout(timeout);
    }, [delay,search])

    return debouncedSearch;
}