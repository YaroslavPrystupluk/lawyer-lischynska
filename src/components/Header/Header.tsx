import {FC} from 'react';

import Navbar from './components/Navbar/Navbar';
import lawyer from '/image/lawyer.webp';

const Header: FC = () => {
	return (
		<header className="bg-gradient-to-r from-secondary/60 to-secondary lg:h-[100vh]">
			{/*<header className="bg-[url('/image/back-header.png')] bg-cover bg-no-repeat h-[500px] md:h-[700px] lg:h-[100vh] ">*/}
			<Navbar/>
				<div className="flex flex-col md:flex-row items-center pl-12 md:px-12 justify-center">
					<section className="text-primary uppercase text-xl sm:text-2xl md:text-4xl xl:text-6xl font-bold grow basis-1/3" >
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
					
				</div>
				<div
					className="h-[470px] max-w-[400px] sm:h-[600px] sm:max-w-[500px] lg:h-[700px] lg:max-w-[600px] overflow-hidden justify-self-center grow-0 basis-2/3">
					<img className="max-w-full" src={lawyer} alt="lawyer photo"/>
				</div>
		</header>
	);
};

export default Header;
