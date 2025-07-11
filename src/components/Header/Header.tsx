import {FC} from 'react';

import Navbar from './components/Navbar/Navbar';
import lawyer from '/image/111.png';

const Header: FC = () => {
	return (
		<header className="bg-gradient-to-r from-secondary/60 to-secondary h-[100vh] overflow-hidden" >
			{/*<header className="bg-[url('/image/back-header.png')] bg-cover bg-no-repeat h-[500px] md:h-[700px] lg:h-[100vh] ">*/}
			<Navbar/>
			<div className="flex flex-col md:flex-row items-center md:items-start md:px-12 justify-center">
				<section
					className="text-primary uppercase text-xl md:text-4xl xl:text-6xl font-bold justify-self-start py-3 md:py-16">
					<blockquote className="relative px-8 md:py-8 ">
						<div
							className="text-left">&ldquo;</div>
						<div className="inline-block text-left">
							<cite className="block">Працюю чесно, сумлінно та в інтересах кожного клієнта</cite>
						</div>
						<div
							className="text-right">&rdquo;</div>
					</blockquote>
				</section>
				<div
					className="h-[470px] max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] ">
					<img className="object-cover" src={lawyer} alt="lawyer photo"/>
				</div>
			</div>
		</header>
	);
};

export default Header;
