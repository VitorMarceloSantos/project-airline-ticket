import { getServerSession } from 'next-auth';
import { authOptions } from './auth';
// import { useSession } from "next-auth/react"

// Server
export async function getCurrentUser() {
	const session = await getServerSession(authOptions);
	return session?.user?.name;
}

// // Client
// export function getCurrentUserClient() {
// 	const { data: session, status } = useSession()
// 	if(status === 'authenticated') {
// 		return session.user
// 	}
// 	return null
// }
