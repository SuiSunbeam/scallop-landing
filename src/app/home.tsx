import { useEffect, useState } from 'react';
import Plx from 'react-plx';
import { Menu } from '@headlessui/react';
import { ArrowUpIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { usePlxData } from '@/app/plxconfig';
import krissAvatar from '@/assets/images/avatar-kriss.png';
import annAvatar from '@/assets/images/avatar-ann.png';
import shawnAvatar from '@/assets/images/avatar-shawn.jpg';
import donnieAvatar from '@/assets/images/avatar-donnie.png';
import nathanAvatar from '@/assets/images/avatar-nathan.png';
import twitterCommunity from '@/assets/images/community-twitter.svg';
import telegramCommunity from '@/assets/images/community-telegram.svg';
import discordCommunity from '@/assets/images/community-discord.svg';
import mediumCommunity from '@/assets/images/community-medium.svg';
import '@/app/styles/home.css';

const Home = () => {
  const plxData = usePlxData();

  const [showBackToTop, setBackToTop] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.screen.height) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  return (
    <div className="home">
      <header className="home-header">
        <div className="header-scene">
          <Plx parallaxData={plxData.headerSceneSun} className="header-scene-plx">
            <div className="scene-sun"></div>
          </Plx>
          <Plx parallaxData={plxData.headerSceneClould1} className="header-scene-plx">
            <div className="scene-clould-1"></div>
          </Plx>
          <Plx parallaxData={plxData.headerSceneClould2} className="header-scene-plx">
            <div className="scene-clould-2"></div>
          </Plx>
          <Plx parallaxData={plxData.headerSceneClould3} className="header-scene-plx">
            <div className="scene-clould-3"></div>
          </Plx>
          <Plx parallaxData={plxData.headerSceneClould4} className="header-scene-plx">
            <div className="scene-clould-4"></div>
          </Plx>
          <Plx parallaxData={plxData.headerSceneClould5} className="header-scene-plx">
            <div className="scene-clould-4"></div>
          </Plx>
          <Plx parallaxData={plxData.headerSceneSea} className="header-scene-plx">
            <div className="scene-sea"></div>
          </Plx>
          <div className="scene-wave"></div>
        </div>
        <nav className="header-navigation">
          <a href="/" className="header-logo group">
            <img className="group-hover:animate-shake" alt="Scallop logo" />
            <span>Scallop</span>
          </a>
          <div className="header-navbar">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="https://app.scallop.io/">App</a>
              </li>
              <li>
                <a href="https://docs.scallop.io/">Docs</a>
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
          <Menu>
            <Menu.Button className="header-menubar-button">
              <Bars3Icon />
            </Menu.Button>
            <Menu.Items className="header-menubar-items">
              <Menu.Item as="div">
                <a href="/">Home</a>
              </Menu.Item>
              <Menu.Item as="div">
                <a href="https://app.scallop.io/">App</a>
              </Menu.Item>
              <Menu.Item as="div">
                <a href="https://docs.scallop.io/">Docs</a>
              </Menu.Item>
              <Menu.Item as="div">
                <a href="#about">About</a>
              </Menu.Item>
              <Menu.Item as="div">
                <a href="#core-team">Core Team</a>
              </Menu.Item>
              <Menu.Item as="div">
                <a href="#backer">Backer</a>
              </Menu.Item>
              <Menu.Item as="div">
                <a href="#roadmap">Roadmap</a>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </nav>
      </header>

      <main className="home-main">
        <div className="main-scene">
          <section>
            <Plx parallaxData={plxData.mainGroupOfFishOne} className="main-scene-plx">
              <img className="scene-groupOfFish-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfDiscusFish-1" />
            </Plx>
          </section>
          <section>
            <Plx parallaxData={plxData.mainGroupOfFishTwo} className="main-scene-plx">
              <img className="scene-groupOfFish-2" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfZebraFish-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfJellyFish-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-2" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-3" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-rockLeft-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-rockRight-1" />
            </Plx>
          </section>
          <section>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-4" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-5" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-6" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-seahorse-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-rockRight-2" />
            </Plx>
          </section>
          <section>
            <Plx parallaxData={plxData.mainGroupOfFishThree} className="main-scene-plx">
              <img className="scene-groupOfFish-3" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-singleJellyFish-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfDiscusFish-2" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfDiscusFish-3" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-7" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-8" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-9" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-10" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-11" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-rockLeft-2" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-rockRight-3" />
            </Plx>
          </section>
          <section></section>
          <section>
            <Plx parallaxData={plxData.mainGroupOfTurtle} className="main-scene-plx">
              <img className="scene-groupOfTurtle" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-submarine" id="core-team" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfManta" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-12" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-13" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-14" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-15" />
            </Plx>
          </section>
          <section></section>
          <section>
            <Plx parallaxData={plxData.mainGroupOfFishFour} className="main-scene-plx">
              <img className="scene-groupOfFish-4" />
            </Plx>
            <Plx parallaxData={plxData.mainGroupOfFishFive} className="main-scene-plx">
              <img className="scene-groupOfFish-5" />
            </Plx>
            <Plx parallaxData={plxData.mainGroupOfJellyFishTwo} className="main-scene-plx">
              <img className="scene-groupOfJellyFish-2" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-whale" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfJellyFish-3" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-16" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-17" />
            </Plx>
          </section>
        </div>
        <div className="main-content">
          <section>
            <div className="section-content">
              <p className="text-title-1">Scallop is the Next Generation Money Market</p>
              <p className="text-title-2">
                which emphasizes institutional-grade quality, enhanced composability, and robust
                security.
              </p>
              <div>
                <div className="links-container">
                  <a
                    className="more-button button1"
                    href="https://app.scallop.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Launch App
                  </a>
                  <a
                    className="more-button button2"
                    href="https://linktr.ee/scallop_io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More
                  </a>
                </div>
                <div className="based-on">
                  <span>Based on</span>
                  <a href="https://sui.io/" target="_blank" rel="noreferrer">
                    <img className="based-on-sui" alt="Sui" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="section-content">
              <div className="text-title-section" id="about">
                About
              </div>
              <img className="about" alt="about" />
            </div>
          </section>
          <section>
            <div className="section-content">
              <div className="text-title-section" id="why-scallop">
                Why Scallop?
              </div>
              <div className="why-scallop">
                <div className="reason-1">
                  <img />
                  <h3>Professional Trader Enabling</h3>
                  <ul>
                    <li>
                      Full featured 2 Layer SDKs for integrate with Sui & Scallop, powered by
                      programmable Transaction Blocks
                    </li>
                    <li>Zero-cost flash loan</li>
                    <li>Market coins (Collateral token)</li>
                    <li>Scallop Tools</li>
                  </ul>
                </div>
                <div className="reason-2">
                  <img />
                  <h3>Industry Leading Model</h3>
                  <ul>
                    <li>
                      Most optimzied model upon Compound V3, Euler & Solend V2:
                      <ul>
                        <li>Dynamic Parameters</li>
                        <li>Collateral/Borrow Weights</li>
                        <li>Protected Collateral Vault</li>
                        <li>Borrow/Outflow/Collateralization Limits</li>
                        <li>TWAP Oracles</li>
                        <li>Multi-Oracle Strategy</li>
                        <li>Delayed Model Change</li>
                        <li>Soft Liquidation</li>
                        <li>Insurance Fund</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="reason-3">
                  <img />
                  <h3>Security First</h3>
                  <ul>
                    <li>Sui Move - Base on Rust</li>
                    <li>Security Partners - Ottersec & MoveBit</li>
                    <li>A team with cybersecurity background & Sui Move CTF contest places</li>
                    <li>Designed with zero trust</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="section-content">
              <div className="text-title-section" id="achievement">
                Achievements
              </div>
              <ul className="achievement">
                <li>
                  <div className="left-champion">
                    <img className="champion-bubble sui-champion-1" />
                    <img className="left-champion-line" />
                  </div>
                  <div>
                    <span>🥇</span>
                    <a
                      href="https://blog.sui.io/grant-recipients-round-one/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      1st DeFi project award an official grant from the Sui Foundation.
                    </a>{' '}
                  </div>
                </li>
                <li>
                  <div>
                    <span>🥇</span>
                    <a href="" target="_blank" rel="noreferrer">
                      1st place in the Sui Builder House Seoul Hackathon in June 2023. (Scallop
                      Tools)
                    </a>{' '}
                  </div>
                  <div className="right-champion">
                    <img className="champion-bubble sui-champion-2" />
                    <img className="right-champion-line" />
                  </div>
                </li>
                <li>
                  <div className="left-champion">
                    <img className="champion-bubble  sui-champion-3" />
                    <img className="left-champion-line" />
                  </div>
                  <div>
                    <span>🥉</span>
                    <a
                      href="https://suictf.movebit.xyz/scoreboard"
                      target="_blank"
                      rel="noreferrer"
                    >
                      3rd place in the 2023 Sui x jump_ Builder House Ho Chi Minh City CTF
                      challenge.
                    </a>{' '}
                  </div>
                </li>
                <li>
                  <div>
                    <span>🎖️</span>
                    <a href="" target="_blank" rel="noreferrer">
                      5th place in the Sui Builder House Seoul Hackathon in June 2023. (Sui Kit)
                    </a>
                  </div>
                  <div className="right-champion">
                    <img className="champion-bubble  sui-champion-3" />
                    <img className="right-champion-line" />
                  </div>
                </li>
                <li>
                  <div className="left-champion">
                    <img className="champion-bubble  sui-champion-5" />
                    <img className="left-champion-line" />
                  </div>
                  <div>
                    <span>🎖️</span>
                    <a href="" target="_blank" rel="noreferrer">
                      5th place in the Sui Builder House Denver CTF challenge
                    </a>{' '}
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
              <img className="beyond" />
            </div>
          </section>
          <section>
            <div className="section-content">
              <div className="team-card">
                <div className="card-avatar">
                  <img alt="Kriss Avatar" src={krissAvatar} />
                </div>
                <div className="card-profile">
                  <div className="profile-links">
                    <a
                      className="twitter"
                      href="https://twitter.com/djchrisssssss"
                      target="_blank"
                      rel="noreferrer"
                    />
                  </div>
                  <span className="profile-name">Kriss</span>
                </div>
              </div>
              <div className="team-card">
                <div className="card-avatar">
                  <img alt="Donnie Avatar" src={donnieAvatar} />
                </div>
                <div className="card-profile">
                  <div className="profile-links">
                    <a
                      className="twitter"
                      href="https://twitter.com/MrDonor_donnie"
                      target="_blank"
                      rel="noreferrer"
                    />
                  </div>
                  <span className="profile-name">Donnie</span>
                </div>
              </div>
              <div className="team-card">
                <div className="card-avatar">
                  <img alt="Nathan Avatar" src={nathanAvatar} />
                </div>
                <div className="card-profile">
                  <div className="profile-links">
                    <a
                      className="twitter"
                      href="https://twitter.com/nathanramli"
                      target="_blank"
                      rel="noreferrer"
                    />
                  </div>
                  <span className="profile-name">Nathan</span>
                </div>
              </div>
              <div className="team-card">
                <div className="card-avatar">
                  <img alt="June Avatar" src={annAvatar} />
                </div>
                <div className="card-profile">
                  <div className="profile-links">
                    <a
                      className="twitter"
                      href="https://twitter.com/sailormoonann"
                      target="_blank"
                      rel="noreferrer"
                    />
                  </div>
                  <span className="profile-name">Ann</span>
                </div>
              </div>
              <div className="team-card">
                <div className="card-avatar">
                  <img alt="June Avatar" src={shawnAvatar} />
                </div>
                <div className="card-profile">
                  <div className="profile-links">
                    <a
                      className="twitter"
                      href="https://twitter.com/XinhaiZeng"
                      target="_blank"
                      rel="noreferrer"
                    />
                  </div>
                  <span className="profile-name">Shawn</span>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="section-content">
              <div className="text-title-section" id="backer">
                Backers
              </div>
              <div className="backer">
                <a href="https://sui.io/" target="_blank" rel="noreferrer">
                  <img className="sui-foundation" alt="Sui Foundation" />
                </a>
                <a href="https://assembly.partners/" target="_blank" rel="noreferrer">
                  <img className="assembly-partners" alt="Assembly Partners" />
                </a>
                <a href="https://comma3.co/" target="_blank" rel="noreferrer">
                  <img className="comma3" alt="Comma3" />
                </a>
                <a href="https://supraoracles.com/" target="_blank" rel="noreferrer">
                  <img className="supra-oracles" alt="Supra Oracles" />
                </a>
                <a href="https://osec.io/" target="_blank" rel="noreferrer">
                  <img className="ottersec" alt="OtterSec" />
                </a>
                <a href="https://www.movebit.xyz/" target="_blank" rel="noreferrer">
                  <img className="movebit" alt="MoveBit" />
                </a>
              </div>
            </div>
          </section>
          <section>
            <div className="section-content">
              <div className="text-title-section" id="roadmap">
                Roadmap
              </div>
              <img className="roadmap" />
            </div>
          </section>
        </div>
      </main>

      <footer className="home-footer">
        <div className="footer-scene"></div>
        <div className="footer-content">
          <div className="menu">
            <a href="https://www.scallop.io/" target="_blank" rel="noreferrer">
              Home
            </a>
            <a href="https://app.scallop.io/" target="_blank" rel="noreferrer">
              App
            </a>
            <a href="https://docs.scallop.io/" target="_blank" rel="noreferrer">
              Docs
            </a>
            <a href="mailto:team@scallop.io">Contact</a>
          </div>
          <div className="community">
            <a href="https://t.me/scallop_io" target="_blank" rel="noreferrer">
              <img src={telegramCommunity} alt="Scallop Telegram" />
            </a>
            <a href="https://twitter.com/Scallop_io" target="_blank" rel="noreferrer">
              <img src={twitterCommunity} alt="Scallop Twitter" />
            </a>
            <a href="https://medium.com/scallopio" target="_blank" rel="noreferrer">
              <img src={mediumCommunity} alt="Scallop Medium" />
            </a>
            <a href="https://discord.com/invite/F7umecFArJ" target="_blank" rel="noreferrer">
              <img src={discordCommunity} alt="Scallop Discord" />
            </a>
          </div>
          <a href="/" className="footer-logo group">
            <img className="group-hover:animate-shake" alt="Scallop logo" />
            <span>Scallop</span>
          </a>
          <div className="copyright">
            <span>© 2023 Scallop.io</span>
          </div>
        </div>
      </footer>
      {showBackToTop && <ArrowUpIcon className="back-to-top" onClick={handleBackToTop} />}
    </div>
  );
};
export default Home;
