import { ReactElement, useState } from 'react'

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal'
}

export default function Link({children, page}:{children: ReactElement|string, page: string}){
    const [status, setStatus] = useState(STATUS.NORMAL)

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED)
    }

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL)
    }

    return(
        <a
            className={status}
            href={page||'#'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </a>
    )
}