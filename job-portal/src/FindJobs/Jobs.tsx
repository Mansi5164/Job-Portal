import Sort from './Sort'
import JobCard from './JobCard';
import { jobList } from '../Data/JobsData';
const Jobs = () => {
    return <div className='p-4'>
            <div className='flex justify-between'>
                <div className='text-2xl font-semibold'>Recommended Jobs</div>
                <Sort />
            </div>
            <div className='mt-10 flex flex-wrap gap-5 justify-between'>
                {
                    jobList.map((job,index) => <JobCard key={index} {...job}/>)
                }
            </div>
    </div>
}

export default Jobs; 