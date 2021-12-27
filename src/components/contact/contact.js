import './contact.css';
import * as emailjs from 'emailjs-com';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    const button = document.getElementById('submitBtn');
    const errorText = document.getElementById('errorText');
    const successText = document.getElementById('successText');
    const emptyText = document.getElementById('emptyText');
    errorText.classList.remove('show');
    successText.classList.remove('show');
    emptyText.classList.remove('show');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message-area').value;

    if (name === '' || email === '' || message === '') {
      return emptyText.classList.add('show');
    }

    button.innerHTML = 'Sending...';
    button.disabled = true;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID.toString(),
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID.toString(),
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID.toString()
      )
      .then(
        (result) => {
          console.log(result.text);
          successText.classList.add('show');
        },
        (error) => {
          console.log(error.text);
          errorText.classList.add('show');
        }
      );
    button.innerHTML = 'Submit';
    button.disabled = false;
    e.target.reset();
  };

  return (
    <div className='flex flex-col justify-center my-10' id='contact'>
      <h1 className='font-bold text-xl mb-4'>Contact</h1>
      <div className='form-card flex justify-center'>
        <form
          action='submit'
          className='flex flex-col text-left w-full md:w-1/2 lg:w-1/3 mx-4'
          onSubmit={sendEmail}
        >
          <label htmlFor='name' className='name ml-1 font-bold'>
            Name
          </label>
          <input
            type='text'
            className='name my-2 rounded-xl p-2 focus:outline-none'
            name='contact_name'
            id='name'
          />
          <label htmlFor='email' className='email-label ml-1 font-bold'>
            Email
          </label>
          <input
            type='email'
            className='email-input my-2 rounded-xl p-2 focus:outline-none'
            name='contact_email'
            id='email'
          />
          <label
            htmlFor='message-area'
            className='message-label ml-1 font-bold'
          >
            Message
          </label>
          <textarea
            name='message-area'
            id='message-area'
            cols='30'
            rows='5'
            className=' my-2 rounded-xl p-2 focus:outline-none'
          ></textarea>
          <div className='btn-container flex flex-col items-center'>
            <button
              className='submit-btn mt-2 py-2 px-4 items-center rounded-lg cursor-pointer'
              id='submitBtn'
            >
              Submit
            </button>
            <div className='error mt-2 text-red-600 hidden' id='errorText'>
              An error has occurred, please try later
            </div>
            <div className='empty mt-2 text-red-600 hidden' id='emptyText'>
              Form must be filled to submit
            </div>
            <div
              className='success mt-2 text-green-600 hidden'
              id='successText'
            >
              Message sent
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
