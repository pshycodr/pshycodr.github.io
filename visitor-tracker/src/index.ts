import { Hono } from 'hono'
import type { Context } from 'hono'
import { cors } from 'hono/cors';

const app = new Hono()
app.use('/*', cors())

// app.get('/setup', async (c: Context) => {
//   const db = c.env.VISITORS_DB as D1Database;
//   try {
//     // await db.exec(`
//     //   CREATE TABLE IF NOT EXISTS Visitor (
//     //     ip TEXT PRIMARY KEY, 
//     //     country TEXT NOT NULL, 
//     //     count INTEGER NOT NULL DEFAULT 1
//     //   );
//     // `)

//     await db.exec(`
//       ALTER TABLE Visitor RENAME COLUMN city TO country;
//     `).catch(() => {});

//     const schema = await db.prepare("PRAGMA table_info(Visitor)").all();
//     return c.json({ success: true, message: 'Visitor table setup successfully.' });
//   } catch (e: any) {
//     return c.json({ error: 'Internal Server Error' }, 500);
//   }
// });

app.get('/visit', async (c: Context) => {
  const ip = (c.req.header('CF-Connecting-IP') || 'unknown-ip').replace(/[^a-zA-Z0-9.-]/g, '');
  const country = c.req.header('CF-IPCountry') || 'unknown-country';

  // console.log([ip, country]);
  
  const db = c.env.VISITORS_DB as D1Database;

  const blockIps = ["103.43.81.5", "103.43.81.41", "103.43.81.6", "103.43.81.60", " 103.43.81.13", "152.59.163.169", "240940e11000d2c38000"]

  try {

    if (!blockIps.includes(ip)) {
      await db.prepare(`
        INSERT INTO Visitor (ip, country, count) 
        VALUES (?, ?, 1)
        ON CONFLICT(ip) DO UPDATE SET count = count + 1
      `).bind(ip, country).run();
    }

    const statsQuery = await db.prepare(`
      SELECT SUM(count) AS totalVisitors, COUNT(*) AS totalUniqueVisitors FROM Visitor;
    `).first<{ totalVisitors: number, totalUniqueVisitors: number }>();

    return c.json({
      totalVisitors: statsQuery?.totalVisitors || 0,
      totalUniqueVisitors: statsQuery?.totalUniqueVisitors || 0
    });
  } catch (e: any) {
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

export default app;