import { useEffect, useState } from 'react';
import Plx from 'react-plx';
import axios from 'axios';
import CountUp from 'react-countup';
import krissAvatar from '../resources/images/kriss-avatar.png';
import annAvatar from '../resources/images/ann-avatar.png';
import shawnAvatar from '../resources/images/shawn-avatar.jpg';
import donnieAvatar from '../resources/images/donnie-avatar.png';
import nathanAvatar from '../resources/images/nathan-avatar.png';
import twitterIcon from '../resources/images/twitter-icon.png';
import telegramIcon from '../resources/images/telegram-icon.png';
import discordIcon from '../resources/images/discord-icon.png';
import mediumIcon from '../resources/images/medium-icon.png';
import { usePlxData } from './plxconfig';
import { ArrowSmUpIcon } from '@heroicons/react/solid';
import './index.css';
import dropdownTriangle from '../resources/images/dropdownTriangle.svg';
import suiIcon from '../resources/images/sui.svg';
import solanaIcon from '../resources/images/solana1.svg';

const Home = () => {
    const plxData = usePlxData();

    const BASE_URL = 'https://api.scallop.io';

    const [totalValue, setTotalValue] = useState(0);
    const [totalPrize, setTotalPrize] = useState(0);
    const [showBTT, setShowBTT] = useState(false);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.screen.height) {
                setShowBTT(true);
            } else {
                setShowBTT(false);
            }
        });
    }, []);

    useEffect(() => {
        document.title = 'Scallop';

        (async () => {
            await axios
                .get(`${BASE_URL}/v1/get-total-value`)
                .then((response) => {
                    setTotalValue(response.data.data);
                })
                .catch((e) => console.log('Failed to fetch total value:', e));

            await axios
                .get(`${BASE_URL}/v1/get-total-prize`)
                .then((response) => {
                    setTotalPrize(response.data.data);
                })
                .catch((e) => console.log('Failed to fetch total prize:', e));
        })();

        return () => {};
    }, []);

    return (
        <div className="Home">
            <header className="Home-header">
                <div className="Home-banner">
                    <Plx parallaxData={plxData.bannerSun} className="Home-banner-plx">
                        <div className="Home-banner-layer Home-banner-sun"></div>
                    </Plx>
                    <Plx parallaxData={plxData.bannerClould1} className="Home-banner-plx">
                        <div className="Home-banner-layer Home-banner-clould-1"></div>
                    </Plx>
                    <Plx parallaxData={plxData.bannerClould2} className="Home-banner-plx">
                        <div className="Home-banner-layer Home-banner-clould-2"></div>
                    </Plx>
                    <Plx parallaxData={plxData.bannerClould3} className="Home-banner-plx">
                        <div className="Home-banner-layer Home-banner-clould-3"></div>
                    </Plx>
                    <Plx parallaxData={plxData.bannerClould4} className="Home-banner-plx">
                        <div className="Home-banner-layer Home-banner-clould-4"></div>
                    </Plx>
                    <Plx parallaxData={plxData.bannerSea} className="Home-banner-plx">
                        <div className="Home-banner-layer Home-banner-sea"></div>
                    </Plx>
                    <div className="Home-banner-layer Home-banner-wave"></div>
                </div>
                <nav className="Home-navigation">
                    <a href="/" className="Home-logo">
                        <img alt="Scallop logo" />
                    </a>
                    <div className="Home-nav-menu">
                        <ul className="hidden lg:flex md:space-x-12 2xl:space-x-14">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="#decorations">Decorations</a>
                            </li>
                            <li>
                                <a href="#roadmap">Roadmap</a>
                            </li>
                            <li>
                                <a href="#core-team">Core Team</a>
                            </li>
                            <li>
                                <a href="#investors">Investors</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main className="Home-main">
                <section>
                    <Plx parallaxData={plxData.sectionOneLeftFish} className="image-plx">
                        <img className="group-of-fish" alt="Group of fish" />
                    </Plx>
                    <img className="group-of-discus-fish" alt="Group of discus fish" />
                    <div className="section-content">
                        <p className="text-title-1">The Next Generation Interest Rate Machine</p>
                        <p className="text-title-2">Building lending & borrowing for Sui ecosystem, and premium bonds for Solana & Sui.</p>
                        <div>
                            <a className="more-button pointer-events-none" href="#">
                                Sui App
                            </a>
                            <a className="more-button" href="https://app.scallop.io">
                                Solana App
                            </a>
                            <div className="based-on">
                                <span>Based on</span>
                                <img className="based-on-sui" alt="Sui" />
                                <img className="based-on-solana" alt="Solana" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Plx parallaxData={plxData.sectionTwoRightFish} className="image-plx">
                        <img className="group-of-fish" alt="Group of fish" />
                    </Plx>
                    <img className="group-of-bubble-1" alt="Group of bubble" />
                    <img className="group-of-bubble-2" alt="Group of bubble" />
                    <img className="group-of-zebra-fish" alt="Group of zebra fish" />
                    <img className="rock-left" alt="Left rock" />
                    <img className="group-of-bubble-3" alt="Group of bubble" />
                    <img className="rock-right" alt="Right rock" />
                    <div className="section-content">
                        <div className="bubble-left">
                            <div className="bubble-container">
                                <h5 className="text-title">Next Prize Value</h5>
                                <h4 className="text-number">
                                    <CountUp
                                        start={0}
                                        end={totalPrize}
                                        duration={8}
                                        prefix="≈ "
                                        suffix=" USD"
                                        decimal="."
                                        separator=","
                                        decimals={2}
                                        useEasing={true}
                                    />
                                </h4>
                            </div>
                        </div>
                        <div className="bubble-right">
                            <div className="bubble-container">
                                <h5 className="text-title">Total Value Locked</h5>
                                <h4 className="text-number">
                                    <CountUp
                                        start={0}
                                        end={totalValue}
                                        duration={8}
                                        suffix=" USD"
                                        decimal="."
                                        separator=","
                                        decimals={0}
                                        useEasing={true}
                                    />
                                </h4>
                            </div>
                        </div>
                        <img className="two-jellyfish" alt="Two jellyfish" />
                    </div>
                </section>
                <section>
                    <img className="group-of-bubble-1" alt="Group of bubble" />
                    <img className="group-of-bubble-2" alt="Group of bubble" />
                    <div className="rock-left"></div>
                    <img className="group-of-bubble-3" alt="Group of bubble" />
                    <img className="group-of-bubble-4" alt="Group of bubble" />
                    <img className="rock-right" alt="Right rock" />
                    <img className="group-of-bubble-5" alt="Group of bubble" />
                    <img className="group-of-bubble-6" alt="Group of bubble" />
                    <img className="lonely-zebrafish" alt="Lonely zebrafish" />
                    <img className="seahorse" alt="Seahorse" />
                    <img className="hermit" alt="Hermit crab" />
                    <div className="section-content">
                        {/* <h3 className="text-title-1">&nbsp;</h3> */}
                        <p className="text-title-2">
                            You can also call Scallop protocol's native NFTs Scallop Decorations, the goal of them are useful on-chain
                            collectibles, Scallop Decorations will show at Scallop Tank and interact with Scallop protocol.
                        </p>
                        <a className="nft-button" href="#hermit-crab">
                            Coming Soon
                        </a>
                    </div>
                    <div className="text-title-section" id="decorations">
                        Scallop Decorations
                    </div>
                </section>
                <section>
                    <Plx parallaxData={plxData.sectionFourLeftFish} className="image-plx">
                        <img className="group-of-fish" alt="Group of fish" />
                    </Plx>
                    <img className="lonely-jellyfish" alt="Lonely jellyfish" />
                    <img className="group-of-discus-fish-left" alt="Group of discus fish" />
                    <img className="group-of-discus-fish-right" alt="Group of discus fish" />
                    <img className="rock-left" alt="Left rock" />
                    <img className="rock-right" alt="Right rock" />
                    <img className="group-of-bubble-1" alt="Group of bubble" />
                    <img className="group-of-bubble-2" alt="Group of bubble" />
                    <img className="group-of-bubble-3" alt="Group of bubble" />
                    <img className="group-of-bubble-4" alt="Group of bubble" />
                    <img className="group-of-bubble-5" alt="Group of bubble" />
                    <div className="roadmap-line" />
                    <div className="section-content">
                        <div className="text-roadmap-1">
                            <h2 className="text-title">2023 Q1</h2>
                            <ul className="text-list">
                                <li>
                                    <span>Award Sui Grant</span>
                                </li>
                            </ul>
                        </div>
                        <div className="text-roadmap-2">
                            <h2 className="text-title">2023 Q2</h2>
                            <ul className="text-list">
                                <li>
                                    <span>ScallopV1 on Sui Testnet/Devnet</span>
                                </li>
                                <li>
                                    <span>ScallopV1 on Sui Mainnet</span>
                                </li>
                            </ul>
                        </div>
                        <div className="text-roadmap-3">
                            <h2 className="text-title">2023 Q3</h2>
                            <ul className="text-list">
                                <li>
                                    <span>Mixing Asset</span>
                                </li>
                                <li>
                                    <span>cToken</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-title-section" id="roadmap">
                        Roadmap
                    </div>
                </section>
                <section>
                    <Plx parallaxData={plxData.sectionFiveRightTurtle} className="image-plx">
                        <img className="group-of-turtle" alt="Group of fish" />
                    </Plx>
                    <img className="core-team-submarine" id="core-team" alt="Core team submarine" />
                    <img className="group-of-manta" alt="Group of manta" />
                    <div className="section-content">
                        <div className="card-team">
                            <div className="card-profile">
                                <img alt="Kriss Avatar" className="avatar" src={krissAvatar} />
                            </div>
                            <div className="card-content">
                                <span className="card-name">Kriss</span>
                                <div className="card-links">
                                    <a className="twitter" href="https://twitter.com/djchrisssssss"></a>
                                </div>
                            </div>
                        </div>
                        <div className="card-team">
                            <div className="card-profile">
                                <img alt="Donnie Avatar" className="avatar" src={donnieAvatar} />
                            </div>
                            <div className="card-content">
                                <span className="card-name">Donnie</span>
                                <div className="card-links">
                                    <a className="twitter" href="https://twitter.com/MrDonor_donnie"></a>
                                </div>
                            </div>
                        </div>
                        <div className="card-team">
                            <div className="card-profile">
                                <img alt="Nathan Avatar" className="avatar" src={nathanAvatar} />
                            </div>
                            <div className="card-content">
                                <span className="card-name">Nathan</span>
                                <div className="card-links">
                                    <a className="twitter" href="https://twitter.com/nathanramli"></a>
                                </div>
                            </div>
                        </div>
                        <div className="card-team">
                            <div className="card-profile">
                                <img alt="June Avatar" className="avatar" src={annAvatar} />
                            </div>
                            <div className="card-content">
                                <span className="card-name">Ann</span>
                                <div className="card-links">
                                    <a className="twitter" href="https://twitter.com/sailormoonann"></a>
                                </div>
                            </div>
                        </div>
                        <div className="card-team">
                            <div className="card-profile">
                                <img alt="June Avatar" className="avatar" src={shawnAvatar} />
                            </div>
                            <div className="card-content">
                                <span className="card-name">Shawn</span>
                                <div className="card-links">
                                    <a className="twitter" href="https://twitter.com/XinhaiZeng"></a>
                                </div>
                            </div>
                        </div>
                        <div className="card-team invisible"></div>
                    </div>
                    <img className="group-of-bubble-1" alt="Group of bubble" />
                    <img className="group-of-bubble-2" alt="Group of bubble" />
                    <img className="group-of-bubble-3" alt="Group of bubble" />
                    <img className="group-of-bubble-4" alt="Group of bubble" />
                </section>
                <section>
                    <Plx parallaxData={plxData.sectionSixLeftFish} className="image-plx">
                        <img className="group-of-fish-left" alt="Group of fish" />
                    </Plx>
                    <Plx parallaxData={plxData.sectionSixRightFish} className="image-plx">
                        <img className="group-of-fish-right" alt="Group of fish" />
                    </Plx>
                    <Plx parallaxData={plxData.sectionSixLeftjellyfish} className="image-plx">
                        <img className="group-of-jelly-fish" alt="Group of fish" />
                    </Plx>
                    <Plx parallaxData={[]} className="image-plx">
                        <img className="whale" alt="Whale" />
                    </Plx>
                    <img className="two-jellyfish" alt="Two jellyfish" />
                    <img className="group-of-bubble-1" alt="Group of bubble" />
                    <img className="group-of-bubble-2" alt="Group of bubble" />
                    <div className="section-content">
                        <div className="relative">
                            <a
                                href="https://twitter.com/NotDeGhost"
                                className="investor-info"
                                title="Robert Twitter"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img className="investor-robert" alt="Robert Chen" />
                                <div>
                                    <img alt="twitter" />
                                    <span>Robert</span>
                                </div>
                            </a>
                            <div className="investor-orginization">
                                <a href="https://osec.io/" title="OtterSec" target="_blank" rel="noreferrer">
                                    <img className="orginization-ottersec" alt="OtterSec" />
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <a
                                href="https://twitter.com/Ivantok4"
                                className="investor-info"
                                title="Ivan Twitter"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img className="investor-ivan" alt="Ivan Lee" />
                                <div>
                                    <img alt="twitter" />
                                    <span>Ivan</span>
                                </div>
                            </a>
                            <div className="investor-orginization">
                                <a href="https://comma3.co/" title="Comma3 Ventures" target="_blank" rel="noreferrer">
                                    <img className="orginization-comma3-ventures" alt="Comma3 Ventures" />
                                </a>
                                <a href="https://www.rbcap.io/" title="Red Building Capital" target="_blank" rel="noreferrer">
                                    <img className="orginization-red-building" alt="Red Building" />
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <a
                                href="https://twitter.com/dw8998"
                                className="investor-info"
                                title="David Twitter"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img className="investor-david" alt="David Wang" />
                                <div>
                                    <img alt="twitter" />
                                    <span>David</span>
                                </div>
                            </a>
                            <div className="investor-orginization">
                                <a href="https://www.phdcapital.fund/" title="PHD Capital" target="_blank" rel="noreferrer">
                                    <img className="orginization-phd-capital" alt="PHD Capital" />
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <a
                                href="https://twitter.com/henry3asmp"
                                className="investor-info"
                                title="Henry Twitter"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img className="investor-henry" alt="Henry" />
                                <div>
                                    <img alt="twitter" />
                                    <span>Henry</span>
                                </div>
                            </a>
                            <div className="investor-orginization">
                                <a href="https://assembly.partners/" title="Assembly Partners" target="_blank" rel="noreferrer">
                                    <img className="orginization-assembly-partners" alt="Assembly Partners" />
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <a
                                href="https://twitter.com/DFL_Erwin"
                                className="investor-info"
                                title="Erwin Twitter"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img className="investor-erwin" alt="Erwin" />
                                <div>
                                    <img alt="twitter" />
                                    <span>Erwin</span>
                                </div>
                            </a>
                            <div className="investor-orginization">
                                <a href="https://defiland.app/" title="DefiLand" target="_blank" rel="noreferrer">
                                    <img className="orginization-defi-land" alt="Defi Land" />
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <a
                                href="https://twitter.com/snow668899"
                                className="investor-info"
                                title="Snow Twitter"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img className="investor-snow" alt="Snow" />
                                <div>
                                    <img alt="twitter" />
                                    <span>Snow</span>
                                </div>
                            </a>
                            <div className="investor-orginization">
                                <a href="https://www.lolcapital.io/" title="Lol Capital" target="_blank" rel="noreferrer">
                                    <img className="orginization-lol-capital" alt="Lol Capital" />
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <span className="and-more">and more...</span>
                        </div>
                    </div>
                    <div className="text-title-section" id="investors">
                        Angel Investors
                    </div>
                </section>
            </main>
            <footer>
                <div className="seabed"></div>
                <div className="content">
                    <div className="menu">
                        <a href="https://www.scallop.io/">Home</a>
                        <a href="https://app.scallop.io/">App</a>
                        <a href="https://docs.scallop.io/">Docs</a>
                        <a href="mailto:team@scallop.io">Contact</a>
                    </div>
                    <div className="social-media">
                        <a href="https://t.me/scallop_io">
                            <img src={telegramIcon} alt="" />
                        </a>
                        <a href="https://twitter.com/Scallop_io">
                            <img src={twitterIcon} alt="" />
                        </a>
                        <a href="https://medium.com/scallopio">
                            <img src={mediumIcon} alt="" />
                        </a>
                        <a href="https://discord.com/invite/F7umecFArJ">
                            <img src={discordIcon} alt="" />
                        </a>
                    </div>
                    <a href="/" className="footer-logo">
                        <img alt="Scallop logo" />
                    </a>
                    <div className="copyright">
                        <span>© 2023 Scallop.io</span>
                    </div>
                </div>
            </footer>
            {showBTT && <ArrowSmUpIcon className="Back-to-top" onClick={backToTop} />}
        </div>
    );
};
export default Home;
