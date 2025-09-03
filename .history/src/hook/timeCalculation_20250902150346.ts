import { useEffect, useState } from "react"
import { formatDistanceToNow } from "date-fns"

export const useTimeAgo = (createdAt: string)=> {
    const [timeAgo, setTimeAgo] = useState('')

    useEffect(()=>{
        const update = () => {
            const date = new Date(createdAt)
            setTimeAgo(formatDistanceToNow(date, {addSuffix: true}));
        };

        update();
        const interval = setInterval(update, 60000);
        return ()=> clearInterval(interval)
    }, [createdAt])

    return timeAgo
}