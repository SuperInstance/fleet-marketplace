const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fleet Marketplace - Adaptive Autonomy Marketplace</title>
    <meta name="description" content="Vessels bid on tasks at their autonomy level">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --dark-bg: #0a0a0f;
            --dark-card: #15151f;
            --dark-border: #2a2a3a;
            --text-primary: #f8fafc;
            --text-secondary: #cbd5e1;
            --accent: #22c55e;
            --accent-hover: #16a34a;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--dark-bg);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header & Hero */
        header {
            border-bottom: 1px solid var(--dark-border);
            padding: 20px 0;
        }
        
        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent);
            text-decoration: none;
        }
        
        .nav-links {
            display: flex;
            gap: 30px;
        }
        
        .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: var(--accent);
        }
        
        .hero {
            text-align: center;
            padding: 80px 0;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            background: linear-gradient(135deg, var(--accent) 0%, #3b82f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .hero p {
            font-size: 1.25rem;
            color: var(--text-secondary);
            margin-bottom: 30px;
        }
        
        .cta-button {
            display: inline-block;
            background-color: var(--accent);
            color: var(--dark-bg);
            padding: 12px 30px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            transition: background-color 0.3s;
        }
        
        .cta-button:hover {
            background-color: var(--accent-hover);
        }
        
        /* Sections */
        section {
            padding: 80px 0;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 50px;
            text-align: center;
        }
        
        .section-title span {
            color: var(--accent);
        }
        
        /* How It Works */
        .steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }
        
        .step-card {
            background-color: var(--dark-card);
            border: 1px solid var(--dark-border);
            border-radius: 12px;
            padding: 30px;
            transition: transform 0.3s, border-color 0.3s;
        }
        
        .step-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent);
        }
        
        .step-number {
            display: inline-block;
            background-color: var(--accent);
            color: var(--dark-bg);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            text-align: center;
            line-height: 40px;
            font-weight: 700;
            margin-bottom: 20px;
        }
        
        .step-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
        }
        
        /* Economy */
        .economy-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }
        
        .economy-card {
            background-color: var(--dark-card);
            border: 1px solid var(--dark-border);
            border-radius: 12px;
            padding: 30px;
        }
        
        .economy-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--accent);
        }
        
        /* Listings */
        .listings-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }
        
        .listing-card {
            background-color: var(--dark-card);
            border: 1px solid var(--dark-border);
            border-radius: 12px;
            padding: 25px;
            transition: transform 0.3s;
        }
        
        .listing-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent);
        }
        
        .listing-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;
        }
        
        .listing-title {
            font-size: 1.25rem;
            font-weight: 600;
        }
        
        .autonomy-badge {
            background-color: rgba(34, 197, 94, 0.1);
            color: var(--accent);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .listing-details {
            margin-bottom: 20px;
        }
        
        .detail-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            color: var(--text-secondary);
        }
        
        .bid-button {
            width: 100%;
            background-color: transparent;
            color: var(--accent);
            border: 1px solid var(--accent);
            padding: 10px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .bid-button:hover {
            background-color: rgba(34, 197, 94, 0.1);
        }
        
        /* API Docs */
        .api-endpoints {
            max-width: 800px;
            margin: 50px auto 0;
        }
        
        .endpoint-card {
            background-color: var(--dark-card);
            border: 1px solid var(--dark-border);
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 20px;
        }
        
        .endpoint-method {
            display: inline-block;
            background-color: var(--accent);
            color: var(--dark-bg);
            padding: 4px 12px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 0.875rem;
            margin-right: 10px;
        }
        
        .endpoint-path {
            font-family: monospace;
            color: var(--text-primary);
            font-size: 1rem;
        }
        
        .endpoint-desc {
            margin-top: 15px;
            color: var(--text-secondary);
        }
        
        /* Footer */
        footer {
            background-color: var(--dark-card);
            border-top: 1px solid var(--dark-border);
            padding: 60px 0 30px;
            margin-top: 80px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent);
            margin-bottom: 20px;
        }
        
        .footer-links h4 {
            font-size: 1.125rem;
            margin-bottom: 20px;
            color: var(--text-primary);
        }
        
        .footer-links ul {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 10px;
        }
        
        .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-links a:hover {
            color: var(--accent);
        }
        
        .copyright {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid var(--dark-border);
            color: var(--text-secondary);
            font-size: 0.875rem;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .nav-links {
                display: none;
            }
            
            .section-title {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <nav class="nav">
                <a href="#" class="logo">Fleet Marketplace</a>
                <div class="nav-links">
                    <a href="#how-it-works">How It Works</a>
                    <a href="#economy">Economy</a>
                    <a href="#browse">Browse</a>
                    <a href="#api">API</a>
                </div>
            </nav>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Fleet Marketplace</h1>
                <p>Vessels bid on tasks at their autonomy level. An adaptive marketplace connecting autonomous maritime vessels with shipping tasks.</p>
                <a href="#browse" class="cta-button">Browse Available Tasks</a>
            </div>
        </section>

        <section id="how-it-works">
            <div class="container">
                <h2 class="section-title">How It <span>Works</span></h2>
                <div class="steps">
                    <div class="step-card">
                        <div class="step-number">1</div>
                        <h3>Task Listing</h3>
                        <p>Shipping companies list transportation tasks with requirements, deadlines, and autonomy levels.</p>
                    </div>
                    <div class="step-card">
                        <div class="step-number">2</div>
                        <h3>Vessel Bidding</h3>
                        <p>Autonomous vessels review tasks and submit bids based on their capabilities, location, and availability.</p>
                    </div>
                    <div class="step-card">
                        <div class="step-number">3</div>
                        <h3>Smart Matching</h3>
                        <p>Our algorithm matches tasks with optimal vessels considering autonomy level, cost, and efficiency.</p>
                    </div>
                    <div class="step-card">
                        <div class="step-number">4</div>
                        <h3>Execution & Payment</h3>
                        <p>Vessels execute tasks autonomously, with real-time tracking and automated payment upon completion.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="economy" style="background-color: rgba(10, 10, 15, 0.5);">
            <div class="container">
                <h2 class="section-title">Market <span>Economy</span></h2>
                <div class="economy-grid">
                    <div class="economy-card">
                        <h3>Dynamic Pricing</h3>
                        <p>Real-time market rates based on demand, weather conditions, route complexity, and vessel availability.</p>
                    </div>
                    <div class="economy-card">
                        <h3>Autonomy Tiers</h3>
                        <p>Level 1-5 autonomy classification ensuring vessels only bid on tasks matching their capabilities.</p>
                    </div>
                    <div class="economy-card">
                        <h3>Reputation System</h3>
                        <p>Vessels build reputation scores based on successful completions, affecting their bidding priority.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="browse">
            <div class="container">
                <h2 class="section-title">Browse <span>Listings</span></h2>
                <div class="listings-grid">
                    <div class="listing-card">
                        <div class="listing-header">
                            <h3 class="listing-title">Container Shipment</h3>
                            <span class="autonomy-badge">Level 4</span>
                        </div>
                        <div class="listing-details">
                            <div class="detail-item">
                                <span>Route:</span>
                                <span>Rotterdam → Singapore</span>
                            </div>
                            <div class="detail-item">
                                <span>Deadline:</span>
                                <span>14 days</span>
                            </div>
                            <div class="detail-item">
                                <span>Current Bid:</span>
                                <span>₿0.42</span>
                            </div>
                            <div class="detail-item">
                                <span>Vessels:</span>
                                <span>3 bidding</span>
                            </div>
                        </div>
                        <button class="bid-button">Submit Bid</button>
                    </div>
                    
                    <div class="listing-card">
                        <div class="listing-header">
                            <h3 class="listing-title">Bulk Cargo</h3>
                            <span class="autonomy-badge">Level 3</span>
                        </div>
                        <div class="listing-details">
                            <div class="detail-item">
                                <span>Route:</span>
                                <span>Shanghai → Los Angeles</span>
                            </div>
                            <div class="detail-item">
                                <span>Deadline:</span>
                                <span>21 days</span>
                            </div>
                            <div class="detail-item">
                                <span>Current Bid:</span>
                                <span>₿0.38</span>
                            </div>
                            <div class="detail-item">
                                <span>Vessels:</span>
                                <span>5 bidding</span>
                            </div>
                        </div>
                        <button class="bid-button">Submit Bid</button>
                    </div>
                    
                    <div class="listing-card">
                        <div class="listing-header">
                            <h3 class="listing-title">Coastal Patrol</h3>
                            <span class="autonomy-badge">Level 5</span>
                        </div>
                        <div class="listing-details">
                            <div class="detail-item">
                                <span>Route:</span>
                                <span>Mediterranean Sea</span>
                            </div>
                            <div class="detail-item">
                                <span>Deadline:</span>
                                <span>7 days</span>
                            </div>
                            <div class="detail-item">
                                <span>Current Bid:</span>
                                <span>₿0.15</span>
                            </div>
                            <div class="detail-item">
                                <span>Vessels:</span>
                                <span>2 bidding</span>
                            </div>
                        </div>
                        <button class="bid-button">Submit Bid</button>
                    </div>
                    
                    <div class="listing-card">
                        <div class="listing-header">
                            <h3 class="listing-title">Research Mission</h3>
                            <span class="autonomy-badge">Level 2</span>
                        </div>
                        <div class="listing-details">
                            <div class="detail-item">
                                <span>Route:</span>
                                <span>Arctic Circle</span>
                            </div>
                            <div class="detail-item">
                                <span>Deadline:</span>
                                <span>30 days</span>
                            </div>
                            <div class="detail-item">
                                <span>Current Bid:</span>
                                <span>₿0.55</span>
                            </div>
                            <div class="detail-item">
                                <span>Vessels:</span>
                                <span>1 bidding</span>
                            </div>
                        </div>
                        <button class="bid-button">Submit Bid</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="api">
            <div class="container">
                <h2 class="section-title">API <span>Documentation</span></h2>
                <div class="api-endpoints">
                    <div class="endpoint-card">
                        <div>
                            <span class="endpoint-method">GET</span>
                            <span class="endpoint-path">/api/health</span>
                        </div>
                        <p class="endpoint-desc">Health check endpoint. Returns {"status":"ok"} if the service is running

const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-ancestors 'none'",
  'X-Frame-Options': 'DENY',
};

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok' }), {
        headers: { 'Content-Type': 'application/json', ...securityHeaders }
      });
    }
    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8', ...securityHeaders }
    });
  }
};
