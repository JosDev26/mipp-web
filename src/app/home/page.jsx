import Header from "../../../components/components/Header"
import Welcome from "../../../components/components/Welcome"
import ActionCards from "../../../components/components/ActionCards"
import "../../../styles/admin.css"

    export default function HomePage() {
    return (
        <div className="app-container">
        <div className="geometric-background">
            <div className="diagonal-left"></div>
            <div className="diagonal-right"></div>
        </div>
        <div className="content-wrapper">
            <Header />
            <main className="main-content">
            <Welcome />
            <ActionCards />
            </main>
        </div>
        </div>
    )
    }

