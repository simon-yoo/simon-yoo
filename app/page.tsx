import Image from 'next/image'
import { BiLogoJavascript, BiLogoReact, BiLogoNodejs } from 'react-icons/bi'
import { TbBrandTypescript } from 'react-icons/tb'
// import Projects from './Projects'

function Home() {
  return (
    <>
      <div className='flex flex-col xl:flex-row  items-center justify-center text-center'>
        <div className='relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] m-12 shadow-2xl'>
          <Image
            className='rounded-sm bject-cover'
            fill
            src='/images/Y.png'
            alt=''
          />
        </div>
        <div className='flex-col sm:w-[450px] lg:w-[600px] items-center justify-center text-center m-12'>
          <h1 className='uppercase m-4 font-bold text-md md:text-lg'>
            Welcome
          </h1>
          <p className='text-sm md:text-lg mt-4'>
            My journey as a software developer began at Dev Academy, a renowned
            coding Bootcamp that sparked my passion for problem-solving and
            innovative thinking. With a solid foundation in coding, I am driven
            to continuously expand my knowledge and tackle new challenges in the
            dynamic world of software development. I am eager to contribute my
            skills, learn from experienced professionals, and make a meaningful
            impact in the industry. I am excited to connect with like-minded
            individuals and organisations to collaborate, grow, and thrive in
            the world of software development. Let's connect and explore
            opportunities to create innovative solutions together.
          </p>
        </div>
      </div>

      <div className='flex justify-center mb-10 mt-10'>
        <BiLogoNodejs className='skill' size={40} color={'#403d39'} />
        <BiLogoJavascript className='skill' size={40} color={'#403d39'} />
        <BiLogoReact className='skill' size={40} color={'#403d39'} />
        <TbBrandTypescript className='skill' size={40} color={'#403d39'} />
      </div>

      <div className='shadow-2xl'>{/* <Projects /> */}</div>
    </>
  )
}
export default Home
