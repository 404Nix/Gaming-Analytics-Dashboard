<h1>🎮 Gaming Analytics Dashboard</h1>
<p>A full-stack web app to analyze player performance, match outcomes, rewards, and game trends.</p>

<h2>📌 Features</h2>
<ul>
  <li><strong>Live Dashboard:</strong> Player stats, match trends, and game insights.</li>
  <li><strong>Admin Panel:</strong> Login-protected analytics dashboard.</li>
  <li><strong>Player Insights:</strong> Score history, wins, games played.</li>
  <li><strong>Game Monitoring:</strong> Matches played, win rate, durations.</li>
  <li><strong>Rewards:</strong> Track earned trophies by type.</li>
</ul>

<h2>⚙️ Tech Stack</h2>
<table border="1" cellpadding="8" cellspacing="0">
  <tr><th>Layer</th><th>Tech Used</th></tr>
  <tr><td>Frontend</td><td>React, Vite, Tailwind CSS</td></tr>
  <tr><td>Backend</td><td>Node.js, Express</td></tr>
  <tr><td>Database</td><td>MongoDB (via Mongoose)</td></tr>
  <tr><td>Deployment</td><td>Frontend: Vercel, Backend: Render</td></tr>
</table>

<h2>🛠️ Setup Instructions</h2>

<h3>1. Clone the Repository</h3>
<pre><code>git clone https://github.com/404Nix/Gaming-Analytics-Dashboard.git
cd Gaming-Analytics-Dashboard</code></pre>

<h3>2. Backend Setup (server folder)</h3>
<pre><code>cd server
npm install</code></pre>

<p><strong>Create a .env file:</strong></p>
<pre><code>MONGODB_URI=your_mongodb_connection_string
PORT=5000</code></pre>

<p><strong>Run the server:</strong></p>
<pre><code>npm run dev</code></pre>

<h3>3. Seed the Database</h3>
<pre><code>node seed.js</code></pre>
<p>This populates players, games, matches, and rewards.</p>

<h3>4. Frontend Setup (client folder)</h3>
<pre><code>cd ../client
npm install
npm run dev</code></pre>
<p>App will run on: <a href="http://localhost:5173" target="_blank">http://localhost:5173</a></p>

<h3>5. Vite Proxy (Development)</h3>
<p>Already configured in <code>vite.config.js</code>:</p>
<pre><code>proxy: {
  '/api': {
    target: 'http://localhost:5000',
    changeOrigin: true,
    secure: false,
  }
}</code></pre>

<h2>🚀 Deployment</h2>
<h3>Backend (Render)</h3>
<ol>
  <li>Create new Web Service on <a href="https://render.com" target="_blank">Render</a></li>
  <li>Root directory: <code>server/</code></li>
  <li>Env vars: <code>MONGODB_URI</code> and <code>PORT=5000</code></li>
</ol>

<h3>Frontend (Vercel)</h3>
<ol>
  <li>Import GitHub repo on <a href="https://vercel.com" target="_blank">Vercel</a></li>
  <li>Set root directory as <code>client/</code></li>
  <li>No env vars needed</li>
  <li>Update API URLs in axios to use:</li>
</ol>
<pre><code>https://gaming-analytics-dashboard-deox.onrender.com/api/</code></pre>

<h2>🔐 Admin Access</h2>
<p>Mock login system using localStorage. Any username/password will generate a token.</p>

<h2>📊 Advanced Features</h2>

<h3>📈 Data Aggregation and Reporting</h3>
<ul>
  <li><strong>Top Players:</strong> Ranked by number of wins, scores, and play activity.</li>
  <li><strong>Popular Games:</strong> Based on match frequency and win rates.</li>
  <li><strong>Trend Analysis:</strong>
    <ul>
      <li>Daily active users</li>
      <li>Weekly game performance trends</li>
      <li>Reward distribution patterns</li>
    </ul>
  </li>
  <li>Implemented using native MongoDB <code>$group</code>, <code>$match</code>, and <code>$sort</code> aggregations.</li>
</ul>

<h3>⚡ Real-Time Integration</h3>
<ul>
  <li>Simulated match/game data insertion with dummy players and events.</li>
  <li>Real-time updates powered by <strong>WebSockets</strong> (Socket.IO).</li>
  <li>Frontend automatically updates:
    <ul>
      <li>Leaderboards</li>
      <li>Live charts</li>
      <li>Recent match feeds</li>
    </ul>
  </li>
  <li>Supports <code>Redis pub/sub</code> triggers (optional enhancement).</li>
</ul>

<h3>📉 Interactive Visualizations</h3>
<ul>
  <li><strong>Leaderboard:</strong> Dynamic bar chart</li>
  <li><strong>Game Popularity:</strong> Real-time pie chart</li>
  <li><strong>Player Activity:</strong> Line graph over time</li>
  <li><strong>Reward Histogram:</strong> Distribution bar chart</li>
  <li>Built using: <code>Chart.js</code>, <code>ApexCharts</code>, and <code>D3.js</code></li>
</ul>

<h3>🧪 Dummy Data Insertion Panel</h3>
<ul>
  <li>Admin form UI for:
    <ul>
      <li>Adding match results (game, player, duration)</li>
      <li>Creating new players</li>
      <li>Assigning reward types</li>
    </ul>
  </li>
  <li>Triggers DB changes and live dashboard updates.</li>
</ul>

<h3>🛡️ Optional Admin View (JWT)</h3>
<ul>
  <li>Basic login with token-based session control</li>
  <li>Admin-only visibility for analytics panel using JWT</li>
  <li>Client-side token validation + access protection</li>
</ul>

<h2>📸 Screenshots</h2>
<p><em>Add screenshots here (e.g., from /public folder)</em></p>

<h2>🙌 Made By</h2>
<p>Built with ❤️ by <a href="https://github.com/404Nix" target="_blank">404Nix</a></p>

<h2>📄 License</h2>
<p>This project is licensed under the MIT License.</p>
