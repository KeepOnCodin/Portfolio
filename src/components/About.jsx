import React from 'react' //rafce

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
            </div>
            <div></div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Yusuf, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I am passionate college student majoring in Cloud Computing.
                        Proficient in Java, JavaScript/node.js, Python, and C#, I'm skilled in creating REST APIs, 
                        database management, and cloud deployment.
                         I'm dedicated to leveraging my technical and interpersonal skills to drive impactful solutions.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About