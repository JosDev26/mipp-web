import Header from "../components/Header"
import WelcomeSection from "../components/Welcome"
import ActionCards from "../components/ActionCards"
import "../../styles/admin.css"

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
            <WelcomeSection />
            <ActionCards />
            </main>
        </div>
        </div>
    )
    }
