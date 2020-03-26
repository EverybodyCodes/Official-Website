import { Link } from 'gatsby';
import React, { useState } from 'react';
import EcLogoImage from './ec-logo';
import '../styles/app.css';

const imgStyle = { marginRight: '1.45rem', width: '100px', overflow: 'hidden', borderRadius: '5%' };

const Header = (props: any) => {

  const [expanded, toggleOpen] = useState(false)


  return (
    <>

      <nav className="flex items-center justify-between flex-wrap bg-green-500 p-3 text-xl">
        <div className="flex items-center flex-shrink-0 text-white mr-6">

          <Link to='/'>
            <div style={imgStyle} >
              <EcLogoImage />
            </div>
          </Link>

        <div>
          <h1 className="m-auto font-bold text-xl sm:text-3xl lg:text-4xl tracking-wide">Everybody Codes!</h1>
        </div>

        </div>
        <div className="my-8 block lg:hidden" onClick={() => toggleOpen(!expanded)}>
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>


        
          {/* // expanded && */}
          <div className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto"}>
            <div className="text-sm lg:flex-grow">
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Docs
            </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Examples
            </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Blog
            </a>
            </div>
            <div>
              <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">♥️&nbsp; Donate &nbsp; ♥️</a>
            </div>
          </div>
        

      </nav>

    </>
  );

}

export default Header;
