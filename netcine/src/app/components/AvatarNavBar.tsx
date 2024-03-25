import { getCharNameUser } from '@/app/functions/navbar/getCharNameUser';
import { getCurrentUser } from '@/app/lib/session';

export const AvatarNavBar = async () => {
	const userName = await getCurrentUser();

	return (
		<section className='avatar-navbar'>
			<span className='avatar-navbar-text'>{getCharNameUser(userName as string)}</span>
		</section>
	);
};
