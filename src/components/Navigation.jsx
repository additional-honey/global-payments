const Navigation = () => {
  return (
    <header className='text-black bg-[#f5f5f5] shadow-lg'>
      <nav className='flex justify-between px-8 py-4'>
        <a href='/'>
          <img
            src='/logo.svg'
            height={150}
            width={150}
            alt='Global Payments Logo'
          />
        </a>
      </nav>
    </header>
  )
}

export default Navigation
