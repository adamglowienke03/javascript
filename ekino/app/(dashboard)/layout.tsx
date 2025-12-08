import { ReactNode } from "react"

type TProps = {
    children: ReactNode
}

export default function DashboardLayout({children}: TProps) {
    return (
        <div className="bg-red-500 h-screen">
            {children}
        </div>
    )
}
