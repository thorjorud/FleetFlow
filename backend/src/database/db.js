import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = "postgresql://postgres.rhqkbbvhvxtfhhbipvlk:403Lawoffice!!@aws-0-us-west-2.pooler.supabase.com:5432/postgres";
const { Pool } = pg;

const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
      }
    : {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
      }
);

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('❌ Database connection error:', err.stack);
    } else {
        console.log('✅ Database connected successfully at:', res.rows[0].now);
    }
});

export default pool;