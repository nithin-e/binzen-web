import { useState } from 'react'
import './App.css'

function Logo() {
  return (
    <div className="logo">
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm0 2c1.5 0 2.9.35 4.15.96L8.96 20.15A9.95 9.95 0 0 1 6 16c0-5.52 4.48-10 10-10zm0 20a9.95 9.95 0 0 1-4.15-.96l11.19-11.19A9.95 9.95 0 0 1 26 16c0 5.52-4.48 10-10 10z" fill="var(--accent)"/>
      </svg>
      <span>Binzen</span>
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="nav nav-contact">
        <a href="tel:+1234567890" className="nav-contact-item">
          <span className="nav-contact-label">Phone</span>
          <span>+1 (234) 567-890</span>
        </a>
        <a href="mailto:hello@binzen.com" className="nav-contact-item">
          <span className="nav-contact-label">Email</span>
          <span>hello@binzen.com</span>
        </a>
        <span className="nav-contact-item nav-contact-address">
          <span className="nav-contact-label">Address</span>
          <span>123 Finance St, City, Country</span>
        </span>
      </nav>
      <a href="#app" className="btn btn-primary">Launch App</a>
    </header>
  )
}

function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) console.log('Signup:', email)
  }

  return (
    <section className="hero">
      <div className="hero-bg-logo" aria-hidden>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm0 2c1.5 0 2.9.35 4.15.96L8.96 20.15A9.95 9.95 0 0 1 6 16c0-5.52 4.48-10 10-10zm0 20a9.95 9.95 0 0 1-4.15-.96l11.19-11.19A9.95 9.95 0 0 1 26 16c0 5.52-4.48 10-10 10z" fill="currentColor"/>
        </svg>
      </div>
      <div className="hero-card">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Secure and private at the core, yet easy to use{' '}
            <span className="highlight">Crypto Service</span>
          </h1>
          <p className="hero-desc">
            Binzen provides crypto-based financial services. With a focus on decentralized asset management, interact with the world of finance.
          </p>
          <form className="email-form" onSubmit={handleSubmit}>
            <div className="email-input-wrap">
              <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 6-10 7L2 6"/>
              </svg>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                aria-label="Email"
              />
              <svg className="input-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
            <button type="submit" className="btn btn-primary btn-send">Send Now</button>
          </form>
          <p className="download-label">Or download with</p>
          <div className="app-badges">
            <a href="#app-store" className="badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Download on the App Store</span>
            </a>
            <a href="#play-store" className="badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l14.09-4.59-3.33-2.87zM20.16 6.29L6.05 2.66 16.81 9.1l3.35-2.81zm-1.35 3.19L6.05 2.66 3.33 5.53l15.48 3.95z"/>
              </svg>
              <span>GET IT ON Google Play</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <PhoneMockup />
        </div>
      </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-status">9:41</div>
          <div className="phone-header">
            <div className="phone-user">
              <div className="phone-avatar" />
              <span>Good Morning, Alex</span>
            </div>
            <svg className="phone-bell" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </div>
          <div className="phone-wallet">
            <div className="phone-wallet-top">
              <span>Main Wallet</span>
              <span className="phone-wallet-balance">$838,593.00</span>
              <span className="phone-wallet-change positive">+1.30% ($1,590)</span>
            </div>
          </div>
          <div className="phone-actions">
            {['Send', 'Receive', 'Buy', 'Swap'].map((label) => (
              <div key={label} className="phone-action">
                <div className="phone-action-icon" />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="phone-cards">
            <div className="phone-card">
              <div className="phone-card-icon btc" />
              <span className="phone-card-name">Bitcoin</span>
              <span className="phone-card-value">$685,395.00</span>
              <span className="phone-card-pct positive">+1.00%</span>
            </div>
            <div className="phone-card">
              <div className="phone-card-icon eth" />
              <span className="phone-card-name">Ethereum</span>
              <span className="phone-card-value">$109,847.68</span>
              <span className="phone-card-pct negative">-2.70%</span>
            </div>
          </div>
          <div className="phone-transactions">
            <div className="phone-tx-header">
              <span>My Transaction</span>
              <a href="#all">See All →</a>
            </div>
            <div className="phone-tx-item">
              <span>Send</span>
              <span className="phone-tx-date">Jul 10, 2023 - 16.00</span>
              <span className="phone-tx-amount negative">-$146,670.00</span>
            </div>
            <div className="phone-tx-item">
              <span>Buy</span>
              <span className="phone-tx-date">Jul 08, 2023 - 10.00</span>
              <span className="phone-tx-amount negative">-$43,182.00</span>
            </div>
          </div>
          <div className="phone-nav">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="phone-nav-dot" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const BUSINESS_PROBLEMS = [
  {
    title: 'Missing Systems & Processes',
    description: 'Businesses rely on people instead of structured systems, making scaling impossible.',
  },
  {
    title: 'Financial Leakage',
    description: 'Lack of financial visibility causes unnoticed losses and poor decision making.',
  },
  {
    title: 'Operational Bottlenecks',
    description: 'Manual workflows slow down growth and create internal chaos.',
  },
  {
    title: 'Marketing Blind Spots',
    description: 'Companies spend on marketing without understanding performance or ROI.',
  },
  {
    title: 'Owner Dependency',
    description: 'The business cannot function smoothly without the owner involved in every decision.',
  },
  {
    title: 'Talent & Retention Gaps',
    description: 'Key people leave because roles and growth paths are unclear, slowing scaling.',
  },
  {
    title: 'Inconsistent Customer Experience',
    description: 'No standard processes lead to uneven service and lost repeat business.',
  },
  {
    title: 'No Data-Driven Decisions',
    description: 'Decisions are based on gut feel instead of clear metrics and reporting.',
  },
  
]

function ProblemCardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  )
}

function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="problem-section-inner">
        <h2 className="problem-section-title">Why 90% of Businesses Cannot Scale</h2>
        <p className="problem-section-subtitle">
          Most businesses hit the same invisible growth blockers when trying to grow.
        </p>
        <p className="problem-section-stat">
          85% of growing businesses struggle because they lack systems, financial clarity, and scalable operations.
        </p>
        <div className="problem-grid">
          {BUSINESS_PROBLEMS.map((card) => (
            <article key={card.title} className="problem-card">
              <div className="problem-card-icon" aria-hidden>
                <ProblemCardIcon />
              </div>
              <h3 className="problem-card-title">{card.title}</h3>
              <p className="problem-card-desc">{card.description}</p>
            </article>
          ))}
        </div>
        <div className="problem-cta">
          <p className="problem-cta-text">We identify and fix these growth blockers inside your business.</p>
          <a href="#analysis" className="problem-cta-btn">Get Business Analysis</a>
        </div>
      </div>
    </section>
  )
}

const COMPARISON_ROWS = [
  { aspect: 'Systems & processes', others: 'Ad-hoc, in people\'s heads', us: 'Documented SOPs and repeatable frameworks' },
  { aspect: 'Owner dependency', others: 'Business runs only when you\'re there', us: 'Owner-independent operations that scale' },
  { aspect: 'Financial clarity', others: 'Reactive, unclear numbers', us: 'Clear revenue, cost, and cash flow visibility' },
  { aspect: 'Sales & marketing', others: 'Inconsistent funnels and channels', us: 'Structured funnels and measurable channels' },
  { aspect: 'Implementation', others: 'One-off consulting, you figure it out', us: 'Hands-on rollout, training, and ongoing support' },
  { aspect: 'Growth approach', others: 'Firefighting, hope it scales', us: 'Designed for scale with automation and systems' },
]

function ComparisonTableSection() {
  return (
    <section className="comparison-section">
      <div className="comparison-container">
        <h2 className="comparison-title">What We Do Better</h2>
        <p className="comparison-subtitle">
          See how our approach compares to the usual way businesses try to grow.
        </p>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <colgroup>
              <col className="comparison-col-aspect" />
              <col className="comparison-col-others" />
              <col className="comparison-col-us" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className="comparison-th comparison-th-aspect">Area</th>
                <th scope="col" className="comparison-th comparison-th-others">Others</th>
                <th scope="col" className="comparison-th comparison-th-us">Binzen</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.aspect} className="comparison-row">
                  <td className="comparison-td comparison-td-aspect">{row.aspect}</td>
                  <td className="comparison-td comparison-td-others">
                    <span className="comparison-icon comparison-icon-cross" aria-hidden>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </span>
                    <span className="comparison-cell-text">{row.others}</span>
                  </td>
                  <td className="comparison-td comparison-td-us">
                    <span className="comparison-icon comparison-icon-tick" aria-hidden>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="comparison-cell-text">{row.us}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const WHAT_WE_FIX_ITEMS = [
  {
    title: 'Broken or missing systems',
    description: 'We design and document repeatable processes so your business runs consistently without guesswork or key-person dependency.',
    icon: 'systems',
  },
  {
    title: 'Unclear financials and cash flow',
    description: 'We bring clarity to revenue, costs, and cash flow so you can make decisions based on real numbers, not gut feel.',
    icon: 'financials',
  },
  {
    title: 'Operations that depend on you',
    description: 'We build owner-independent operations so the business can grow and deliver value even when you\'re not in the room.',
    icon: 'operations',
  },
  {
    title: 'Inconsistent sales and marketing',
    description: 'We create clear funnels, metrics, and channels so marketing and sales work together and drive predictable growth.',
    icon: 'sales',
  },
  {
    title: 'Growth that doesn\'t scale',
    description: 'We turn one-off wins into scalable systems so growth is repeatable, measurable, and sustainable.',
    icon: 'growth',
  },
  {
    title: 'Reactive firefighting',
    description: 'We help you move from constant firefighting to proactive planning so you can focus on what moves the needle.',
    icon: 'focus',
  },
]

function WhatWeFixIcon({ type }) {
  const size = 24
  const stroke = 2
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (type) {
    case 'systems':
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <path d="M10 7v2M14 10h2M10 17v-2M7 14h2" />
        </svg>
      )
    case 'financials':
      return (
        <svg {...common} aria-hidden>
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'operations':
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          <path d="M12 12v4M10 16h4" />
        </svg>
      )
    case 'sales':
      return (
        <svg {...common} aria-hidden>
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          <path d="M3 14h4l6-8 4 8h2" />
        </svg>
      )
    case 'growth':
      return (
        <svg {...common} aria-hidden>
          <path d="M3 17l6-6 4 4 8-10" />
          <path d="M21 7v6h-6" />
        </svg>
      )
    case 'focus':
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    default:
      return null
  }
}

function WhatWeFixSection() {
  return (
    <section className="what-we-fix-section">
      <div className="what-we-fix-glow" aria-hidden />
      <div className="what-we-fix-inner">
        <h2 className="what-we-fix-title">What We Fix</h2>
        <p className="what-we-fix-subtitle">
          We address the root causes that hold businesses back—so you can run with clarity and scale.
        </p>
        <div className="what-we-fix-grid">
          {WHAT_WE_FIX_ITEMS.map((item) => (
            <article key={item.title} className="what-we-fix-tile">
              <div className="what-we-fix-tile-icon" aria-hidden>
                <WhatWeFixIcon type={item.icon} />
              </div>
              <h3 className="what-we-fix-tile-title">{item.title}</h3>
              <p className="what-we-fix-tile-desc">{item.description}</p>
              <span className="what-we-fix-tile-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                We fix this
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const BIZZEN_FRAMEWORK = [
  { acronym: 'SOP', name: 'Standard Operation Procedures', desc: 'Documented systems so your business runs consistently without guesswork.' },
  { acronym: 'POS', name: 'Point of Sale', desc: 'Streamlined sales and transaction processes that capture every opportunity.' },
  { acronym: 'POM', name: 'Point of Marketing', desc: 'Clear marketing metrics and channels that drive predictable growth.' },
  { acronym: 'POM²', name: 'Procedure Optimization Model', desc: 'Continuous improvement of operations for scale and efficiency.' },
]

function BizZenSystemSection() {
  return (
    <section className="bizzen-system-section">
      <div className="bizzen-system-inner">
        <h2 className="bizzen-system-title">The BizZen System</h2>
        <p className="bizzen-system-subtitle">
          A proven framework that turns growth blockers into scalable systems.
        </p>
        <div className="bizzen-flow">
          <div className="bizzen-flow-line" aria-hidden />
          {BIZZEN_FRAMEWORK.map((item) => (
            <article key={item.acronym} className="bizzen-flow-node">
              <div className="bizzen-flow-dot">
                <span className="bizzen-flow-acronym">{item.acronym}</span>
              </div>
              <div className="bizzen-flow-content">
                <h3 className="bizzen-flow-name">{item.name}</h3>
                <p className="bizzen-flow-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const PROGRAMS = [
  {
    acronym: 'BFSPC',
    name: 'Backbone Structure',
    note: '3 months',
    description: 'We build the foundational systems your business needs to run without you. Documented procedures, clear roles, and a structure that scales.',
    features: [
      'SOP design and documentation',
      'Role and responsibility mapping',
      'Process flows and handoffs',
      'Quality and compliance baseline',
    ],
  },
  {
    acronym: 'BFSPI',
    name: 'Smart Implementation',
    description: 'We don’t just design—we help you roll out systems in your business so your team actually uses them and results stick.',
    features: [
      'Phased rollout planning',
      'Team training and adoption',
      'Integration with existing tools',
      'Ongoing support and iteration',
    ],
  },
  {
    acronym: 'BFSP',
    name: 'Learning Programs',
    description: 'Upskill your team and leadership with structured learning on operations, marketing, and scaling so your business can grow with confidence.',
    features: [
      'Operations and process literacy',
      'Marketing and sales fundamentals',
      'Leadership and delegation',
      'Self-paced and cohort options',
    ],
  },
]

function ProgramsSection() {
  return (
    <section className="programs-section">
      <div className="programs-inner">
        <h2 className="programs-title">Programs</h2>
        <p className="programs-subtitle">
          These programs focus on creating and implementing structured systems for business growth.
        </p>
        <div className="programs-grid">
          {PROGRAMS.map((p) => (
            <article key={p.acronym} className="program-card">
              <span className="program-label">{p.acronym}</span>
              <h3 className="program-title">{p.name}{p.note ? ` · ${p.note}` : ''}</h3>
              <p className="program-desc">{p.description}</p>
              <ul className="program-features">
                {p.features.map((f) => (
                  <li key={f} className="program-feature">
                    <span className="program-feature-bullet" aria-hidden>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#programs" className="program-cta">Learn more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const WHO_THIS_IS_FOR = [
  'Struggling businesses',
  'Profitable businesses',
  'Established businesses',
  'Legacy businesses',
  'New entrepreneurs',
]

function WhoThisIsForSection() {
  return (
    <section className="who-this-for-section">
      <div className="who-this-for-inner">
        <h2 className="who-this-for-title">Who This Is For</h2>
        <p className="who-this-for-subtitle">
          Whether you&apos;re just starting or already running a business, our systems help you scale.
        </p>
        <div className="who-this-for-arc" role="list">
          {WHO_THIS_IS_FOR.map((segment, index) => (
            <div key={segment} className="who-this-for-segment" role="listitem" style={{ '--i': index }}>
              <span className="who-this-for-segment-num" aria-hidden>{String(index + 1).padStart(2, '0')}</span>
              <span className="who-this-for-segment-label">{segment}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TRANSFORMATION_OUTCOMES = [
  'Scalable systems',
  'Owner-independent operations',
  'Sales funnel creation',
  'Global expansion systems',
  'Digital transformation',
]

function TransformationResultsSection() {
  return (
    <section className="transformation-results-section">
      <div className="transformation-results-panel">
        <div className="transformation-results-inner">
          <h2 className="transformation-results-title">Transformation & Results</h2>
          <p className="transformation-results-subtitle">
            Our programs deliver clear outcomes. Explore program pages for the full picture.
          </p>
          <ul className="transformation-results-list">
            {TRANSFORMATION_OUTCOMES.map((outcome) => (
              <li key={outcome} className="transformation-results-item">{outcome}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const HOW_IT_WORKS_STEPS = [
  { step: 1, label: 'Book business analysis' },
  { step: 2, label: '21-day business evaluation' },
  { step: 3, label: 'Receive system roadmap' },
  { step: 4, label: 'Implement business framework' },
]

function HowItWorksSection() {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-inner">
        <h2 className="how-it-works-title">How It Works</h2>
        <p className="how-it-works-subtitle">
          A simple path from analysis to implementation. We start with a 21-day evaluation.
        </p>
        <div className="how-it-works-timeline">
          {HOW_IT_WORKS_STEPS.map(({ step, label }) => (
            <div key={step} className="how-it-works-node">
              <div className="how-it-works-dot">
                <span className="how-it-works-number">{step}</span>
              </div>
              <div className="how-it-works-content">
                <span className="how-it-works-step-label">Step {step}</span>
                <span className="how-it-works-label">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingOfferSection() {
  return (
    <section className="pricing-offer-section">
      <div className="pricing-offer-ribbon-wrap">
        <span className="pricing-offer-ribbon">Special Offer</span>
        <div className="pricing-offer-strip">
          <div className="pricing-offer-inner">
            <h2 className="pricing-offer-title">Business System Analysis</h2>
            <p className="pricing-offer-price">₹6,875 + GST <span className="pricing-offer-note">(limited offer)</span></p>
            <p className="pricing-offer-original">Original price much higher.</p>
            <a href="#analysis" className="pricing-offer-btn">Get Business Analysis</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-inner">
        <h2 className="final-cta-title">Ready to Build a Business That Scales?</h2>
        <p className="final-cta-subtitle">
          Book your Business System Analysis and get a clear roadmap in 21 days.
        </p>
        <a href="#analysis" className="final-cta-btn">Get Started</a>
      </div>
    </section>
  )
}

function SwapAssetsSection() {
  return (
    <section className="swap-assets">
      <div className="swap-assets-inner">
        <div className="swap-assets-grid">
          <div className="swap-assets-visual" aria-hidden>
            <div className="swap-ring" />
            <svg className="swap-arcs" viewBox="0 0 200 200" aria-hidden>
              <path className="swap-arc" d="M 100 35 Q 135 65 125 100 Q 115 135 100 165 Q 65 135 75 100 Q 85 65 100 35" />
            </svg>
            <div className="swap-node swap-node-btc" title="Bitcoin">₿</div>
            <div className="swap-node swap-node-card" title="Card">◆</div>
            <div className="swap-node swap-node-shield" title="Secure">✓</div>
            <div className="swap-node swap-node-nft" title="NFT">◇</div>
            <div className="swap-node swap-node-chart" title="Chart">↗</div>
          </div>
          <div className="swap-assets-content">
            <h2 className="swap-assets-title">Swap Private Digital Assets</h2>
            <p className="swap-assets-desc">
              Swap asset with us safe guarding your transaction. Ever wanted to swap asset privately but don&apos;t have someone to support the transaction? we got you covered, with our innovative solution, you can easily create your swap.
            </p>
            <a href="#more" className="btn btn-outline">
              Find Out More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function OurProductsVisual() {
  return (
    <div className="pay-friends-visual transaction-custody-visual-reuse" aria-hidden>
      <div className="pay-friends-coins">
        <div className="pay-coin pay-coin-btc" />
        <div className="pay-coin pay-coin-eth" />
      </div>
      <div className="pay-friends-cards">
        <div className="pay-card pay-card-back" />
        <div className="pay-card pay-card-front">
          <div className="pay-card-avatar" />
          <div className="pay-card-lines" />
          <button type="button" className="pay-card-btn">PAY</button>
        </div>
      </div>
      <div className="pay-hand" aria-hidden>→</div>
    </div>
  )
}

function TransactionCustodySection({ useOurProductsImage }) {
  return (
    <section className="transaction-custody">
      <div className="transaction-custody-inner">
        <div className="transaction-custody-grid">
          <div className="transaction-custody-content">
            {useOurProductsImage ? (
              <>
                <h2 className="transaction-custody-title pay-friends-heading">No complicated hash code, just simple names</h2>
                <p className="transaction-custody-desc">
                  Users register with a phone number and nickname, can choose to be found by phone or name, and keep full control over their data. Easy to use with top-tier privacy—you decide what works for you.
                </p>
              </>
            ) : (
              <>
                <h2 className="transaction-custody-title">Transaction Custody (Payment)</h2>
                <p className="transaction-custody-desc">
                  Pay only when it&apos;s confirmed, melon finance provide solution to support private transaction, just attach a note describe the transaction detail and confirm the payment only if the agreement is fullfilled.
                </p>
              </>
            )}
            <a href="#more" className="btn btn-outline">
              Find Out More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="transaction-custody-visual" aria-hidden>
            {useOurProductsImage ? (
              <OurProductsVisual />
            ) : (
              <>
                <div className="tc-coin tc-coin-sol" />
                <div className="tc-phone">
                  <div className="tc-phone-screen">
                    <div className="tc-phone-content" />
                    <div className="tc-payment-btn">PAYMENT</div>
                  </div>
                </div>
                <div className="tc-card" />
                <div className="tc-coin tc-coin-usdt" />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const TESTIMONIAL = {
  quote: 'A great platform for making transactions with a complete and very beautiful crypto service also easy to use and very secure. Try it now and you won\'t hesitate!',
  author: 'Daniel Schulman',
  title: 'CEO - PayPal',
}

const PAYMENT_LOGO_NAMES = ['PayPal', 'Wise', 'TrustPay', 'Google Pay', 'Samsung Pay']

function WhoUsesSection() {
  const [, setActiveSlide] = useState(0)

  return (
    <section className="who-uses">
      <div className="who-uses-bg-blob" aria-hidden />
      <div className="who-uses-inner">
        <div className="who-uses-top">
          <div className="who-uses-heading-block">
            <h2 className="who-uses-title">Who Uses Binzen?</h2>
            <p className="who-uses-subtitle">
              Empowering Decentralized Investments: Discover the Diverse Community Benefiting from Binzen.
            </p>
            <div className="who-uses-card">
              <span className="who-uses-quote-mark">"</span>
              <p className="who-uses-quote">{TESTIMONIAL.quote}</p>
              <div className="who-uses-author-row">
        <div>
                  <div className="who-uses-author">{TESTIMONIAL.author}</div>
                  <div className="who-uses-author-title">{TESTIMONIAL.title}</div>
                </div>
                <div className="who-uses-stars" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="who-uses-star">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="who-uses-figures">
            <button type="button" className="who-uses-nav who-uses-nav-prev" aria-label="Previous testimonial" onClick={() => setActiveSlide((s) => (s - 1 + 3) % 3)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button type="button" className="who-uses-nav who-uses-nav-next" aria-label="Next testimonial" onClick={() => setActiveSlide((s) => (s + 1) % 3)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h19M12 5l7 7-7 7"/></svg>
            </button>
            <div className="who-uses-figure who-uses-figure-main">
              <img src="/avatr.png" alt="" className="who-uses-avatar-img" />
            </div>
            <div className="who-uses-figure who-uses-figure-secondary">
              <div className="who-uses-avatar-placeholder" />
            </div>
          </div>
        </div>
        <div className="who-uses-logos">
          {PAYMENT_LOGO_NAMES.map((name) => (
            <div key={name} className="who-uses-logo-item">{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQ_ITEMS = [
  { q: 'What Binzen Financial?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur venenatis dapibus quam id. Urna sit.' },
  { q: 'Is it safe to use for transactions?', a: 'Yes. We use industry-standard security and encryption to keep your transactions and data safe.' },
  { q: 'What is fee after making a transaction?', a: 'Fees depend on the type and size of the transaction. See our pricing page for details.' },
  { q: 'Is it possible for the long term?', a: 'Yes. Binzen is built for both short-term and long-term use with no lock-in.' },
  { q: 'Does it use a blockchain system?', a: 'Yes. We use blockchain technology to ensure transparent and secure transactions.' },
  { q: 'Can it be used in any country?', a: 'Availability varies by region. Check your app store or our website for supported countries.' },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const leftItems = FAQ_ITEMS.slice(0, 3)
  const rightItems = FAQ_ITEMS.slice(3, 6)

  const renderItem = (item, index, columnOffset) => {
    const globalIndex = columnOffset + index
    const isOpen = openIndex === globalIndex
    return (
      <div
        key={globalIndex}
        className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
      >
        <button
          type="button"
          className="faq-question"
          onClick={() => setOpenIndex(isOpen ? -1 : globalIndex)}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${globalIndex}`}
          id={`faq-question-${globalIndex}`}
        >
          <span>{item.q}</span>
          <span className="faq-icon" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? <path d="M18 15l-6-6-6 6"/> : <path d="M6 9l6 6 6-6"/>}
            </svg>
          </span>
        </button>
        <div
          id={`faq-answer-${globalIndex}`}
          className="faq-answer"
          role="region"
          aria-labelledby={`faq-question-${globalIndex}`}
          hidden={!isOpen}
        >
          {item.a}
        </div>
      </div>
    )
  }

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Demystifying Binzen: Your Top FAQs Answered for a Seamless Investment Experience.
        </p>
        <div className="faq-grid">
          <div className="faq-column">
            {leftItems.map((item, i) => renderItem(item, i, 0))}
          </div>
          <div className="faq-column">
            {rightItems.map((item, i) => renderItem(item, i, 3))}
          </div>
        </div>
      </div>
      </section>
  )
}

function GrowthInvestSection() {
  const [slide, setSlide] = useState(0)
  const slides = 3

  return (
    <section className="growth-invest">
      <div className="growth-invest-inner">
        <div className="growth-invest-carousel">
          <button type="button" className="growth-carousel-btn" aria-label="Previous" onClick={() => setSlide((s) => (s - 1 + slides) % slides)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <div className="growth-carousel-dots" role="tablist" aria-label="Slides">
            {[0, 1, 2].map((i) => (
              <button key={i} type="button" role="tab" aria-selected={slide === i} className={`growth-dot ${slide === i ? 'active' : ''}`} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
          <button type="button" className="growth-carousel-btn" aria-label="Next" onClick={() => setSlide((s) => (s + 1) % slides)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h19M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        <h2 className="growth-invest-title">Let&apos;s Growth Invest with Us</h2>
        <p className="growth-invest-desc">
          You are very right here to save or transact with crypto because there are many services for your crypto.
        </p>
        <div className="growth-app-buttons">
          <a href="#app-store" className="growth-app-btn">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
            <span>Download on the App Store</span>
          </a>
          <a href="#play-store" className="growth-app-btn">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l14.09-4.59-3.33-2.87zM20.16 6.29L6.05 2.66 16.81 9.1l3.35-2.81zm-1.35 3.19L6.05 2.66 3.33 5.53l15.48 3.95z"/>
                </svg>
            <span>GET IT ON Google Play</span>
          </a>
        </div>
        <div className="growth-ratings">
          <span className="growth-rating"><span className="growth-star">★</span> 4.5 on App Store</span>
          <span className="growth-rating"><span className="growth-star">★</span> 5.0 on Playstore</span>
        </div>
      </div>
    </section>
  )
}

const FOOTER_LINKS = {
  Company: ['About', 'Career', 'Product', 'FAQ'],
  Retail: ['Crypto Custody', 'Credit Cards', 'Gift Cards', 'Seed Investment'],
  Enterprise: ['Term Based Transaction Service', 'Commercial Credit', 'Powering Loyalty', 'Digital Asset Payments'],
  Legal: ['Terms of Use', 'Privacy Policy', 'Licenses & Disclosures', 'Cookie Policy'],
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm0 2c1.5 0 2.9.35 4.15.96L8.96 20.15A9.95 9.95 0 0 1 6 16c0-5.52 4.48-10 10-10zm0 20a9.95 9.95 0 0 1-4.15-.96l11.19-11.19A9.95 9.95 0 0 1 26 16c0 5.52-4.48 10-10 10z" fill="currentColor"/>
                </svg>
            <span>Binzen</span>
          </div>
          <p className="footer-desc">
            Binzen provides crypto based financial service. With a focus on decentralized asset management, interact with the world of finance.
          </p>
        </div>
        <nav className="footer-nav">
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="footer-col">
              <h3 className="footer-col-title">{heading}</h3>
              <ul className="footer-col-links">
                {links.map((link) => (
                  <li key={link}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ComparisonTableSection />
        <WhatWeFixSection />
        <BizZenSystemSection />
        <ProgramsSection />
        <WhoThisIsForSection />
        <TransformationResultsSection />
        <HowItWorksSection />
        <PricingOfferSection />
        <WhoUsesSection />
        <FinalCTASection />
        <TransactionCustodySection />
        <SwapAssetsSection />
        <FAQSection />
        <GrowthInvestSection />
      </main>
      <Footer />
    </>
  )
}
