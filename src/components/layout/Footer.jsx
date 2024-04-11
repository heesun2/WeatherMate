import { GoHomeFill } from 'react-icons/go';
import { SiGooglechat } from 'react-icons/si';
import { MdLocationOn } from 'react-icons/md';
import { FaAddressBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="w-full flex text-white min-h-28 rounded-t-3xl items-center justify-center gap-8 bg-slate-100 fixed bottom-0">
        <Link to="/" className="flex flex-col items-center text-primary px-2">
          <GoHomeFill className="text-4xl" />
          <p className="text-nowrap">홈</p>
        </Link>
        <Link to="/community" className="flex flex-col items-center px-2 text-primary">
          <SiGooglechat className="text-4xl" />
          <p className="text-nowrap">커뮤니티</p>
        </Link>
        <Link
          to="/allcities"
          className="flex flex-col items-center px-2 text-primary"
        >
          <MdLocationOn className="text-4xl" />
          <p className="text-nowrap">장소추천</p>
        </Link>
        <Link to="/user" className="flex flex-col items-center px-2 text-primary">
          <FaAddressBook className="text-4xl" />
          <p className="text-nowrap">마이페이지</p>
        </Link>
      </footer>
    </>
  );
}

export default Footer;
