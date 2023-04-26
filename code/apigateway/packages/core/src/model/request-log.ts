import { Entity, Model, Models, OneTable } from './onetable'

export type RequestsLog = Entity<typeof Models.RequestsLog>

class RequestsLogClass extends Model<RequestsLog> {
	constructor() {
		super(OneTable, 'RequestsLog')
	}
}

export const RequestsLogModel = new RequestsLogClass()
