import { useState } from "react"
import Cards from "./Components/Cards"
import Menu from "./Components/Menu"


function App() {


  const cards = [{
    title: 'Sunday Morning',
    src: '/C1.png'

  },
  {
    title: 'Golden Age',
    src: '/C2.png'
  },
  {
    title: 'Bronze Age',
    src: '/C3.png'
  },
  {
    title: 'Dark Age',
    src: '/C4.png',
    text: "STANDARD"
  },
  {
    title: 'Mordern Age',
    src: '/C5.png',
    text: "STANDARD"
  },
  {
    title: 'Photorealistic',
    src: '/C6.png',
    text: "STANDARD"
  },
  {
    title: 'Anime',
    src: '/C7.png',
    text: "PRO"
  },

  {
    title: 'Chibi',
    src: '/C8.png',
    text: "PRO"
  },
  {
    title: 'Fairy Tail',
    src: '/C9.png',
    text: "PRO"
  },
  ]

  const artStyles = [
    {
      title: 'Starry Night',
      src: '/A1.png',

    },
    {
      title: 'Water Lills',
      src: '/A2.png',
      text: "STANDARD"
    },
    {
      title: 'Art Naueau',
      src: '/A3.png',
      text: "STANDARD"
    },
    {
      title: 'NightHawks',
      src: '/A4.png',
      text: "PRO"
    },
    {
      title: 'Italian Masters',
      src: '/A5.png',
      text: "PRO"
    },
    {
      title: 'PhotoJournalism',
      src: '/A6.png',
      text: "PRO"
    },
    {
      title: 'Afropop',
      src: '/C7.png',
      text: "PRO"
    },
    {
      title: 'Manga X watercolor',
      src: '/C8.png',
      text: "PRO"
    },
    {
      title: 'Poliical',
      src: '/C9.png',
      text: "PRO"
    },
  ]

  const options = ["Avatar", "Style", "Character", "Write", "Illustrate", "Publish"]
  
  const [active,setActive] = useState("Style")
  
  return (
    <>
      <nav className="flex flex-wrap gap-4 md:grid grid-cols-3 px-6 py-4 mb-8 text-white items-center">
        {/* Logo and navigation links */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="w-[210px] h-[130px] relative -mb-6 cursor-pointer">
            <img className="w-[202px] absolute" src="/Logo.png" alt="" />
            {/* Text under the logo */}
            <div className="absolute bottom-[24px] right-0 ">
              <div className="text-[30px] font-garet-heavy">inktron</div>
              <div className="text-[17px] font-garet tracking-[10px] -mt-[16px]">comics</div>
            </div>
          </div>
          {/* Navigation link */}
          <a href="" className="text-[24px] font-garet-heavy mr-auto px-6 uppercase">{active}</a>
        </div>

        {/* Navigation links for large screens */}
        <div className="flex gap-[10%] justify-center flex-grow py-4">
          <a href="" className="font-glacial text-[20px]">Mission</a>
          <a href="" className="font-glacial text-[20px]">FAQ</a>
          <a href="" className="font-glacial text-[20px]">Pricing</a>
        </div>

        {/* Pro upgrade button for large screens */}
        <div className="md:flex justify-end gap-4 hidden">
          <div className="flex items-center cursor-pointer">
            <div className="flex flex-col items-center gap-2">
              <p className="text-[23px] font-garet-heavy font-black uppercase tracking-widest leading-6 text-center">
                Upgrade
                <br />
                To Pro
              </p>
              <img className="h-1" src="/YellowDash.png" alt="" />
            </div>
          </div>
          <div className="relative flex items-center justify-center w-[70px] h-[70px] cursor-pointer">
            <img className="h-[70px] absolute" src="/Coin.png" alt="" />
            <p className="z-10 text-[22px] font-glacial text-[#474747] font-semibold">1000</p>
          </div>
          <div className="h-[90px] w-[90px] bg-[#F4BD38] rounded-full p-1 cursor-pointer">
            <img src="/ProfilePicture.png" alt="" />
          </div>
        </div>
      </nav>

      <section
        className="flex flex-col gap-8 md:grid  md:grid-cols-3  justify-between items-center px-6 pt-4"
      >
        {/* Robot and text */}
        <div>
          <div
            className="h-[100px] w-[360px] ml-[60px] -mb-[45px] bg-cover "
            style={{ backgroundImage: "url('Text_Bubble.png')" }}
          >
            <p
              className="text-[22px] px-8 pt-[12px] text-glacial leading-6 font-[400]"
            >
              Click on a style you'd like to learn more about.
            </p>
          </div>
          <img className="w-[80px]" src="/Robot.png" alt="" />
        </div>
        {/* Heading */}
        <div className="text-[30px] text-white uppercase text-center font-glacial tracking-widest cursor-pointer">
          Project Tittle #1
        </div>
        {/* Cards */}
        <div className="flex gap-4 items-center justify-end ">
          {/* Container */}
          <div
            className="w-[105px] h-[110px] flex items-center justify-center cursor-pointer "
            style={{ backgroundImage: "url('/container.svg')" }}
          >
            <img className="h-[80px]" src="/Rocket.png" alt="" />
          </div>
          {/* Container */}
          <div
            className="w-[105px] h-[110px] flex items-center justify-center cursor-pointer"
            style={{ backgroundImage: "url('/container.svg')" }}
          >
            <img className="invert h-[75px]" src="Robot.png" alt="" />
          </div>
          {/* Container */}
          <div
            className="w-[105px] h-[110px] flex items-center justify-center cursor-pointer"
            style={{ backgroundImage: "url('/container.svg')" }}
          >
            <img className="w-[75px]" src="/Pencil.png" alt="" />
          </div>
        </div>
      </section>

      <section className="hidden md:block h-10 w-full  px-6 mb-3 mt-3">
        {/* Populate Options */} 
        <div className="h-full w-full flex ">
          {options.map((option, i) => {
            return (
              <>
                <Menu name={option} isActive={active === option} setActive={setActive} />
                {i !== options.length - 1 && <div className={`w-[40px] h-full flex-grow -mx-[40px] ${i ==options.indexOf(active) || i ==options.indexOf(active)-1  ? "bg-[#F4BD38]" : "bg-[#848484]"} `}></div>}
              </>
            )
          })}
        </div>
      </section>
      <section className="w-full px-4 py-4 ">
        {/* Populate Cards */}
        <div className="flex flex-wrap justify-center">
          {
            cards.map((card) => (
              <Cards title={card.title} src={card.src} text={card.text} />
            ))
          }
        </div>
      </section>
      <section className="relative my-8">
        {/* Populate Extra Art Styles */}
        <div className="absolute w-screen h-ful pt-[40px] pb-[130px] pl-[90px] pr-[55px]">
          <div className="h-full w-full">

            <p className="text-[40px] text-end font-garet-heavy font-black uppercase tracking-wider leading-6 mr-[30px] pt-[22px] pb-[2px] truncate hyphens-auto ">
              Extra Art Style
            </p>
            <div className="flex px-[2.04%] pt-[28px] flex-wrap h-[360px] overflow-hidden justify-center">
              {artStyles.map((style) => (
                <Cards title={style.title} src={style.src} text={style.text} darkbtn={true} />
              ))}
            </div>
          </div>

        </div>
        <img className="w-full h-[590px]" src="/Background_shape.png" alt="" />
      </section>
    </>
  )
}

export default App
