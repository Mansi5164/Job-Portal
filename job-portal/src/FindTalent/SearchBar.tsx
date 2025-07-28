// import { dropdownData } from "../Data/JobsData";
import {IconUserCircle} from '@tabler/icons-react';
import { Divider,Input } from '@mantine/core';
import MultiInput from "../FindJobs/MultiInput";
import { useState } from 'react';
import { RangeSlider } from '@mantine/core';
import { searchFields } from "../Data/TalentData";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return (
    <div className="px-5 py-8 items-center !text-mine-shaft-100 flex">
            <div className='flex items-center'>
                <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2"><IconUserCircle size={20}/></div>
                <Input className='[&_input]:!placeholder-mine-shaft-300' variant="unstyled" placeholder="Talent Name" />
            </div>
        {
            searchFields.map((item,index)=><>
                <div key={index} className="w-1/5">
                    <MultiInput {...item} />
                </div>
                <Divider mr="xs" size="xs" orientation="vertical" />
            </>)
        }
        <div className="w-1/5 [&_.mantine_Slider_label]:!translate-y-9">
        <div className="flex text-sm justify-between">
            <div>Salary</div>
            <div> &#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
        </div>
            <RangeSlider color="brightSun.4" size="xs" value={value} labelTransitionProps={{
                transition: 'skew-down',
                duration: 150,
                timingFunction: 'linear',
                }}  onChange={setValue} />
        </div>
        
    </div>)
}

export default SearchBar;