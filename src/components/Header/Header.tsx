import {FC} from 'react';

import Navbar from './components/Navbar/Navbar';
// import lawyer from "/image/lawyer.webp";

const Header: FC = () => {
	return (
		// <header className="bg-gradient-to-r from-secondary/60 to-secondary">
		<header className="bg-[url(/image/back-header.png)] bg-cover bg-no-repeat">
			<Navbar/>
			{/* <div className="grid grid-flow-row sm:grid-flow-col"> */}
			{/* <div className="flex flex-col items-center sm:pl-12 justify-center flex-shrink-"> */}
			<section className="text-primary uppercase text-4xl sm:text-5xl lg:text-6xl font-bold">
				<div className="container">
					<div className="xl:w-1/2 lg:w-3/4 w-full text-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
						     className="inline-block w-8 h-8 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
							<path
								d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
						</svg>
						<p>Репутація,</p>
						<p>повага,</p>
						<p>результат</p>
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
						     className="inline-block w-8 h-8 text-gray-400 mt-4" viewBox="0 0 975.036 975.036">
							<path
								d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
						</svg>
					</div>
				</div>
			</section>
			{/*<p className="relative text-4xl sm:text-5xl lg:text-6xl font-bold text-primary uppercase">*/}
			{/*  <span className="before:content-['\201c'] before:absolute before:top-[-15px] sm:before:top-[-25px] before:left-[-30px] before:text-primary before:text-4xl sm:before:text-5xl lg:before:text-6xl">*/}
			{/*    Репутація,*/}
			{/*  </span>*/}
			{/*</p>*/}
			{/*<p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary uppercase">*/}
			{/*  повага,*/}
			{/*</p>*/}
			{/*<p className="relative text-4xl sm:text-5xl lg:text-6xl font-bold text-primary uppercase">*/}
			{/*  <span className="after:content-['\201d'] after:absolute after:bottom-[-35px] sm:after:bottom-[-50px] after:right-[-30px] after:text-primary after:text-4xl sm:after:text-5xl lg:after:text-6xl">*/}
			{/*    результат*/}
			{/*  </span>*/}
			{/*</p>*/}
			{/* </div> */}
			<div
				className="h-[470px] max-w-[400px] sm:h-[600px] sm:max-w-[500px] lg:h-[700px] lg:max-w-[600px] overflow-hidden justify-self-center">
				{/* <img className="max-w-full" src={lawyer} alt="lawyer photo" /> */}
			</div>
			{/* </div> */}
		</header>
	);
};

export default Header;
