import { ListLoadCardsLocalStorageType } from '../types/components/CardStorage';
import CardStorage from './CardStorage';

export const ListLoadCardsLocalStorage = ({ values }: ListLoadCardsLocalStorageType) => {
	const { storageCards, setListLoadImage, type } = values;
	return (
		<ul className='list-cards-search-container'>
			{storageCards.map((item, index) => {
				return (
					<li
						className={`
									carousel-item ${'result'}-${type}`}
						key={`${item.movie.id}-${index}`}
					>
						<CardStorage
							values={{
								movie: item.movie,
								type: item.type,
								index,
								title: 'storage',
								genres: item.genres,
								languages: item.languages,
								urlParams: item.urlParams,
								setList: setListLoadImage,
							}}
						/>
					</li>
				);
			})}
		</ul>
	);
};
