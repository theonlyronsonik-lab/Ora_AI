import Link from 'next/link'
export default function Header(){
  return (
    <header className='header'>
      <div className='container header-inner'>
        <Link href='/'><a className='brand'><img src='/logo.svg' alt='Ora-AI'/></a></Link>
        <nav className='nav'>
          <a href='#features'>Features</a>
          <a href='#how'>How it works</a>
          <a href='#testimonials'>Testimonials</a>
          <a href='#contact'>Contact</a>
        </nav>
      </div>
    </header>
  )
}
