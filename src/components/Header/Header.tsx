import {FC} from 'react';

import Navbar from './components/Navbar/Navbar';
import lawyer from '/image/lawyer.webp';

const Header: FC = () => {
	return (
		<header className="bg-gradient-to-r from-secondary/60 to-secondary">
			{/*<header className="bg-[url('/image/back-header.png')] bg-cover bg-no-repeat h-[500px] md:h-[700px] lg:h-[100vh] ">*/}
			<Navbar/>
			<div className="flex flex-col md:flex-row items-center md:items-start px-12 justify-center">
				<section
					className="text-primary uppercase text-xl sm:text-2xl md:text-4xl xl:text-6xl font-bold justify-self-start py-16">
					<blockquote className="relative px-8 py-8 ">
						<div
							className="text-xl sm:text-2xl md:text-4xl xl:text-6xl font-bold text-left">&ldquo;</div>
						<div className="inline-block text-left">
							<cite className="block">Працюю чесно, сумлінно та в інтересах кожного клієнта</cite>
						</div>
						<div
							className="text-xl sm:text-2xl md:text-4xl xl:text-6xl font-bold text-right">&rdquo;</div>
					</blockquote>
				</section>
				
				
				<div
					className="h-[470px] max-w-[400px] sm:max-w-[500px] lg:h-[100vh] lg:max-w-[600px] overflow-hidden">
					<img className="object-cover" src={lawyer} alt="lawyer photo"/>
				</div>
			</div>
		</header>
	);
};

export default Header;
