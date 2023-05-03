import { useEffect, useState } from 'react';
import Plx from 'react-plx';
import axios from 'axios';
import krissAvatar from '../resources/images/kriss-avatar.png';
import annAvatar from '../resources/images/ann-avatar.png';
import shawnAvatar from '../resources/images/shawn-avatar.jpg';
import donnieAvatar from '../resources/images/donnie-avatar.png';
import nathanAvatar from '../resources/images/nathan-avatar.png';
import twitterIcon from '../resources/images/twitter-icon.svg';
import telegramIcon from '../resources/images/telegram-icon.svg';
import discordIcon from '../resources/images/discord-icon.svg';
import mediumIcon from '../resources/images/medium-icon.svg';
import { usePlxData } from './plxconfig';
import { ArrowSmUpIcon } from '@heroicons/react/solid';
import './index.css';

const Home = () => {
    const plxData = usePlxData();

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
                    <Plx parallaxData={plxData.bannerClould5} className="Home-banner-plx">
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
                        <ul className="hidden lg:flex md:space-x-6 2xl:space-x-14">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="https://sui.scallop.io/">App</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#core-team">Core Team</a>
                            </li>
                            <li>
                                <a href="#backer">Backer</a>
                            </li>
                            <li>
                                <a href="#roadmap">Roadmap</a>
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
                        <p className="text-title-1">
                        Scallop is the Next Generation Money Market
                        </p>
                        <p className="text-title-2">
                        which emphasizes institutional-grade quality, enhanced composability, and robust security.

                        </p>
                        <div>
                            <div className="links-container">
                                <a className="more-button button1 to-transparent" href="https://sui.scallop.io/">
                                    Launch App
                                </a>
                                <a className="more-button button2" href="https://linktr.ee/scallop_io">
                                    Read More
                                </a>
                            </div>

                            <div className="based-on">
                                <span className='text-[#1e2d45]'>Based on</span>
                                <a href="https://sui.io/">
                                    <img className="based-on-sui" alt="Sui" />
                                </a>
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
                    {/* <img className="group-of-zebra-fish" alt="Group of zebra fish" /> */}
                    <img className="rock-left" alt="Left rock" />
                    <img className="group-of-bubble-3" alt="Group of bubble" />
                    <img className="rock-right" alt="Right rock" />
                    <div className="section-content">
                        <div className="text-title-section" id="about">
                            About
                        </div>
                        <img className="about" alt="about" />
                        <img className="two-jellyfish" alt="Two jellyfish" />
                    </div>
                </section>
                <section>
                    <img className="seahorse" alt="Seahorse" />
                    <img className="rock-right" alt="Right rock" />
                    <img className="group-of-bubble-4" alt="Group of bubble" />
                    <img className="group-of-bubble-5" alt="Group of bubble" />
                    <img className="group-of-bubble-6" alt="Group of bubble" />
                    <div className="section-content">
                        <div className="bubble2"></div>
                    </div>
                    <div className="text-title-section" id="build">
                        Build with...
                    </div>
                    <div className="group-bubbles">
                        <div className="group-of-bubble-1">
                            <img className="bubble-1" alt="Group of bubble" />
                            <h3 className="text-title-1">High Security</h3>
                        </div>
                        <div className="group-of-bubble-2">
                            <img className="bubble-2" alt="Composability of bubble" />
                            <h3 className="text-title-2">Composability</h3>
                        </div>
                        <div className="group-of-bubble-3">
                            <img className="bubble-3" alt="Institutional Grade of bubble" />
                            <h3 className="text-title-3">Institutional Grade</h3>
                        </div>
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
                    <div className="section-content">
                        <div className="text-title-section" id="achievement">
                            Achievements
                        </div>
                        <ul className="text-list">
                            <li>
                                <div className="championGroupLeft">
                                    <img className="champion-bubble-1" alt=""></img>
                                    <img className="bubbleLine1" alt="" />
                                </div>

                                <span>
                                    <a className="underline" href="https://blog.sui.io/grant-recipients-round-one/">
                                        🥇 1st DeFi project award an official grant from the Sui Foundation
                                    </a>{' '}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a className="underline" href="https://dorahacks.io/grant/solana-2/top">
                                        🥇 1st highest community vote project in 2021 Solana Ignition Hackathon Asia
                                    </a>{' '}
                                </span>
                                <div className="championGroupRight">
                                    <img className="champion-bubble-2" alt=""></img>
                                    <img className="bubbleLine2" alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="championGroupLeft">
                                    <img className="champion-bubble-3" alt=""></img>
                                    <img className="bubbleLine3" alt="" />
                                </div>
                                <span>
                                    <a className="underline" href="https://suictf.movebit.xyz/scoreboard">
                                        🥉 3rd place in the Sui x jump_ Builder House Ho Chi Minh City CTF challenge
                                    </a>{' '}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a className="underline" href="https://suitf.osec.io/scores">
                                        🎖️ 5th place in the Sui Builder House Denver CTF challenge.
                                    </a>
                                </span>
                                <div className="championGroupRight">
                                    <img className="champion-bubble-4" alt=""></img>
                                    <img className="bubbleLine4" alt="" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="section-content">
                        <div className="text-title-section" id="beyond">
                            Beyond Lending & Borrowing
                        </div>
                        <img className="beyond" alt="beyond" />
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
                                <div className="card-links">
                                    <a className="twitter" href="https://twitter.com/djchrisssssss"></a>
                                </div>
                                <span className="card-name">Kriss</span>
                            </div>
                        </div>
                        <div className="card-team">
                            <div className="card-profile">
                                <img alt="Donnie Avatar" className="avatar" src={donnieAvatar} />
                            </div>
                            <div className="card-content">
                                <div className="card-links">
                                    <a className="twitter" href="https://twitter.com/MrDonor_donnie"></a>
                                </div>
                                <span className="card-name">Donnie</span>
                            </div>
                        </div>
                        <div className="card-team">
                            <div className="card-profile">
                                <img alt="Nathan Avatar" className="avatar" src={nathanAvatar} />
                            </div>
                            <div className="card-content">
                                <div className="card-links">
                                    <a className="twitter" href="https://twitter.com/nathanramli"></a>
                                </div>
                                <span className="card-name">Nathan</span>
                            </div>
                        </div>

                        <div className="card-team">
                            <div className="card-profile">
                                <img alt="June Avatar" className="avatar" src={annAvatar} />
                            </div>
                            <div className="card-content">
                                <div className="card-links">
                                    <a className="twitter" href="https://twitter.com/sailormoonann"></a>
                                </div>
                                <span className="card-name">Ann</span>
                            </div>
                        </div>
                        <div className="card-team">
                            <div className="card-profile">
                                <img alt="June Avatar" className="avatar" src={shawnAvatar} />
                            </div>
                            <div className="card-content">
                                <div className="card-links">
                                    <a className="twitter" href="https://twitter.com/XinhaiZeng"></a>
                                </div>
                                <span className="card-name">Shawn</span>
                            </div>
                        </div>
                    </div>
                    <img className="group-of-bubble-1" alt="Group of bubble" />
                    <img className="group-of-bubble-2" alt="Group of bubble" />
                    <img className="group-of-bubble-3" alt="Group of bubble" />
                    <img className="group-of-bubble-4" alt="Group of bubble" />
                </section>
                <section>
                    <div className="section-content">
                        <div className="text-title-section" id="backer">
                            Backer
                        </div>
                        <img className="suiFoundation" alt="suiFoundation" />
                    </div>
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
                    <div className="section-content"></div>
                    <div className="text-title-section" id="roadmap">
                        Roadmap
                    </div>
                    <img className="roadmap" alt="Roadmap" />
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
