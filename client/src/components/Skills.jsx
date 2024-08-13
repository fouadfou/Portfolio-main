import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { RiNextjsFill, RiJavascriptFill, RiJavaLine, RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoPostgresql } from 'react-icons/bi';
import { TbBrandRedux } from 'react-icons/tb';
import { SiMui, SiShadcnui, SiNextui, SiExpress, SiMongodb, SiSupabase, SiClerk } from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';
import restapi from '../../dist/assets/images/rest-api-icon.svg'; 

const Skills = () => {



  const skills = [
    { icon: FaPython, title: 'Python', color: '#3776AB' },
    { icon: RiJavaLine, title: 'Java', color: '#007396' },
    { icon: FaHtml5, title: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, title: 'CSS', color: '#1572B6' },
    { icon: RiJavascriptFill, title: 'JavaScript', color: '#F7DF1E' },
    { icon: BiLogoTypescript, title: 'TypeScript', color: '#3178C6' },
    { icon: FaReact, title: 'React', color: '#61DAFB' },
    { icon: RiNextjsFill, title: 'Next.js', color: '#000000' },
    { icon: TbBrandRedux, title: 'Redux', color: '#764ABC' },
    { icon: RiTailwindCssFill, title: 'Tailwind', color: '#38B2AC' },
    { icon: FaBootstrap, title: 'Bootstrap', color: '#7952B3' },
    { icon: SiMui, title: 'Material UI', color: '#0081CB' },
    { icon: SiShadcnui, title: 'Shadcn UI', color: '#38B2AC' },
    { icon: AiOutlineAntDesign, title: 'Ant Design', color: '#0170FE' },
    { icon: SiNextui, title: 'NextUI', color: '#000000' }
  ];

  const backendSkills = [
    { icon: FaNodeJs, title: 'Node.js', color: '#339933' },
    { icon: SiExpress, title: 'Express.js', color: '#000000' },
    { icon: null , title: 'RESTful APIs', color: '#000000' , image:restapi}
  ];

  const dbSkills = [
    { icon: GrMysql, title: 'MySQL', color: '#4479A1' },
    { icon: SiMongodb, title: 'MongoDB', color: '#47A248' },
    { icon: BiLogoPostgresql, title: 'PostgreSQL', color: '#336791' }
  ];

  const tools = [
    { icon: FaGitAlt, title: 'Git', color: '#F05032' },
    { icon: SiSupabase, title: 'Supabase', color: '#3ECF8E' },
    { icon: SiClerk, title: 'Clerk', color: '#000000' }
  ];

  return (
    <div className='relative flex flex-col items-center justify-center pb-[5rem]'>
      <div className='bg-[#F7F7F8] absolute w-full h-1/2 bottom-1/2 translate-y-1/3'></div>
      <div className='z-40 h-auto bg-background-gray w-[88%] rounded-lg shadow-2xl p-2'>
        <div className='bg-white rounded-md border-[3px] border-opacity-70 border-[#FFBF00] w-full h-fit flex md:flex-row flex-col flex-wrap px-[6%] py-[50px]'>
          <div className='relative h-fit w-full text-center'>
            <span className='z-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl font-extrabold font-Comic text-[#E8E8E8]'>Skills</span>
            <h2 className='z-20 relative font-semibold text-[34px]'>My Skills</h2>
          </div>
          <p className='text-black mb-8 mt-2 w-full text-center'>Here are my skills to represent my expertise</p>

          <h2 className='w-full font-bold text-lg text-center my-6 bg-background-gray py-2 rounded'>Languages, Libraries & Frameworks</h2>
          <div className='w-full flex flex-wrap justify-center gap-6'>
            {skills.map((skill, index) => (
              <div key={index} className='flex flex-col items-center justify-center'>
                <skill.icon className='text-[32px]' style={{ color: skill.color }} />
                <p className='font-semibold text-sm mt-2'>{skill.title}</p>
              </div>
            ))}
          </div>

          <h2 className='w-full font-bold text-lg text-center my-6 bg-background-gray py-2 rounded'>Backend Development</h2>
          <div className='w-full flex flex-wrap justify-center gap-6'>
            {backendSkills.map((skill, index) => (
              <div key={index} className='flex flex-col items-center justify-center'>
                 {skill.icon ? (
                  <skill.icon className='text-[32px]' style={{ color: skill.color }} />
                ) : (
                  <img src={skill.image.src} alt={skill.title} className='w-10 h-10' />
                
                
                )}
                <p className='font-semibold text-sm mt-2'>{skill.title}</p>
              </div>
            ))}
          </div>

          <h2 className='w-full font-bold text-lg text-center my-6 bg-background-gray py-2 rounded'>Database Management Systems</h2>
          <div className='w-full flex flex-wrap justify-center gap-6'>
            {dbSkills.map((skill, index) => (
              <div key={index} className='flex flex-col items-center justify-center'>
                 {skill.icon ? (
                  <skill.icon className='text-[32px]' style={{ color: skill.color }} />
                ) : (
                  <img src={skill.image} alt={skill.title} className='w-10 h-10' />
                )}
                <p className='font-semibold text-sm mt-2'>{skill.title}</p>
              </div>
            ))}
          </div>

          <h2 className='w-full font-bold text-lg text-center my-6 bg-background-gray py-2 rounded'>Tools & Platforms</h2>
          <div className='w-full flex flex-wrap justify-center gap-6'>
            {tools.map((tool, index) => (
              <div key={index} className='flex flex-col items-center justify-center'>
                <tool.icon className='text-[32px]' style={{ color: tool.color }} />
                <p className='font-semibold text-sm mt-2'>{tool.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
