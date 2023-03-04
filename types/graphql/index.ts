// Leagues

export interface ICreateDivision {
	_id: string;
	name: string;
}

export interface IJoinDivision {
	_id: string;
	name: string;
}

export interface DivisionQlResult {
	createDivision: ICreateDivision;
}

export interface JoinDivisionQlResult {
	joinDivision: ICreateDivision;
}

// Users

export interface IUser {
	id: string;
	email: string;
}

export interface UserQlResult {
	createUser: IUser;
}

export interface IGetUser {
	token: string;
	user: {
		id: string;
		email: string;
	}
	divisionId: string;
}

export interface LoggedInUserQlResult {
	getUser: IGetUser
}