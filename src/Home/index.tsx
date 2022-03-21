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
        </div>
    )
}

export default Home