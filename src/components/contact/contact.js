import './contact.css';

function Contact() {
  return (
    <div className='flex flex-col justify-center my-10' id='contact'>
      <h1 className='font-bold text-xl mb-4'>Contact</h1>
      <div className='form-card flex justify-center'>
        <form
          action='submit'
          className='flex flex-col text-left w-full md:w-1/2 lg:w-1/3 mx-4'
        >
          <label htmlFor='name' className='name ml-1 font-bold'>
            Name
          </label>
          <input
            type='text'
            className='name my-2 rounded-xl p-2 focus:outline-none'
          />
          <label htmlFor='email' className='email-label ml-1 font-bold'>
            Email
          </label>
          <input
            type='email'
            className='email-input my-2 rounded-xl p-2 focus:outline-none'
          />
          <label htmlFor='message' className='message-label ml-1 font-bold'>
            Message
          </label>
          <textarea
            name='message-area'
            id='message-area'
            cols='30'
            rows='5'
            className=' my-2 rounded-xl p-2 focus:outline-none'
          ></textarea>
          <div className='btn-container flex justify-center'>
            <button className='submit-btn mt-2 py-2 px-4 items-center rounded-lg cursor-pointer'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
