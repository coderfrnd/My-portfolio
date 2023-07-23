import React from 'react';
import AchievementCard from './Achivement';
import '../Page/About.css'

const EducationCard = ({ degree, department, thesis, year, cgpa }) => {
  return (
    <div className='rounded-lg p-4 educard'>
      <div className='xl:flex yea'>
        <h3 className=' ml-6 xl:ml-0 text-xl 2xl:text-3xl xl:mt-4 aey'>{year}</h3>
        <div className=' ml-6 text-xl xl:ml-6 xl:mt-4 deg'>
         {/* <div>
        {degree}
          </div>  */}
          <p className='xl:mt-2'>{degree}</p>
          <p className='xl:mt-2'>{department}</p>
          <p className='xl:mt-2'>{thesis}</p>
      {cgpa && <p className='xl:mt-2'>CGPA: {cgpa}</p>}
        </div>
      </div>
     
    </div>
  );
};


const About = () => {
  return (
    <>
      <div className=' h-[160px]  flex flex-col justify-center text-2xl p-6 xl:rounded-lg xl:p-4 xl:h-[260px] xl:flex xl:flex-col xl:justify-start font-roboto car'>
        <div className='text-white text-4xl m-2 xl:m-0 xl:text-4xl xl:font-bold xl:rounded xl:w-[240px] xl:ml-60 xl:mt-4 xl:h-[60px] xl:p-6 res'>
          Resume
        </div>
        <div className='text-white m-1 ml-2 xl:m-0  xl:ml-60 xl:w-[490px] xl:mt-6 xl:flex xl:justify-start cv '>
          <div className='xl:text-2xl xl:mb-4 xl:ml-6'>
            Full CV and Projects list can be found{' '}
            <a href='https://drive.google.com/file/d/1HQuWSaovdWBd_TTpq13QQnXC5mKydLol/view?usp=sharing' className='underline' target='_blank' rel='noopener noreferrer'>
              here
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid white', marginTop: '17px' }}></div>

      <div className=' flex flex-col md:flex-row md:justify-center xl:flex-row xl:flex xl:justify-center xl:mt-6 md:mt-6 md:[300px]  text-white xl:h-[420px] edu'>
        <div className=' flex justify-center   xl:justify-normal rounded-lg xl:w-1/2 xl:m-4 xl:flex xl:flex-col xl:items-center  md:justify-normal  md:w-1/2 md:m-4 md:flex md:flex-col md:items-center head'>
          {/* Content for first card component */}
          <h3 className=' text-2xl mt-3 xl:text-3xl xl:font-bold xl:mt-4 education font-semibold'>Education</h3>
          {/* Additional content for the education card */}
        </div>
        <div className='flex justify-center flex-col  xl:rounded-lg xl:w-1/2 xl:m-4 careo'>
          {/* Content for the second card component */}
          <EducationCard
            year='2020 - Present :'
            degree='Bachelor of Technology (Btech)'
            department='Electronics and Instrumentation Engineering'
            thesis='I.E.T. Rohilkhand University, Bareilly'
            cgpa='7.21'
          />
          <EducationCard
            year='2016 - 2018 :'
            degree=' Senior Secondary Education'
            department='Government Inter College, Mirzapur'
          />
          <EducationCard
            year='2014 - 2016 :'
            degree=' Higher Secondary Education'
            department='Government Inter College, Mirzapur'
          />
        </div>
      </div>
      <div className='h-1' style={{ borderTop: '1px solid white', marginTop: '17px' }}></div>
      <div className='  flex justify-center flex-col md:flex-row  md:flex md:justify-center md:mt-6 text-white xl:h-[750px] md:h-[1040px] boxe'>
        <div className='  md:justify-normal w-auto h-auto flex justify-center   rounded-lg md:w-1/2 md:m-4 md:flex md:flex-col md:items-center achieve'>
          {/* Content for the first card component */}
          <h3 className=' text-2xl mt-3 md:text-3xl  md:mt-4 ment font-semibold'>Achievement</h3>
          {/* Additional content for the achievement card */}
        </div>
        <div className='md:rounded-lg md:w-1/2 md:m-4 achievecard'>
          {/* Content for the achievement card */}
          <AchievementCard
            title='Google Codejam Final Farewell Round 2023 :'
            extra='Google Code Jam is an annual programming competition organized by Google. It is a global coding competition that challenges participants to solve complex algorithmic problems within a limited timeframe'
            description='Secured 3829th rank out of 30k+ participants'
            link='https://drive.google.com/file/d/1I0aULBdPnc45F0OGCOcLsUmyZ-ne525o/view'
           
          />
          <AchievementCard
            title='Google Kickstart Round F 2022 :'
            extra='Google Kick Start is a global coding competition organized by Google. It is designed to provide coders with an opportunity to showcase their problem-solving skills and compete against other programmers from around the world'
            description='Secured 5402nd rank out of 30k+ participants'
            link='https://drive.google.com/file/d/1co_23xEIR5txEM2BiKqg-fHsESmZHLpp/view?usp=sharing'
          />
          {/* Add more AchievementCard components for other achievements */}
          <AchievementCard
            title='Codeforces :'
            description='Pupil 🟢-max(1224) '
            link='https://codeforces.com/profile/Attacker_frnd?locale=en'
          />
          <AchievementCard
            title='Codechef Starter DIV-3 :'
            description='Securing 212 Global rank in DIV-3 Codechef'
            link='https://www.codechef.com/users/noob_frnd'
          />
          <AchievementCard
            title='Hacker-rank :'
            description='5🌟 at HackerRank'
            link='https://www.hackerrank.com/informationa43?hr_r=1'
          />
        </div>
      </div>
      <div className='h-1' style={{ borderTop: '1px solid white', marginTop: '17px' }}></div>
      <div className=' flex flex-col justify-center md:flex-row md:flex md:justify-center md:mt-6 text-white xl:h-[550px] md:h-[770px] certi'>
        <div className='rounded-lg flex justify-center md:justify-normal md:w-1/2 md:m-4 md:flex md:flex-col md:items-center fication'>
          {/* Content for the first card component */}
          <h3 className=' text-2xl mt-3  md:text-3xl md:mt-4 certification font-semibold'>Certification</h3>
          {/* Additional content for the achievement card */}
        </div>
        <div className='md:rounded-lg md:w-1/2 md:m-4 ach'>
          {/* Content for the achievement card */}
          <AchievementCard
            title='Hacker-rank Problem Solving :'
            description='The HackerRank Problem Solving Certificate is a recognition of proficiency in solving algorithmic problems on the HackerRank platform It validates your skills and knowledge in problem-solving techniques, data structures, algorithms, and coding  '
            link='https://www.hackerrank.com/certificates/iframe/c4b26d938576'
           
          />
          <AchievementCard
          className='tet'
            title='Python (Basic) Certificate :'
            description='The Python (Basic) Certificate in HackerRank is a recognition of  proficiency in basic Python programming skills.'
            link='https://www.hackerrank.com/certificates/iframe/d8604966717f'
          />
          {/* Add more AchievementCard components for other achievements */}
          <AchievementCard
            title='Udemy Web Devlopment :'
            description='The Udemy web development courses cover various topics related to building websites and web applications. These courses are designed to teach you the necessary skills and technologies used in web development.'
            link='https://codeforces.com/profile/Attacker_frnd?locale=en'
          />
         {/* <div style={{ borderTop: '1px solid white', marginTop: '17px' }}></div> */}
        </div>
        {/* <div style={{ borderTop: '1px solid white', marginTop: '17px' }}></div> */}
      </div>
      <div style={{ borderTop: '1px solid white', marginTop: '17px' }}></div>
    </>
  );
};

export default About;
