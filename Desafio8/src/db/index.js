import path, { dirname } from "path"
import { fileURLToPath } from "url"
import knex from "knex"

const __dirname = dirname(fileURLToPath(import.meta.url));

const config ={
    client: 'sqlite3',
    connection: { filename: path.resolve(__dirname, '../database/coder.sqlite'),
    },
    useNullAsDefault: true,
}

const database = knex(config)

export default database
