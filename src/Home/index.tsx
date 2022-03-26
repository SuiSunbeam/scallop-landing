import { useEffect } from 'react'
import Plx from 'react-plx'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css'

const Home = () => {
    const isDekstopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
    })

    useEffect(() => {
        document.title = 'Scallop';
        return () => { };
    },[])

    return (
        <div className="Home">
            <header className="Home-header">
                <div className="Home-banner">
                    <div className="Home-banner-layer Home-banner-layer-1"></div>
                    <div className="Home-banner-layer Home-banner-layer-2"></div>
                    <div className="Home-banner-layer Home-banner-layer-3"></div>
                </div>
                <div className="Home-header-logo">
                    <a href="/" className="Home-logo">
                        <img className="Home-logo-image" alt="logo" />
                    </a>
                </div>
            </header>
            <main className="Home-wrapper">
                <section className="section-0">
                    <div className="section-0-layer-0"></div>
                    <div className="section-0-content">
                        <div>
                            <h1 className="text-xl">Join now to<br/>win tokens and decorations</h1>
                            <p className="text-lg text-white">A no loss lottery on Solana, stake to win tokens and NFTs ✨ !</p>
                        </div>
                    </div>
                </section>
                <section className="section-1">
                    <div className="section-1-layer-1"></div>
                    <div className="section-1-layer-2"></div>
                    <div className="section-1-content">
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home