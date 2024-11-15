import Nextcent from "../assets/NextCent logo.png";
const Frame36 = () => {
  return (
    <div className='flex justify-center py-5 md:py-0  md:h-[84px] frame36  items-center gap-10 md:gap-6 lg:gap-[167px]   '>
      <img
        className='h-[6vw] md:max-w-[154px] md:max-h-[24px] '
        src={Nextcent}
        alt='Logo'
      />
      <div className='hidden md:flex font-medium lg:text-[16px] lg:leading-[24px] text-[2vw] md:text-sm  frame2228  md:gap-[20px]  text-[#32385c] lg:gap-[50px]'>
        <a href='#'>Home</a>
        <a href='#'>Service</a>
        <a href='#'>Feature</a>
        <a href='#'>Testimonial</a>
        <a href='#'>FAQ</a>
      </div>
      <div className='login rounded flex  gap-2 lg:gap-[14px]'>
        <button className='btn1 text-[3.5vw] md:text-[14px] px-3 py-2 sm:px-5 sm:py-2 md:px-[20px] md:py-[10px] font-medium   bg-[#F5F7FA] rounded  text-[#4CAF4F]'>
          Login
        </button>
        <button className='btn1 text-[3.5vw] md:text-[14px] px-3 py-2 sm:px-5 sm:py-2 md:px-[20px] md:py-[10px] font-medium text-center text-[#F5F7FA] rounded bg-[#4CAF4F]'>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Frame36;
