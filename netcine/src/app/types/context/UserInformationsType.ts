export type UserInfomationsType = {
	email: string;
	name: string;
}

export type UserInformationsContextType = {
	stateUserInformations: UserInfomationsType;
	handleStateUserInformations: (newInformations: UserInfomationsType) => void 
};