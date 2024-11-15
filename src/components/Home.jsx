import ClientLogo from "../assets/ClientLogo.png";
import Icon from "../assets/Icon.png";
import Illustration from "../assets/Illustration.svg";

const Home = () => {
  return (
    <div className=' flex flex-col lg:px-[144px]  items-center gap-[40px]'>
      {/* Hero Section */}
      <div
        className='Hero-section  flex items-center lg:gap-[104px]
      '
      >
        <div className='box flex flex-col justify-center items-center lg:gap-[104px] md:gap-[50px] md:flex-row  md:py-[96px] '>
          <div className='frame1 flex flex-col justify-center items-center sm:items-start py-5 md:py-0 gap-5 sm:gap-[32px] '>
            <div className='flex flex-col md:gap-[10px] lg:gap-[16px]'>
              <div className=' text-center sm:text-start text-[10vw] md:items-center md:text-[6vw] lg:text-[64px] font-semibold text-[#4D4D4D] tracking-normal lg:leading-[76px] md:leading-none'>
                Lessons and insights
                <br />
                <span className='text-[#4CAF4F]'>
                  from 8 years
                </span>
              </div>
              <div className='text-[#717171] sm:text-start text-center md:text-[16px] leading-normal sm:leading-[24px] md:px-0 px-5 text-[4vw] '>
                Where to grow your business as a
                photographer: site or social
                media?
              </div>
            </div>

            <button className='btn3 font-medium text-[#F5F7FA] bg-[#4CAF4F] px-4 sm:px-5 sm:py-2 md:px-[32px] md:py-[14px] gap-[10px] items-center py-2 rounded md:text-[16px] text-[3vw] md:leading-[24px]'>
              Register
            </button>
          </div>

          <img
            src={Illustration}
            alt='My Icon'
            className='h-[150px] w-[250px] md:w-[391px] md:h-[407px]'
          />
        </div>
      </div>
      <svg
        width='46'
        height='10'
        viewBox='0 0 46 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='5'
          cy='5'
          r='5'
          fill='#4CAF4F'
        />
        <circle
          opacity='0.3'
          cx='23'
          cy='5'
          r='5'
          fill='#4CAF4F'
        />
        <circle
          opacity='0.3'
          cx='41'
          cy='5'
          r='5'
          fill='#4CAF4F'
        />
      </svg>
      {/* Client Section */}
      <div className='clients flex flex-col justify-center  gap-[16px] items-center text-[#4D4D4D]'>
        <div className='flex flex-col gap-[8px]'>
          <div className='text-[10vw] md:text-[36px] md:leading-[44px] text-center font-semibold'>
            Our Clients
          </div>
          <span className=' text-center px-5 sm:px-0 text-[4vw]  md:text-[16px] md:leading-[24px]'>
            We have been working with some Fortune
            500+ clients
          </span>
        </div>

        <img
          className=' px-2 sm:px-0  h-4  w-auto md:h-[98px] md:w-full'
          src={ClientLogo}
          alt=''
        />
      </div>

      {/* Community Section */}
      <div className='community flex flex-col justify-center items-center text-[#4D4D4D]'>
        <div className='flex flex-col gap-[8px] justify-center items-center'>
          <div className='section-title  font-semibold text-[8vw] leading-none  md:text-[36px] md:leading-[44px] text-center flex flex-col items-center'>
            Manage your entire community <br /> in
            a single system
          </div>
          <div className='description text-[5vw] text-center sm:text-start md:text-[16px] md:leading-[24px] pt-2 '>
            Who is Nextcent suitable for?
          </div>
        </div>

        <div
          className='iconX flex flex-col md:flex-row items-center justify-center 
        py-4 md:py-10 gap-6 sm:gap-10'
        >
          <div className='sub1 gap-3 px-8 md:px-[32px] py-[24px] text-center flex flex-col justify-center items-center md:w-299px'>
            <img
              className=' md:h-[56px] md:w-[65px]'
              src={Icon}
              alt=''
            />
            <div className='text-1 font-bold  md:text-[28px] md:leading-[36px]'>
              Membership <br /> Organisations
            </div>
            <div className='text-2 text-[5vw] md:text-[14px] md:leading-[20px]'>
              Our membership management software
              provides full automation of
              membership renewals and payments
            </div>
          </div>
          <div className='sub1 gap-3 px-8 md:px-[32px] py-[24px] text-center flex flex-col justify-center items-center md:w-299px'>
            <img
              className='  h-[36px] w-[45px]  md:h-[56px] md:w-[65px]'
              src={Icon}
              alt=''
            />
            <div className='text-1    font-bold text-xl md:text-[28px] md:leading-[36px]'>
              National <br /> Associations
            </div>
            <div className='text-2  text-[5vw]  md:text-[14px] md:leading-[20px]'>
              Our membership management software
              provides full automation of
              membership renewals and payments
            </div>
          </div>
          <div className='sub1 gap-3 px-8 md:px-[32px] py-[24px] text-center flex flex-col justify-center items-center md:w-299px'>
            <img
              className=' h-[36px] w-[45px]  md:h-[56px] md:w-[65px]'
              src={Icon}
              alt=''
            />
            <div className='text-1  font-bold text-xl md:text-[28px] md:leading-[36px]'>
              Clubs And <br /> Groups
            </div>
            <div className='text-2 text-[5vw] md:text-[14px] md:leading-[20px]'>
              Our membership management software
              provides full automation of
              membership renewals and payments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
