import "../../styles/global.css"
import GlassPane from "@/components/GlassPane";

export default function DashboardRootLayout({children}) {
    return <html>
        <head />
        <body className="h-screen w-screen rainbow-mesh p-6">
            <GlassPane className="w-full h-full flex items-center">
                {children}
            </GlassPane>
        </body>
    </html>
}