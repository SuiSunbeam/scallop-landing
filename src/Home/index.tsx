import { useEffect } from 'react'
import krissAvatar from '../resources/images/kriss-avatar.png'
import juneAvatar from '../resources/images/june-avatar.png'
import donnieAvatar from '../resources/images/donnie-avatar.png'
import nathanAvatar from '../resources/images/nathan-avatar.png'
import twitterIcon from '../resources/images/twitter-icon.png'
import telegramIcon from '../resources/images/telegram-icon.png'
import discordIcon from '../resources/images/discord-icon.png'
import mediumIcon from '../resources/images/medium-icon.png'
import './Home.css'

const Home = () => {
    useEffect(() => {
        document.title = 'Scallop'
        return () => {}
    }, [])

    return (
        <div className="Home">
            <header className="Home-header">
                <div className="Home-banner">
                    <div className="Home-banner-layer Home-banner-layer-1"></div>
                    <div className="Home-banner-layer Home-banner-layer-2"></div>
                    <div className="Home-banner-layer Home-banner-layer-3"></div>
                    <div className="Home-banner-layer Home-banner-layer-4"></div>
                    <div className="Home-banner-layer Home-banner-layer-5"></div>
                </div>
                <nav className="Home-navigation place-items-center">
                    <div className="col-span-2">
                        <a href="/" className="Home-logo">
                            <img className="Home-logo-image" alt="logo" />
                        </a>
                    </div>
                    <div className="Home-nav-menu col-span-4 lg:ml-24 xl:ml-44 2xl:ml-60 z-50 my-4 list-none divide-y">
                        <ul
                            className="xxs:hidden xs:hidden lg:flex md:space-x-12 2xl:space-x-14"
                            aria-labelledby="dropdown"
                        >
                            <li className="active">Home</li>
                            <li>NFTs</li>
                            <li>Roadmap</li>
                            <li>Core Team</li>
                            <li>Investors</li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main className="Home-wrapper">
                <section>
                    <div className="section-0-content grid grid-cols-6 w-full h-full">
                        <div className="col-span-4 justify-self-start flex flex-col place-content-center h-full xxs:ml-10 xs:ml-10 lg:ml-20 xl:ml-40 2xl:ml-44">
                            <p className="text-title-1">
                                Scallop is a diverse no-loss
                                <br />
                                protocol on Solana blockchain
                            </p>
                            <p className="text-title-2">
                                with ocean theme on-chain collectibles and NFTs
                                ✨ !
                            </p>
                            <div className="flex space-x-8 xxs:mt-3 xs:mt-3 sm:mt-2 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10">
                                <div>
                                    <button className="Home-button button-header">
                                        Launch App
                                    </button>
                                </div>
                                <div>
                                    <button className="Home-button button-header">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 flex">
                            <div className="group-of-discus-fish self-center"></div>
                        </div>
                    </div>
                </section>
                <section>
                    <img alt="A rock" className="section-1-rock-1" />
                    <img alt="A rock" className="section-1-rock-2" />
                    <div className="section-1-content">
                        <div className="absolute bubble-position-1">
                            <div className="relative section-1-bubble-container text-center grid gap-1 place-items-center">
                                <div className="section-1-bubble-container-text-position">
                                    <h5 className="section-1-bubble-container-text-title">
                                        Total Value Locked
                                    </h5>
                                    <h4 className="section-1-bubble-container-text-number">
                                        3,456,789 USD
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="absolute two-jellyfish"></div>
                        <div className="absolute bubble-position-2">
                            <div className="relative section-1-bubble-container-2 text-center grid gap-1 place-items-center">
                                <div className="section-1-bubble-container-text-position">
                                    <h5 className="section-1-bubble-container-text-title">
                                        Total Prize value
                                    </h5>
                                    <h4 className="section-1-bubble-container-text-number">
                                        ≈ 36142 USD
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="rock-left"></div>
                    <div className="rock-right"></div>
                </section>
                <section>
                    <div className="w-full absolute flex justify-center">
                        <img alt="Roadmap" className="roadmap-line" />
                        <div className="relative wrapper-bubble wrapper-bubble-position-1">
                            <img
                                alt="Roadmap Bubble"
                                className="absolute roadmap-bubble"
                            />
                            <div className="absolute xxs:-ml-2 xs:-ml-1 xs:ml-4 sm:mt-2 sm:ml-4 md:ml-6 lg:ml-12 xl:ml-10 2xl:ml-8">
                                <h2 className="text-title">2022 Q2</h2>
                                <ul className="text-list">
                                    <li>
                                        <span>Mainnet Launch</span>
                                    </li>
                                    <li>
                                        <span>Scallop IDO</span>
                                    </li>
                                    <li>
                                        <span>Scallop Token (SCA)</span>
                                    </li>
                                    <li>
                                        <span>Hermit Crab NFTS</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative wrapper-bubble wrapper-bubble-position-2">
                            <img
                                alt="Roadmap Bubble"
                                className="absolute roadmap-bubble"
                            />
                            <div className="absolute xxs:-ml-3 xs:-ml-1 sm:ml-4 md:ml-6 lg:ml-12 xl:ml-10 2xl:ml-8">
                                <h2 className="text-title">2022 Q3</h2>
                                <ul className="text-list">
                                    <li>
                                        <span>Scallop Swap</span>
                                    </li>
                                    <li>
                                        <span>SCA Staking</span>
                                    </li>
                                    <li>
                                        <span>Support more tokens</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative wrapper-bubble wrapper-bubble-position-3">
                            <img
                                alt="Roadmap Bubble"
                                className="absolute roadmap-bubble"
                            />
                            <div className="absolute xxs:-ml-3 xs:-ml-1 sm:ml-4 md:ml-6 lg:ml-12 xl:ml-10 2xl:ml-8">
                                <h2 className="text-title">2022 Q4</h2>
                                <ul className="text-list">
                                    <li>
                                        <span>Scallop Pool V2</span>
                                    </li>
                                    <li>
                                        <span>Scallop DAO</span>
                                    </li>
                                    <li>
                                        <span>Scallop Tamagotchi</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <img alt="A rock" className="rock-left" />
                    <div className="text-title-section">Roadmap</div>
                </section>
                <section className="flex flex-col w-full">
                    <div className="p-5 w-full mb-20">
                        <div className="core-team-submarine"></div>
                    </div>
                    <div className="p-5 flex flex-col md:flex-row w-full">
                        <div className="stingray-container">
                            <div className="group-of-stingray" />
                        </div>
                        <div className="p-5 teams">
                            <div className="card-team">
                                <div className="card-profile">
                                    <img
                                        alt="Kriss Avatar"
                                        className="avatar"
                                        src={krissAvatar}
                                    />
                                    <div className="title">Team Lead</div>
                                </div>
                                <div className="card-content">
                                    <span className="card-name">Kriss</span>
                                    <div className="card-links">
                                        <a
                                            className="twitter"
                                            href="https://twitter.com/djchrisssssss"
                                        ></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-team">
                                <div className="card-profile">
                                    <img
                                        alt="Donnie Avatar"
                                        className="avatar"
                                        src={donnieAvatar}
                                    />
                                    <div className="title">Developer</div>
                                </div>
                                <div className="card-content">
                                    <span className="card-name">Donnie</span>
                                    <div className="card-links">
                                        <a
                                            className="twitter"
                                            href="https://twitter.com/MrDonor_donnie"
                                        ></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-team">
                                <div className="card-profile">
                                    <img
                                        alt="Nathan Avatar"
                                        className="avatar"
                                        src={nathanAvatar}
                                    />
                                    <div className="title">Developer</div>
                                </div>
                                <div className="card-content">
                                    <span className="card-name">Nathan</span>
                                    <div className="card-links">
                                        <a
                                            className="twitter"
                                            href="https://twitter.com/nathanramli"
                                        ></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-team">
                                <div className="card-profile">
                                    <img
                                        alt="June Avatar"
                                        className="avatar"
                                        src={juneAvatar}
                                    />
                                    <div className="title">Designer</div>
                                </div>
                                <div className="card-content">
                                    <span className="card-name">June</span>
                                    <div className="card-links">
                                        <a
                                            className="twitter"
                                            href="https://twitter.com/ChunnnnHsieh"
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="whale"></div>
                    <div className="absolute two-jellyfish"></div>
                    <div className="content">
                        <h1>Investors</h1>
                    </div>
                </section>
            </main>
            <footer>
                <div className="seabed"></div>
                <div className="absolute w-full h-full flex justify-center items-center">
                    <div className="content">
                        <div className="menu">
                            <a href="https://www.scallop.io/">HOME</a>
                            <a href="https://app.scallop.io/">APP</a>
                            <a href="https://docs.scallop.io/">DOCS</a>
                            <a href="mailto:team@scallop.io">CONTACT US</a>
                        </div>
                        <div className="social-media">
                            <a href="https://t.me/scallop_io">
                                <img src={telegramIcon} alt="" />
                            </a>
                            <a href="https://twitter.com/Scallop_io">
                                <img src={twitterIcon} alt="" />
                            </a>
                            <a href="https://scallopio.medium.com/scallop-c030758d9c40">
                                <img src={mediumIcon} alt="" />
                            </a>
                            <a href="https://discord.com/invite/F7umecFArJ">
                                <img src={discordIcon} alt="" />
                            </a>
                        </div>
                        <div className="logo"></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Home
