import { ReactNode } from "react"

type TProps = {
    children: ReactNode
}

export default function BlogLayout({children}: TProps) {
    return (
        <div>
            {children}
        </div>
    )
}
