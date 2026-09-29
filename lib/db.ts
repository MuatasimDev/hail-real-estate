import Database from "better-sqlite3";

const db = new Database("properties.db");

db.exec(`
CREATE TABLE IF NOT EXISTS properties (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    price TEXT,
    district TEXT
)
`);
export default db;

