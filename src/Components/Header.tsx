import Logo from "../assets/Univecity-Blue-Horizontal-Logo-1024x188.png";

const Header = () => {
  return (
    <header className="flex justify-center w-full items-center bg-[white] h-[100px] shadow-2xs">
      <div className="flex justify-between items-center w-[85%]">
        <img className="w-[160px] h-[30px]" src={Logo} alt="logo" />
        <div className="w-[60%] bg-[white] text flex justify-center items-center gap-11">
          <div>Courses</div>
          <div>FullStack</div>
          <div>Corporate</div>
          <div>Hire Tech Talents</div>
          <button className="bg-[#60C26A] text-black px-4 py-2 rounded-md shadow-md">
            Browse Courses
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
