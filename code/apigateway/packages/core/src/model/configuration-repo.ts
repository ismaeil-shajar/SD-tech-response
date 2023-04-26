import { Entity, Model, Models, OneTable } from './onetable'

export type Configuration = Entity<typeof Models.Configuration>

class ConfigurationClass extends Model<Configuration> {
	constructor() {
		super(OneTable, 'Configuration')
	}
}

export const ConfigurationModel = new ConfigurationClass()
