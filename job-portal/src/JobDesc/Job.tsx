import {IconBookmark} from '@tabler/icons-react';
import { Button,Divider,ActionIcon  } from '@mantine/core';
import {Link} from "react-router-dom";
import {card, skills, desc} from '../Data/JobDescData';
import DOMPurify from 'dompurify';

//@ts-ignore
const Job = () => {
    const data = DOMPurify.sanitize(desc) ;
    return <div className="w-2/3">
        <div className='flex justify-between mb-3'>
                    <div className='flex gap-2 items-center '>
                        <div className='p-3 bg-mine-shaft-800 rounded-xl'>
                            <img className='h-14' src={`/Icons/amazon.png`} alt={``}/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='font-semibold text-2xl'>Software Engineer</div>
                            <div className='text-lg text-mine-shaft-300'>Amazon &bull; 3 days ago &bull; 48 Applicants</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <Link to="/apply-job">
                        <Button size="sm" color="brightSun.4" variant="light">Apply</Button>
                        </Link>
                        
                        <IconBookmark className='text-bright-sun-400 cursor-pointer' stroke={1.5}/>
                    </div>
                </div>
                <Divider my="xl" />
                <div className='flex justify-between'>
                {
                        card.map((item:any,index:number) => <div key={index} className='flex  flex-col items-center gap-1'>

                        <ActionIcon color="brightSun.4" className='!h-12 !w-12' variant="light" radius="xl" aria-label="Settings"> 
                        <item.icon className='h-4/5 w-4/5' stroke={1.5} />
                        </ActionIcon>
                        <div className='text-sm text-mine-shaft-300'>{item.name}</div>
                        <div className='font-semibold'>{item.value}</div>
                </div>)
                }
            </div>
            <Divider my="xl" />
            <div>
                <div className='text-xl font-semibold mb-5'>Required Skills</div>
                <div className='flex flex-wrap gap-2'>
                    {
                        skills.map((item,index) => <ActionIcon key={index} color="brightSun.4" className='!h-fit font-medium  !text-sm !w-fit' p="xs" variant="light" radius="xl" aria-label="Settings">{item} </ActionIcon>)
                    }
                   
                </div>
            </div>
            <Divider my="xl" />
            <div className='[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify ' dangerouslySetInnerHTML={{__html:data}}>   
            </div>
            <Divider my="xl" />
            <div>
                <div className='text-xl font-semibold mb-5'>About Company</div>
                <div>
                    <div className='flex justify-between'>
                    <div className='flex gap-2 items-center '>
                        <div className='p-3 bg-mine-shaft-800 rounded-xl'>
                            <img className='h-8' src={`/Icons/amazon.png`} alt={``}/>
                        </div>
                        <div className='flex flex-col'>
                            <div className='font-medium text-lg'>Amazon</div>
                            <div className='text-mine-shaft-300'>10K+ employees</div>
                        </div>
                    </div>
                    <Link to="/company">
                        <Button color="brightSun.4" variant="light">Company Page</Button>
                    </Link>
                </div>
                <div className='text-mine-shaft-300 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis saepe necessitatibus dolore et quos maiores perferendis quisquam eos, velit deserunt perspiciatis eum cum nulla ab officiis culpa laudantium odio repellendus magnam at. Id ullam blanditiis voluptates deleniti fugiat animi magni!</div>
                </div>
            </div>
        </div>
}

export default Job;