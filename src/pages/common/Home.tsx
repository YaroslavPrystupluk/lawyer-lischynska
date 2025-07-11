import {FC} from 'react';
import CardMyExpertise from '../../components/CardMyExpertise/CardMyExpertise.tsx';
import StatisticsCount from '../../components/StatisticsCount/StatisticsCount.tsx';

const Home: FC = () => {
	return (
		<>
			<CardMyExpertise/>
			<StatisticsCount/>
		</>
	);
};

export default Home;
