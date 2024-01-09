import pg from 'pg'
import dotenv from 'dotenv'

const { Pool } = pg
dotenv.config()

const pool = new Pool({
  connectionString: 'postgres://wnflhjcf:XAw66BgHXPKUWqazbG75u00nteM_CGyx@john.db.elephantsql.com:5432/wnflhjcf',
})

export default pool
