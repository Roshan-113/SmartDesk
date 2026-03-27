const { Client } = require('pg');
require('dotenv').config();

const createDatabase = async () => {
  // Connect to default postgres database first
  const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: 'postgres', // Connect to default database
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  try {
    await client.connect();
    console.log('✅ Connected to PostgreSQL');

    // Check if database exists
    const result = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = $1",
      [process.env.DB_NAME]
    );

    if (result.rows.length === 0) {
      // Create database
      await client.query(`CREATE DATABASE ${process.env.DB_NAME}`);
      console.log(`✅ Database '${process.env.DB_NAME}' created successfully`);
    } else {
      console.log(`ℹ️  Database '${process.env.DB_NAME}' already exists`);
    }

    await client.end();
    console.log('\n🎉 Database creation completed!');
    console.log('Now run: npm run db:setup\n');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database creation failed:', error.message);
    await client.end();
    process.exit(1);
  }
};

createDatabase();
