'use client'
import { useEffect, useState } from 'react'

export function MonogramESS({ color = '#8b6240', size = 56 }: { color?: string; size?: number }) {
  const r = size / 2
  const stroke = size * 0.025
  const fsMain = size * 0.200
  const fsSub = size * 0.100
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
      <circle cx={r} cy={r} r={r - stroke} stroke={color} strokeWidth={stroke} fill="none" />
      <circle cx={r} cy={r} r={r - stroke * 4} stroke={color} strokeWidth={stroke * 0.4} fill="none" opacity="0.35" />
      <text x={r} y={r - fsSub * 0.6} textAnchor="middle"
        fontFamily="var(--font-playfair), Georgia, serif"
        fontSize={fsMain} fontWeight="400" letterSpacing="0.04em" fill={color}>
        E.S.S.
      </text>
      <text x={r} y={r + fsMain * 0.55} textAnchor="middle"
        fontFamily="var(--font-playfair), Georgia, serif"
        fontSize={fsSub} fontWeight="400" letterSpacing="0.16em" fill={color} opacity="0.75">
        AVOCATE
      </text>
    </svg>
  )
}

const NAV_LINKS = [
  { href: '#cabinet',    label: 'Le cabinet' },
  { href: '#domaines',   label: 'Domaines' },
  { href: '#honoraires', label: 'Honoraires' },
  { href: '#ressources', label: 'Ressources' },
  { href: '#contact',    label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.35s ease, box-shadow 0.35s ease',
      background: scrolled ? 'rgba(39,32,24,0.97)' : 'transparent',
      boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
    }}>
      <div className="max-w-6xl mx-auto px-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

        {/* Monogramme */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <MonogramESS color={scrolled ? '#a87c58' : '#f5f1ec'} size={44} />
          <span style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '0.80rem',
            letterSpacing: '0.12em',
            color: scrolled ? '#f5f1ec' : '#f5f1ec',
            textTransform: 'uppercase',
            lineHeight: 1.2,
          }}>
            Eva Salvador-Sigwalt<br />
            <span style={{ fontSize: '0.60rem', letterSpacing: '0.20em', opacity: 0.65 }}>Avocate à Bordeaux</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{ gap: '2.2rem', alignItems: 'center' }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(245,241,236,0.80)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#a87c58')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,241,236,0.80)')}
            >{l.label}</a>
          ))}
          <a href="tel:+33767616458" style={{
            fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            background: '#8b6240', color: '#f5f1ec',
            padding: '0.65rem 1.4rem', textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#a87c58')}
          onMouseLeave={e => (e.currentTarget.style.background = '#8b6240')}
          >07 67 61 64 58</a>
        </nav>

        {/* Burger */}
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu"
          style={{ flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ display: 'block', width: '22px', height: '1.5px', background: '#f5f1ec' }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(39,32,24,0.98)', borderTop: '1px solid rgba(245,241,236,0.08)', padding: '1.5rem 1.5rem 2rem' }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '0.75rem 0',
              fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(245,241,236,0.80)', textDecoration: 'none',
              borderBottom: '1px solid rgba(245,241,236,0.07)',
            }}>{l.label}</a>
          ))}
          <a href="tel:+33767616458" style={{
            display: 'block', marginTop: '1.2rem',
            background: '#8b6240', color: '#f5f1ec', textAlign: 'center',
            padding: '0.9rem', textDecoration: 'none',
            fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
          }}>07 67 61 64 58</a>
        </div>
      )}
    </header>
  )
}
