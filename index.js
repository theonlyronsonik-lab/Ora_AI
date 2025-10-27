import Header from '../components/Header'
import Footer from '../components/Footer'
import {useEffect, useRef, useState} from 'react'
export default function Home(){
  const demoRef = useRef(null)
  const [email, setEmail] = useState('')
  useEffect(()=>{
    const lines=['Rewrite.','Humanize.','Inspire.']
    let i=0
    function typeLine(line,cb){ const el=demoRef.current; if(!el) return; el.textContent=''; let j=0; function tick(){ if(j<=line.length){ el.textContent=line.substring(0,j); j++; setTimeout(tick,70) } else setTimeout(cb,800) } tick() }
    function run(){ typeLine(lines[i], ()=>{ i=(i+1)%lines.length; run() }) }
    setTimeout(()=>{ if(demoRef.current) run() },400)
  },[])
  function handleWaitlist(e){ e.preventDefault(); alert('Thanks! We\'ll add ' + email + ' to the waitlist.'); setEmail('') }
  return (
    <div>
      <Header />
      <main className='container'>
        <section className='hero'>
          <div style={{height:28}} />
          <div style={{display:'flex',gap:36,alignItems:'center'}}>
            <div style={{flex:1}}>
              <h1 className='hero-title'>Ora‑AI — Redefining Creativity with AI</h1>
              <p className='hero-sub'>Your intelligent writing partner — <strong ref={demoRef}>Rewrite.</strong></p>
              <div style={{marginTop:16}}>
                <a className='btn btn-primary' href='#contact'>Join Waitlist</a>
                <a className='btn' href='#features' style={{marginLeft:10}}>See Features</a>
              </div>
              <p className='muted' style={{marginTop:12}}>Coming soon: AI Editor, Humanizer, and Prompt Assistant</p>
            </div>
            <div style={{width:420}}>
              <div className='card'><div style={{padding:12}}><strong>Live preview</strong><p className='muted'>Short article intro optimized for engagement.</p></div></div>
            </div>
          </div>
          <div className='typing-box'><div className='typing-label'>Ora‑AI is thinking…</div><div className='typing-output' ref={demoRef}></div></div>
        </section>

        <section id='features' className='section'>
          <h2>Features</h2>
          <p className='muted'>Smart tools to write, edit and humanize content.</p>
          <div className='features-grid'>
            <div className='card'><h4>AI Article Writer</h4><p className='muted'>Generate outlines, intros and full articles.</p></div>
            <div className='card'><h4>Humanizer</h4><p className='muted'>Make AI text sound warm and human.</p></div>
            <div className='card'><h4>Prompt Assistant</h4><p className='muted'>Turn your idea into a powerful AI prompt.</p></div>
          </div>
        </section>

        <section id='how' className='section'>
          <h2>How it works</h2>
          <div className='how-grid'>
            <div className='card'><h4>1. Share your brief</h4><p className='muted'>Paste a topic or upload a draft.</p></div>
            <div className='card'><h4>2. Choose a mode</h4><p className='muted'>Marketing, Technical, Casual — tailor output.</p></div>
            <div className='card'><h4>3. Enhance & humanize</h4><p className='muted'>Get suggestions, edits and a final draft.</p></div>
          </div>
        </section>

        <section id='testimonials' className='section'>
          <h2>What early users say</h2>
          <div className='testimonials'>
            <div className='card'>"Ora‑AI helped me write a landing page in 15 minutes."</div>
            <div className='card'>"The humanizer made cold copy feel personal."</div>
          </div>
        </section>

        <section id='contact' className='section'>
          <h2>Join the waitlist</h2>
          <p className='muted'>Get notified when the AI Editor launches.</p>
          <form onSubmit={handleWaitlist} style={{display:'flex',gap:8,marginTop:12}}>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='you@company.com' style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.06)',background:'transparent',color:'var(--text)'}} required />
            <button className='btn btn-primary' type='submit'>Notify me</button>
          </form>
        </section>

      </main>
      <Footer />
    </div>
  )
}
