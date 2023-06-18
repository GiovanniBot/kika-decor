import { Roboto } from 'next/font/google';
import Image from 'next/image'
import HeroButton from './components/Button/HeroButton'
import Link from 'next/link';
import { themes } from './data';

const topFiveThemes = themes.filter((theme) => theme.topFive);
const newThemes = themes.filter((theme) => theme.newTheme);

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"] });


export default function Home() {
  return (
    <main>
      <section className='home-hero grid grid-cols-12'>
        <div className='col-start-2 col-end-8 lg:col-start-3 lg:col-end-7 mt-3 md:mt-7 lg:mt-12'>
          <span className="text-white text-[30px] md:text-[60px] lg:text-[90px] leading-none font-bold">
            Seu Evento Bombando Sempre!
          </span>
          <span className='hidden md:inline-block text-slate-400 text-lg mt-9 lg:mt-14 pe-28'>
            Com a Kika Decora você encontra os mais diversos temas para tornar sua festa única e incrível.
          </span>
          <div className='pt-9 lg:pt-14'>
            <HeroButton>
              Encontrar temas
            </HeroButton>
          </div>
        </div>

        <div className='col-start-8 col-span-12'>
          <div className='mt-1 md:mt-4'>
            <Image 
              src="/calendar.svg"
              alt="Illustration of a man dancing and a calendar."
              width={500}
              height={500}
            />
          </div>
        </div>

        <span className='inline-block md:hidden col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 text-slate-300 text-sm text-center mt-6'>
          Com a Kika Decora você encontra os mais diversos temas para tornar sua festa única e incrível.
        </span>
        <span className={`${roboto.className} hidden md:inline-block col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 text-white text-sm lg:text-xl uppercase mt-11 ms-2`}>
          Featured on
        </span>
        <div className='col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 mt-7 md:mt-3 mb-2 md:mb-2 bg-[#000235]'>
          <div className={`${roboto.className} bg-[#4d4385] rounded-md py-3 lg:py-4 flex justify-around text-slate-300 text-xs md:text-sm lg:text-lg mb-0`}>
            <span>Painéis Temáticos</span>
            <span>Móveis Provençais</span>
            <span className='hidden md:inline-block'>Trio de Cilindros e Mesaninos</span>
            <span>Painel Redondo</span>
          </div>
        </div>
      
        <div className='col-start-1 col-span-12 svg-wrap'>
          <svg width="auto" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1" className='md:hidden svg-mobile'>
            <g className="layer">
              <path d="m0,124l7.5,-1.5c7.5,-1.5 22.5,-4.5 37.5,-7.8c15,-3.4 30,-7 45,-10.7c15,-3.7 30,-7.3 45,-3.2c15,4.2 30,16.2 45,16.7c15,0.5 30,-10.5 45,-14.3c15,-3.9 30,-0.5 45,-0.4c15,0.2 30,-2.8 45,1.4c15,4.1 30,15.5 45,19.3c15,3.8 30,0.2 45,-3c15,-3.2 30,-5.8 37.5,-7.2l7.5,-1.3l0,-112l-7.5,0c-7.5,0 -22.5,0 -37.5,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -37.5,0l-7.5,0l0,124z" fill="#4d4385" id="svg_2"/>
              <path d="m0,96l7.5,-0.5c7.5,-0.5 22.5,-1.5 37.5,-5.8c15,-4.4 30,-12 45,-14.5c15,-2.5 30,0.1 45,-0.2c15,-0.3 30,-3.7 45,0.2c15,3.8 30,14.8 45,15.8c15,1 30,-8 45,-8.5c15,-0.5 30,7.5 45,9c15,1.5 30,-3.5 45,-7.3c15,-3.9 30,-6.5 45,-6.5c15,0 30,2.6 37.5,4l7.5,1.3l0,-83l-7.5,0c-7.5,0 -22.5,0 -37.5,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -37.5,0l-7.5,0l0,96z" fill="#322e69" id="svg_3"/>
              <path d="m0,55l7.5,1.3c7.5,1.4 22.5,4 37.5,5c15,1 30,0.4 45,-1.8c15,-2.2 30,-5.8 45,-4.2c15,1.7 30,8.7 45,13.5c15,4.9 30,7.5 45,4c15,-3.5 30,-13.1 45,-17.6c15,-4.5 30,-3.9 45,-3.2c15,0.7 30,1.3 45,2.8c15,1.5 30,3.9 45,5.5c15,1.7 30,2.7 37.5,3.2l7.5,0.5l0,-64l-7.5,0c-7.5,0 -22.5,0 -37.5,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -37.5,0l-7.5,0l0,55z" fill="#171a4f" id="svg_4"/>
              <path d="m0,35l7.5,0.8c7.5,0.9 22.5,2.5 37.5,1.2c15,-1.3 30,-5.7 45,-4.5c15,1.2 30,7.8 45,9c15,1.2 30,-3.2 45,-6.7c15,-3.5 30,-6.1 45,-6c15,0.2 30,3.2 45,6.7c15,3.5 30,7.5 45,6.8c15,-0.6 30,-6 45,-5.6c15,0.3 30,6.3 45,8.6c15,2.4 30,1 37.5,0.4l7.5,-0.7l0,-45l-7.5,0c-7.5,0 -22.5,0 -37.5,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -45,0c-15,0 -30,0 -37.5,0l-7.5,0l0,35z" fill="#000235" id="svg_5"/>
            </g>
          </svg>
          <svg width="auto" height="170" xmlns="http://www.w3.org/2000/svg" version="1.1" className='hidden md:inline-block'>
            <g className="layer">
              <rect fill="#fff" height="170" id="svg_1" width="4000" x="0" y="0"/>
              <path d="m0,161l31.7,0.5c31.6,0.5 95,1.5 158.5,-8.3c63.5,-9.9 127.1,-30.5 190.6,-32.9c63.5,-2.3 126.9,13.7 190.4,18.7c63.5,5 127.1,-1 190.6,-5.2c63.5,-4.1 126.9,-6.5 190.4,-1c63.5,5.5 127.1,18.9 190.6,21.7c63.5,2.8 126.9,-4.8 190.4,-14.8c63.5,-10 127.1,-22.4 190.6,-22.7c63.5,-0.3 126.9,11.3 190.4,11.7c63.5,0.3 127.1,-10.7 190.6,-15.4c63.5,-4.6 126.9,-3 190.4,2.7c63.5,5.7 127.1,15.3 190.6,23.3c63.5,8 126.9,14.4 190.4,10.5c63.5,-3.8 127.1,-17.8 190.6,-22.3c63.5,-4.5 126.9,0.5 190.4,8.2c63.5,7.6 127.1,18 190.6,14.5c63.5,-3.5 126.9,-20.9 190.4,-23.4c63.5,-2.5 127.1,9.9 190.6,11.9c63.5,2 126.9,-6.4 190.4,-10.9c63.5,-4.5 127.1,-5.1 190.6,-5.1c63.5,0 126.9,0.6 158.5,1l31.7,0.3l0,-124l-31.7,0c-31.6,0 -95,0 -158.5,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -158.5,0l-31.7,0l0,161z" fill="#4d4385" id="svg_2"/>
              <path d="m0,112l31.7,2c31.6,2 95,6 158.5,7.5c63.5,1.5 127.1,0.5 190.6,-6.2c63.5,-6.6 126.9,-19 190.4,-18.3c63.5,0.7 127.1,14.3 190.6,18.5c63.5,4.2 126.9,-1.2 190.4,-7.3c63.5,-6.2 127.1,-13.2 190.6,-17.2c63.5,-4 126.9,-5 190.4,-6.2c63.5,-1.1 127.1,-2.5 190.6,1.9c63.5,4.3 126.9,14.3 190.4,14.5c63.5,0.1 127.1,-9.5 190.6,-14.2c63.5,-4.7 126.9,-4.3 190.4,-3.3c63.5,1 127.1,2.6 190.6,3.3c63.5,0.7 126.9,0.3 190.4,6.5c63.5,6.2 127.1,18.8 190.6,24.3c63.5,5.5 126.9,3.9 190.4,2.4c63.5,-1.5 127.1,-2.9 190.6,-7.2c63.5,-4.3 126.9,-11.7 190.4,-17.5c63.5,-5.8 127.1,-10.2 190.6,-11.3c63.5,-1.2 126.9,0.8 190.4,8.6c63.5,7.9 127.1,21.5 190.6,23.2c63.5,1.7 126.9,-8.7 158.5,-13.8l31.7,-5.2l0,-97l-31.7,0c-31.6,0 -95,0 -158.5,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -158.5,0l-31.7,0l0,112z" fill="#393370" id="svg_3"/>
              <path d="m0,65l31.7,0.3c31.6,0.4 95,1 158.5,3.2c63.5,2.2 127.1,5.8 190.6,11.2c63.5,5.3 126.9,12.3 190.4,15.1c63.5,2.9 127.1,1.5 190.6,-4.6c63.5,-6.2 126.9,-17.2 190.4,-15.4c63.5,1.9 127.1,16.5 190.6,17.2c63.5,0.7 126.9,-12.7 190.4,-13c63.5,-0.3 127.1,12.3 190.6,14.7c63.5,2.3 126.9,-5.7 190.4,-8.5c63.5,-2.9 127.1,-0.5 190.6,-1.9c63.5,-1.3 126.9,-6.3 190.4,-10.8c63.5,-4.5 127.1,-8.5 190.6,-5.3c63.5,3.1 126.9,13.5 190.4,19c63.5,5.5 127.1,6.1 190.6,4.8c63.5,-1.3 126.9,-4.7 190.4,-4.2c63.5,0.5 127.1,4.9 190.6,3.2c63.5,-1.7 126.9,-9.3 190.4,-9c63.5,0.3 127.1,8.7 190.6,9.5c63.5,0.8 126.9,-5.8 190.4,-6.7c63.5,-0.8 127.1,4.2 190.6,8.2c63.5,4 126.9,7 158.5,8.5l31.7,1.5l0,-102l-31.7,0c-31.6,0 -95,0 -158.5,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -158.5,0l-31.7,0l0,65z" fill="#25245c" id="svg_4"/>
              <path d="m0,60l31.7,1.2c31.6,1.1 95,3.5 158.5,1.8c63.5,-1.7 127.1,-7.3 190.6,-11.2c63.5,-3.8 126.9,-5.8 190.4,-3.3c63.5,2.5 127.1,9.5 190.6,12c63.5,2.5 126.9,0.5 190.4,-2.7c63.5,-3.1 127.1,-7.5 190.6,-10.5c63.5,-3 126.9,-4.6 190.4,-1.8c63.5,2.8 127.1,10.2 190.6,12.5c63.5,2.3 126.9,-0.3 190.4,-0.7c63.5,-0.3 127.1,1.7 190.6,4.5c63.5,2.9 126.9,6.5 190.4,2.9c63.5,-3.7 127.1,-14.7 190.6,-18.4c63.5,-3.6 126.9,0 190.4,0.5c63.5,0.5 127.1,-2.1 190.6,-3c63.5,-0.8 126.9,0.2 190.4,0.7c63.5,0.5 127.1,0.5 190.6,-0.2c63.5,-0.6 126.9,-2 190.4,-2.5c63.5,-0.5 127.1,-0.1 190.6,5.7c63.5,5.8 126.9,17.2 190.4,20c63.5,2.8 127.1,-2.8 190.6,-8.5c63.5,-5.7 126.9,-11.3 158.5,-14.2l31.7,-2.8l0,-42l-31.7,0c-31.6,0 -95,0 -158.5,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -158.5,0l-31.7,0l0,60z" fill="#101648" id="svg_5"/>
              <path d="m0,19l31.7,4.8c31.6,4.9 95,14.5 158.5,18.4c63.5,3.8 127.1,1.8 190.6,1.3c63.5,-0.5 126.9,0.5 190.4,0.3c63.5,-0.1 127.1,-1.5 190.6,-5.1c63.5,-3.7 126.9,-9.7 190.4,-11.7c63.5,-2 127.1,0 190.6,2.8c63.5,2.9 126.9,6.5 190.4,5.9c63.5,-0.7 127.1,-5.7 190.6,-9.5c63.5,-3.9 126.9,-6.5 190.4,-5.4c63.5,1.2 127.1,6.2 190.6,10.9c63.5,4.6 126.9,9 190.4,11c63.5,2 127.1,1.6 190.6,-2.5c63.5,-4.2 126.9,-12.2 190.4,-14.4c63.5,-2.1 127.1,1.5 190.6,3.9c63.5,2.3 126.9,3.3 190.4,3.3c63.5,0 127.1,-1 190.6,1.3c63.5,2.4 126.9,8 190.4,5.7c63.5,-2.3 127.1,-12.7 190.6,-15.7c63.5,-3 126.9,1.4 190.4,2c63.5,0.7 127.1,-2.3 190.6,0.5c63.5,2.9 126.9,11.5 158.5,15.9l31.7,4.3l0,-47l-31.7,0c-31.6,0 -95,0 -158.5,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -190.4,0c-63.5,0 -127.1,0 -190.6,0c-63.5,0 -126.9,0 -158.5,0l-31.7,0l0,19z" fill="#000235" id="svg_6"/>
            </g>
          </svg>
        </div>
      </section>

      <section className='mt-40 md:mt-6 grid grid-cols-12'>
        <div className='col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 flex justify-between mb-3'>
          <span className='col-start-2 col-span-2 font-bold text-lg lg:text-2xl'>
            Top 5
          </span>
          <Link href="/themes" className='font-normal text-sm lg:text-lg text-slate-500 underline'>
            Ver Todos
          </Link>
        </div>

        <div className='media-scroller col-start-1 col-end-13 w-full whitespace-nowrap md:pl-16 lg:pl-0 lg:justify-center auto-cols-[39%] lg:auto-cols-[14%]'>

          {topFiveThemes.map((theme) => (
            <Link key={theme.id} href="/themes">
              <div className='media-element'>
                <Image
                  src={theme.mainImg}
                  alt={theme.name}
                  width={150}
                  height={150}
                />

                <p className='text-xs md:text-lg ms-2'>
                  {theme.name}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </section>

      <section className='mt-6 lg:mt-20 grid grid-cols-12'>
        <div className='col-start-2 col-span-10 lg:col-start-3 lg:col-span-8 flex justify-between mb-3'>
          <span className='col-start-2 col-span-2 font-bold text-lg lg:text-2xl'>
            Novidades
          </span>
          <Link href="/themes" className='font-normal text-sm lg:text-lg text-slate-500 underline'>
            Ver Todos
          </Link>
        </div>

        <div className='media-scroller col-start-1 col-end-13 w-full whitespace-nowrap md:pl-16 lg:pl-0 lg:justify-center auto-cols-[39%] lg:auto-cols-[14%]'>

          {newThemes.map((theme) => (
            <Link key={theme.id} href="/themes">
              <div className='media-element'>
                <Image
                  src={theme.mainImg}
                  alt={theme.name}
                  width={150}
                  height={150}
                />

                <p className='text-xs md:text-lg ms-2'>
                  {theme.name}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </section>

      <section className='mt-12 lg:mt-24 grid grid-cols-12'>
        <p className='col-start-2 lg:col-start-3 col-span-8 font-bold text-lg lg:text-2xl mb-3 lg:mb-6'>
          Onde você pode nos encontrar
        </p>

        <div className='col-start-2 lg:col-start-3 col-span-10 lg:col-span-8 flex flex-wrap md:flex-row'>
          <div className='basis-full md:basis-3/5 mb-3'>
            <Image
              className='w-full'
              src="/maps.png"
              alt="Mapa"
              width={500}
              height={500}
            />
          </div>
          <div className='basis-full md:basis-2/5 md:pl-6 lg:text-xl lg:mt-3'>
            <p><strong>Local:</strong> Rua exemplo, Madre de deus, n 1369.</p>
            <p><strong>WhatsApp:</strong> (71) 9XXXX-XXXX</p>
            <p><strong>E-mail:</strong> exemplo@exemplo.com</p>
            <p><strong>Instagram:</strong> @kika_mini_decora</p>
          </div>
        </div>
      </section>
    </main>
  )
}