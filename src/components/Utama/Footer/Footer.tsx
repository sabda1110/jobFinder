import { AiFillInstagram, AiFillGithub, AiFillFacebook } from 'react-icons/ai';

const footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>Job</strong> Finder
          </h1>
        </div>

        <p className="text-white pb-[13px] opacity-70 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rerum.
        </p>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>

        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opactiy-[1]">
            About Us
          </li>
          <li className="text-white opacity-[.7] hover:opactiy-[1]">
            Features
          </li>
          <li className="text-white opacity-[.7] hover:opactiy-[1]">News</li>
          <li className="text-white opacity-[.7] hover:opactiy-[1]">FAQ</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Resources
        </span>

        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opactiy-[1]">Account</li>
          <li className="text-white opacity-[.7] hover:opactiy-[1]">
            Support Center
          </li>
          <li className="text-white opacity-[.7] hover:opactiy-[1]">
            Feedback
          </li>
          <li className="text-white opacity-[.7] hover:opactiy-[1]">
            Contact us
          </li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>

        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opactiy-[1]">Events</li>
          <li className="text-white opacity-[.7] hover:opactiy-[1]">Promo</li>
          <li className="text-white opacity-[.7] hover:opactiy-[1]">
            Req Demo
          </li>
          <li className="text-white opacity-[.7] hover:opactiy-[1]">Careers</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact Info
        </span>

        <div className="">
          <small className="text-white text-[14px]">jobfinder@gmail.com</small>
        </div>

        <div className="icons flex gap-4 py-[1rem]">
          <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
          <AiFillGithub className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
          <AiFillFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
        </div>
      </div>
    </div>
  );
};

export default footer;
