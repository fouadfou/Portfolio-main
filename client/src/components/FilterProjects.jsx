import {useEffect} from 'react'


const FilterProjects = ({setActive ,activeItem ,projects ,filtred ,setFiltred , setProjectsToShow ,setShowMoreInfo}) => {
    
    
    const handleItemClick = (item) => {
        /* setShowMoreInfo({

            showState: false,
            clickedButtonIndex: null,
          }); */
    
        setActive(item);
    };

    useEffect(() => {

        const sr =  ScrollReveal({
            origin: 'bottom',
            distance: '50px',
            duration:500,
            reset:false,
        });
        sr.reveal('.project', {
            interval:100
        });
    
    }, [])



    useEffect(() => {
        
        if(activeItem !== 'All') {
            const filtredProj = projects.filter((proj) => {
                
                return proj.type === activeItem;
            })
            

            setFiltred(filtredProj)

        } else {
            setFiltred(projects)
        }

        setProjectsToShow(6)
        


    }, [activeItem]) 
    

        
    
    
    return (

        <ul   className='ml-2  w-full px-[7rem]  flex md:gap-8 gap-8 md:flex-row flex-col md:justify-center   items-center'>
            <li   className={`select-none w-fit whitespace-nowrap text-center text-sm font-bold cursor-pointer transform  duration-300  hover:scale-105 ${activeItem === 'All' ? 'text-[#FFBF00]' : ''} animate-fadeInUp delay-100`}
                onClick={() => handleItemClick('All')}>All</li>
            <li className={`select-none w-fit  whitespace-nowrap text-center text-sm font-bold cursor-pointer transform  duration-300  hover:scale-105 ${activeItem === 'Web' ? 'text-[#FFBF00]' : ''}`}
                onClick={() => handleItemClick('Web')}>Web Development</li>
            <li  className={`select-none w-fit  whitespace-nowrap text-center text-sm font-bold cursor-pointer transform  duration-300  hover:scale-105 ${activeItem === 'Design' ? 'text-[#FFBF00]' : ''}`}
                onClick={() => handleItemClick('Design')}>UI/UX Design</li>
            <li  className={`select-none w-fit  whitespace-nowrap text-center text-sm font-bold cursor-pointer transform  duration-300  hover:scale-105 ${activeItem === 'Additional Expertise' ? 'text-[#FFBF00]' : ''}`}
                onClick={() => handleItemClick('Additional Expertise')}>Additional Expertise</li>
                
            
        </ul>

    )
}

export default FilterProjects