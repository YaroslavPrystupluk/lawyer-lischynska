import {FC} from 'react';
import CountUp from 'react-countup';

const StatisticsCount: FC = () => {
	return (
		<section className='bg-primary/15 h-[200px] w-full my-16'>
			<div className="bg-[url('/images/statistics.png')]">
			<CountUp className='px-6' end={100} duration={5} separator=" "/>
			<span>|</span>
			<CountUp className='px-6' end={200} duration={5} separator=" "/>
			</div>
		// </section>
	);
};
export default StatisticsCount
