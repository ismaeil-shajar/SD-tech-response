import { Entity, Model, Table } from 'dynamodb-onetable'
import { getClient } from './client'
import { Schema, Indexes, Models } from './Schema'

const OneTable = new Table({
	name: process.env.ONE_TABLE_NAME,
	client: getClient(),
	logger: true,
	schema: Schema,
	partial: true
})

export { Entity, Indexes, Model, Models, OneTable, Schema }
