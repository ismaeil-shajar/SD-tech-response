const Match = {
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	name: /^[^<>~`!@#$%^&\*(){}\[\]|\\\/:;,?=+]+$/,
	username: /^[^<>~`!@#$%^&\*(){}\[\]|\\\/:;,?=+]+$/,
	ulid: /^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/,
	url: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
}

export const Schema = {
	format: 'onetable:1.1.0',
	version: '0.0.1',
	indexes: {
		primary: {
			hash: 'pk',
			sort: 'sk',
			description: 'Primary  index'
		},
		gs1: {
			hash: 'gs1pk',
			sort: 'gs1sk',
			description: 'General  secondary  index',
			project: 'all'
		}
	},
	params: {
		isoDates: true,
		timestamps: true
	},
	models: {
		Configuration: {
			pk: { type: String, value: 'CONFIG' },
			sk: { type: String, value: 'CONFIG#${configName}' },
			configName: { type: String, required: true },
			configValue: { type: Object, required: true }
		},
		RequestsLog: {
			pk: { type: String, value: 'REQUESTS_LOG#${configName}' },
			sk: { type: String, value: 'REQUESTS_LOG#${ulid}' },
			ulid: { type: String, required: true, generate: 'ulid' },
			configName: { type: String, required: true },
			requestBody: { type: Object, required: false }
		}
	}
}

const Indexes = Schema.indexes,
	Models = Schema.models

export { Indexes, Models }
