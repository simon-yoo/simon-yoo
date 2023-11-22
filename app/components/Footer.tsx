import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineGithub,
} from 'react-icons/ai'

function Footer() {
  return (
    <>
      <div className='w-full'>
        <hr className='m-12' />
      </div>
      <div className='flex justify-center items-center'>
        <hr />
        <div className='flex justify-center w-full'>
          <a
            className='relative p-12 w-[100px] h-[100px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 card group'
            href='https://www.instagram.com/simonshyoo/'
          >
            <div className='opacity-100 absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-100 delay-200 z-20 group-hover:opacity-0'>
              <AiOutlineInstagram size={30} color={'#424445'} />
            </div>
            <div className='opacity-0 absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-300 delay-200 z-10 group-hover:opacity-100 card-back uppercase'>
              Instagram
            </div>
          </a>

          <a
            className='relative p-12 w-[100px] h-[100px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 card group'
            href='https://www.linkedin.com/in/simon-yoo-12b078183/'
          >
            <div className='opacity-100 absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-100 delay-200 z-20 group-hover:opacity-0'>
              <AiOutlineLinkedin size={30} color={'#424445'} />
            </div>
            <div className='opacity-0 absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-300 delay-200 z-10 group-hover:opacity-100 card-back uppercase'>
              LinkedIn
            </div>
          </a>

          <a
            className='relative p-12 w-[100px] h-[100px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 card group'
            href='https://github.com/simon-yoo'
          >
            <div className='opacity-100 absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-100 delay-200 z-20 group-hover:opacity-0'>
              <AiOutlineGithub size={30} color={'#424445'} />
            </div>
            <div className='opacity-0 absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-300 delay-200 z-10 group-hover:opacity-100 card-back uppercase'>
              Github
            </div>
          </a>
          <a
            className='relative p-12 w-[100px] h-[100px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 card group'
            href='https://www.facebook.com/yoosghn0'
          >
            <div className='opacity-100 absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-100 delay-200 z-20 group-hover:opacity-0'>
              <AiOutlineFacebook size={30} color={'#424445'} />
            </div>
            <div className='opacity-0 absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-300 delay-200 z-10 group-hover:opacity-100 card-back uppercase'>
              Facebook
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
