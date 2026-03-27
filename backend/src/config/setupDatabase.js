const pool = require('./database');
const bcrypt = require('bcryptjs');

const setupDatabase = async () => {
  try {
    console.log('🚀 Starting database setup...');

    // Drop existing tables (in correct order due to foreign keys)
    await pool.query('DROP TABLE IF EXISTS comments CASCADE');
    await pool.query('DROP TABLE IF EXISTS tickets CASCADE');
    await pool.query('DROP TABLE IF EXISTS users CASCADE');
    console.log('✅ Dropped existing tables');

    // Create users table
    await pool.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'agent', 'admin')),
        phone VARCHAR(20),
        location VARCHAR(100),
        bio TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Created users table');

    // Create tickets table
    await pool.query(`
      CREATE TABLE tickets (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        status VARCHAR(20) DEFAULT 'open' CHECK (status IN ('open', 'in-progress', 'resolved', 'closed')),
        priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
        category VARCHAR(50) NOT NULL,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        assigned_to INTEGER REFERENCES users(id) ON DELETE SET NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Created tickets table');

    // Create comments table
    await pool.query(`
      CREATE TABLE comments (
        id SERIAL PRIMARY KEY,
        ticket_id INTEGER REFERENCES tickets(id) ON DELETE CASCADE,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        comment TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Created comments table');

    // Create indexes for better performance
    await pool.query('CREATE INDEX idx_tickets_user_id ON tickets(user_id)');
    await pool.query('CREATE INDEX idx_tickets_assigned_to ON tickets(assigned_to)');
    await pool.query('CREATE INDEX idx_tickets_status ON tickets(status)');
    await pool.query('CREATE INDEX idx_comments_ticket_id ON comments(ticket_id)');
    console.log('✅ Created indexes');

    // Insert demo users
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    await pool.query(`
      INSERT INTO users (name, email, password, role) VALUES
      ('Admin User', 'admin@example.com', $1, 'admin'),
      ('Agent Smith', 'agent@example.com', $1, 'agent'),
      ('John Doe', 'user@example.com', $1, 'user'),
      ('Jane Smith', 'jane@example.com', $1, 'user'),
      ('Mike Johnson', 'mike@example.com', $1, 'user')
    `, [hashedPassword]);
    console.log('✅ Inserted demo users');

    // Insert demo tickets
    await pool.query(`
      INSERT INTO tickets (title, description, status, priority, category, user_id, assigned_to) VALUES
      ('Login issue on mobile app', 'Users are unable to login using their credentials on the mobile application.', 'open', 'high', 'technical', 3, 2),
      ('Payment not processing', 'Payment gateway is showing error when trying to process credit card payments.', 'in-progress', 'urgent', 'billing', 4, 2),
      ('Feature request for dashboard', 'Would like to see more analytics on the dashboard page.', 'open', 'low', 'feature', 5, NULL),
      ('Bug in ticket creation', 'Getting error 500 when trying to create a new ticket.', 'resolved', 'high', 'technical', 3, 2),
      ('Account access issue', 'Cannot access my account after password reset.', 'in-progress', 'medium', 'technical', 4, 2)
    `);
    console.log('✅ Inserted demo tickets');

    // Insert demo comments
    await pool.query(`
      INSERT INTO comments (ticket_id, user_id, comment) VALUES
      (1, 2, 'We are investigating this issue and will update you soon.'),
      (1, 3, 'Thank you for the quick response!'),
      (2, 2, 'Payment gateway team has been notified. Working on a fix.'),
      (4, 2, 'Issue has been resolved. Please try again.'),
      (4, 3, 'Confirmed! Working now. Thank you!')
    `);
    console.log('✅ Inserted demo comments');

    console.log('\n🎉 Database setup completed successfully!');
    console.log('\n📝 Demo Accounts:');
    console.log('   Admin: admin@example.com / password123');
    console.log('   Agent: agent@example.com / password123');
    console.log('   User:  user@example.com / password123');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  }
};

setupDatabase();
