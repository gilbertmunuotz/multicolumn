import image1 from './Images/Img1.jpg'
import image2 from './Images/Img2.jpg'
import image3 from "./Images/Img3.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="font-serif text-4xl border-b-2 my-5 mx-6 mobile:text-center pb-3 tablet:text-left laptop:text-right desktop:text-right">Metro Gym</h1>
      </header>
      <main className="max-w-screen-2xl mobile:block mx-20 my-10 tablet: grid gap-6 laptop:grid-cols-3">
        <article className="my-5">
          <img src={image1} alt="article img" className='rounded-lg' />
          <div>
            <h2 className='font-serif text-4xl'>Believe In Magic</h2>
            <p className=''>
              The Importance of Physical Health: A Guide to a Healthier You Physical health is the cornerstone of a happy and fulfilling life. It's not just about the absence of disease, but about having the energy and strength to live life to the fullest. It's about feeling good about yourself and having the confidence to take on new challenges.
            </p>
          </div>
        </article>
        <article className='my-5 '>
          <img src={image2} alt="article img" className='rounded-lg' />
          <div>
            <h3 className='font-serif text-4xl'>Metal Health</h3>
            <p>
              Taking care of your physical health is one of the best investments you can make in your overall well-being. By making healthy choices and incorporating regular exercise into your life, you can improve your physical health, mental health, and quality of life.
            </p>
          </div>
        </article>
        <article className='my-5'>
          <img src={image3} alt="article img" className='rounded-lg' />
          <div>
            <h3 className='font-serif text-4xl'>Your Patner Freedom</h3>
            <p>
              Physical health is essential for a happy and fulfilling life. By making healthy choices and incorporating regular exercise into your life, you can improve your physical health and mental well-being. It is important to remember that small changes can add up to big results over time. So start today and make a commitment to your physical health. You'll be glad you did!
            </p>
          </div>
        </article>
        <article className='my-5'>
          <img src={image3} alt="article img" className='rounded-lg' />
          <div>
            <h3 className='font-serif text-4xl'>Consistency</h3>
            <p>
              Physical health is an important part of overall health and well-being. By making small changes to your daily routine, you can improve your physical health and reduce your risk of chronic diseases.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
