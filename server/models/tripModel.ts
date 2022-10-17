import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.PG_URI
});

export default {
  query: (text: string, params: Array<string>, callback: () => void) => {
    return pool.query(text, params, callback);
  }
};