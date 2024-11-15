import frame35 from "../assets/Frame 35.png";
import Counts from "../assets/Counts.png";
import Pana from "../assets/pana.png";
import Image9 from "../assets/image 9.png";
import Frame10 from "../assets/Frame 10.png";
import image18 from "../assets/image 18.png";
import image19 from "../assets/image 19.png";
import image20 from "../assets/image 20.png";
function Body() {
  return (
    <div className='flex flex-col  items-center md:px-[144px] gap-5 md:gap-[48px] justify-between '>
      {/* Unlock Section */}
      <div className='Unlock flex flex-col sm:flex-row  justify-center items-center '>
        <img
          className='object-cover md:h-[433px] md:w-[442px]'
          src={frame35}
          alt='frame35'
        />
        <div className='frame6 lg:px-20 flex gap-6 flex-col sm:items-start items-center'>
          <div className='text-[8vw] px-2 sm:px-0 text-center sm:text-start  sm:text-3xl items-start font-semibold text-[#4D4D4D] md:leading-[44px] md:text-[36px]  '>
            The unseen of spending three years at
            Pixelgrade
          </div>
          <div className='text-[#717171]  text-center px-3 sm:px-0 text-[5vw] sm:text-start  sm:text-[14px] sm:leading-[20px] '>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam
            vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem
            sed porta. Nullam mattis tristique
            iaculis. Nullam pulvinar sit amet
            risus pretium auctor. Etiam quis massa
            pulvinar, aliquam quam vitae, tempus
            sem. Donec elementum pulvinar odio.
          </div>
          <button className='btn3 font-medium text-[#F5F7FA] bg-[#4CAF4F] px-4 sm:px-5 sm:py-2 md:px-[32px] md:py-[14px] gap-[10px]  items-center py-2 rounded md:text-[16px] text-[3vw] md:leading-[24px]'>
            Learn More
          </button>
        </div>
      </div>

      {/* Additional Sections */}
      <div className='Achievements flex flex-col sm:flex-row py-[64px] gap-4 items-center  justify-between '>
        <div className='section-heading md:w-[540px] flex flex-col gap-[8px]  '>
          <div className=' text-[#717171] text-[10vw] text-center sm:text-start sm:text-3xl  md:text-[36px] md:leading-[44px] font-semibold sub-heading'>
            Helping a local <br />{" "}
            <span className=' text-[#4CAF4F]'>
              business reinvent itself
            </span>
          </div>
          <div className=' text-[#18191F] text-[5vw] text-center sm:text-start sm:text-[14px] md:text-[18px] md:leading-[24px] sub-heading-2'>
            We reached here with our hard work and
            dedication
          </div>
        </div>
        <div className=''>
          <img
            className='object-cover h-full w-auto max:h-[160px] max:w-[540px]'
            src={Counts}
            alt=''
          />
        </div>
      </div>
      <div className='Calender  '>
        <div className=' flex md:flex-row flex-col justify-center items-center'>
          <img
            className='  h-[411.4] w-[421.53]  md:h-[433.4] md:w-[441.53] object-cover'
            src={Pana}
            alt='frame35'
          />
          <div className='frame6 px-0 lg:px-28  flex  gap-4 sm:gap-[32px] flex-col items-center  sm:items-start'>
            <div className='text-center sm:text-start px-2 sm:px-0  font-semibold text-[#4D4D4D] text-[8vw] sm:text-[36px] md:leading-[44px] '>
              How to design your site footer like
              we did
            </div>
            <div className='text-[#717171] text-center sm:text-start text-[5vw] sm:text-[14px] md:leading-[20px] px-2 sm:px-0'>
              Donec a eros justo. Fusce egestas
              tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa
              nunc varius arcu, at scelerisque
              elit erat a magna. Donec quis erat
              at libero ultrices mollis. In hac
              habitasse platea dictumst. Vivamus
              vehicula leo dui, at porta nisi
              facilisis finibus. In euismod augue
              vitae nisi ultricies, non aliquet
              urna tincidunt. Integer in nisi eget
              nulla commodo faucibus efficitur
              quis massa. Praesent felis est,
              finibus et nisi ac, hendrerit
              venenatis libero. Donec consectetur
              faucibus ipsum id gravida.
            </div>
            <button className='btn3 font-medium text-[#F5F7FA] bg-[#4CAF4F] px-4 sm:px-5 sm:py-2 md:px-[32px] md:py-[14px] gap-[10px] items-center py-2 rounded md:text-[16px] text-[3vw] md:leading-[24px]'>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className='Customers   '>
        <div className=' flex flex-col md:flex-row md:gap-[78px] place items-center'>
          <img
            className='object-cover  h-[411.4] w-[421.53]  md:h-[433.4] md:w-[441.53] '
            src={Image9}
            alt='frame35'
          />
          <div className='frame6 flex gap-4 md:gap-[32px] flex-col items-center sm:items-start'>
            <div className='  text-[5vw] px-2 sm:px-0 sm:text-[14px] md:leading-[20px] text-[#4D4D4D]  '>
              Maecenas dignissim justo eget nulla
              rutrum molestie. Maecenas lobortis
              sem dui, vel rutrum risus tincidunt
              ullamcorper. Proin eu enim metus.
              Vivamus sed libero ornare, tristique
              quam in, gravida enim. Nullam ut
              molestie arcu, at hendrerit elit.
              Morbi laoreet elit at ligula
              molestie, nec molestie mi blandit.
              Suspendisse cursus tellus sed augue
              ultrices, quis tristique nulla
              sodales. Suspendisse eget lorem eu
              turpis vestibulum pretium.
              Suspendisse potenti. Quisque
              malesuada enim sapien, vitae
              placerat ante feugiat eget. Quisque
              vulputate odio neque, eget efficitur
              libero condimentum id. Curabitur id
              nibh id sem dignissim finibus ac sit
              amet magna.
            </div>
            <div className='text-[#4CAF4F] text-[6vw]  md:text-[20px] font-semibold md:leading-[28px]'>
              Tim Smith
            </div>
            <div className='text-[#717171] text-center text-[6vw] px-2 sm:px-0 sm:text-[16px] md:leading-[24px] '>
              British Dragon Boat Racing
              Association
            </div>
            <div className='frame-14 flex flex-col sm:flex-row justify-between sm:items-center gap-5 sm:gap-8'>
              <img
                src={Frame10}
                className='md:h-10 h-4 px-2 w-auto'
                alt=''
              />
              <div className='meet text-center sm:text-start  text-[6vw] md:text-[20px] font-semibold md:leading-[28px] text-[#4CAF4F]'>
                Meet all customers
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='Community-updates  flex md:px-[144px] flex-col justify-center  gap-6 items-center'>
        <div className='community gap-[8px] px-10 md:px-0 flex flex-col justify-center items-center  '>
          <div className='section-title-x text-[#4D4D4D] text-center sm:text-start text-[6.5vw] font-semibold  md:text-[36px] md:leading-[44px]'>
            Caring is the new marketing
          </div>
          <div className='descripton-x sm:px-0 px-10 text-[5vw]  sm:text-[16px] md:leading-[24px] text-[#717171] text-center'>
            The Nexcent blog is the best place to
            read about the latest membership
            insights,
            <br /> trends and more. See who's
            joining the community, read about how
            our community <br />
            are increasing their membership income
            and lot's more.​
          </div>
        </div>
        <div className='frame-15 flex flex-col md:flex-row   gap-4 sm:gap-1'>
          <div className='1 grid space-x-6  -space-y-20  grid-rows-1 sm:grid-rows-2  '>
            <img
              className=' md:h-[286px]  md:max-w-[368px]  object-cover'
              src={image18}
              alt=''
            />
            <div className='  md:h-[176px] max-w-[317px] rounded text-[5.5vw] content bg-slate-200 flex  gap-[16px] flex-col md:p-[16px] justify-center items-center text-center'>
              <div className='text px-16 sm:px-0 font-semibold text-[5.5vw] md:text-[20px] md:leading-[28px]'>
                Creating Streamlined Safeguarding
                Processes with OneRen
              </div>
              <div className='des text-[4.5vw] font-semibold md:text-[20px] md:leading-[28px]  text-[#4CAF4F]'>
                Readmore
              </div>
            </div>
          </div>
          <div className='2 grid space-x-6  -space-y-20 grid-rows-1 sm:grid-rows-2  '>
            <img
              className='md:h-[286px] max-w-[368px] object-cover'
              src={image19}
              alt=''
            />
            <div className='sm:h-[176px] max-w-[317px] rounded top-48 text-[5.5vw] content bg-slate-200 flex  gap-[16px] flex-col md:p-[16px] justify-center items-center text-center'>
              <div className='text px-16 sm:px-0 font-semibold  md:text-[20px] md:leading-[28px] '>
                What are your safeguarding
                responsibilities and how can you
                manage them?
              </div>
              <div className='des font-semibold md:text-[20px] md:leading-[28px] text-[4.5vw] text-[#4CAF4F]'>
                Readmore
              </div>
            </div>
          </div>
          <div className='3 grid space-x-6  -space-y-20  grid-rows-1 sm:grid-rows-2  '>
            <img
              className='h-[286px] max-w-[368px] object-cover'
              src={image20}
              alt=''
            />
            <div className=' rounded sm:h-[176px] max-w-[317px] content bg-slate-200 flex  gap-[16px] flex-col md:p-[16px]  justify-center items-center  text-center  '>
              <div className='text px-16 sm:px-0 font-semibold text-[5.5vw] md:text-[20px] md:leading-[28px] '>
                Revamping the Membership Model
                with Triathlon Australia
              </div>
              <div className='des font-semibold md:text-[20px] md:leading-[28px] text-[4.5vw]  text-[#4CAF4F]'>
                Readmore
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
