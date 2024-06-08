import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='container p-6 mx-auto px-36 pt-40'>
      <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
      <p className='mb-6'>
        We value your feedback and are here to assist you with any questions or concerns you may have. Please use the contact information below to get in touch with us.
      </p>

      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>Our Office</h2>
        <p className='mb-4 flex items-center'>
          <HiLocationMarker className='mr-2' />
          <span>
            Selam Bus S.C. Headquarters
            <br />
            Addis Ababa, Ethiopia
          </span>
        </p>
      </div>

      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>Customer Service</h2>
        <p className='mb-4 flex items-center'>
          <HiPhone className='mr-2' />
          <span>+251-11-123-4567</span>
        </p>
        <p className='mb-4 flex items-center'>
          <HiMail className='mr-2' />
          <span>info@selambus.com</span>
        </p>
      </div>

      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>Follow Us</h2>
        <p className='mb-4'>Stay connected with us through our social media channels:</p>
        <ul className='flex'>
          <li className='mr-4'>
            <a href="https://www.facebook.com/selambus" className='text-blue-500 hover:text-blue-700'>
              <FaFacebook className='text-xl' />
            </a>
          </li>
          <li className='mr-4'>
            <a href="https://www.twitter.com/selambus" className='text-blue-500 hover:text-blue-700'>
              <FaTwitter className='text-xl' />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/selambus" className='text-blue-500 hover:text-blue-700'>
              <FaInstagram className='text-xl' />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className='text-2xl font-semibold mb-2'>Send Us a Message</h2>
        <form>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2' htmlFor='name'>Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Your name' />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2' htmlFor='email'>Email</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Your email' />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2' htmlFor='message'>Message</label>
            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='message' placeholder='Your message' rows='5'></textarea>
          </div>
          <div className='mb-4'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
