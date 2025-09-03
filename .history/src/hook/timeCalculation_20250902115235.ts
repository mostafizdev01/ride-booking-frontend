import { useEffect, useState } from "react"
import { formatDistanceToNow } from "date-fns"

export const useTimeAgo = (createdAt: string)=> {
    const [timeAgo, setTimeAgo] = useState('')

    useEffect(()=>{
        const update = () => {
            setTimeAgo(formatDistanceToNow(new Date(createdAt), {addSuffix: true}));
        };

        update();
        const interval = setInterval(update, 60000);
        return ()=> clearInterval(interval)
    }, [])
}