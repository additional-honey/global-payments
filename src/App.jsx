import './App.css'
import Navigation from './components/Navigation'
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'

function App() {
  return (
    <>
      <Navigation />
      <main className='container px-4 mx-auto'>
        <section className='w-4/5 mx-auto my-12 text-center'>
          <h2 className='text-3xl font-bold md:text-4xl lg:text-5xl'>
            Welcome to the Global Payments Server page.
          </h2>
          <p className='my-6 text-[#E5E5E5]'>
            We combine our leading commerce platform with deep expertise to
            deliver solutions that make every aspect of commerce work better.
            For any business. At every scale.
          </p>
          <button
            onClick={() => {
              /*global tidioChatApi */
              /*eslint no-undef: "error"*/
              tidioChatApi.display(true)
              tidioChatApi.open()
            }}
            className='px-8 py-3 text-white transition-colors rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-500'
          >
            Chat with us
          </button>
        </section>
        <section className='flex flex-col w-4/5 mx-auto place-items-center'>
          <img
            src='/showcase.jpg'
            className='h-[270px] object-cover md:h-auto max-w-full mx-auto rounded-lg lg:w-3/5'
            alt='Female holding credit card with left hand, inputing card details on a laptop'
          />
          <p className='md:w-4/5 mt-12 text-center text-[#E5E5E5]'>
            This is the financial management server. We encourage you to follow
            the guidelines provided by our admin regarding your withdrawal. If
            you have any questions, please direct them to our admin for further
            information.
          </p>
        </section>
        <div className='my-8 text-center text-[#E5E5E5]'>
          <h2 className='text-2xl font-semibold '>Email Us:</h2>
          <a href='mailto:support@cloudbackupsaver.com'>
            info@globalpaymentserver.com
          </a>
        </div>
        <section className='flex justify-around w-48 mx-auto mb-6'>
          <a
            href='https://www.linkedin.com/company/global-paymentshttps://www.linkedin.com/company/global-payments'
            className='transition-colors hover:text-[#0A66C2]'
          >
            <FaLinkedin size='24px' />
          </a>
          <a
            href='https://www.youtube.com/channel/UCg9HiItBheBjWJcOBE8q9HQ'
            className='transition-colors hover:text-[#FF0000]'
          >
            <FaYoutube size='24px' />
          </a>
          <a
            href='https://twitter.com/GlobalPayInc'
            className='transition-colors hover:text-[#1DA1F2]'
          >
            <FaTwitter size='24px' />
          </a>
          <a
            href='https://www.facebook.com/GlobalPaymentsInc'
            className='transition-colors hover:text-[#1877F2]'
          >
            <FaFacebook size='24px' />
          </a>
        </section>
        {/* Floating action button */}
        {/* <section className='fixed w-16 h-16 p-4 rounded-full shadow-lg cursor-pointer bottom-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500'>
          <svg
            aria-hidden='true'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </section> */}
      </main>
    </>
  )
}

export default App
