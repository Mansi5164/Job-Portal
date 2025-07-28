import {Link} from "react-router-dom";
import {IconArrowLeft} from '@tabler/icons-react';
import {Button} from '@mantine/core';
import ApplyJobComp from '../ApplyJobComp/ApplyJobComp';

const ApplyJobPage = ()=>{
    return <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className='my-4 inline-block' to="/jobs">
                <Button color="brightSun.4" leftSection={<IconArrowLeft size={20}/>} variant="light" >Back</Button>
            </Link>
            <ApplyJobComp />
        </div>
}

export default ApplyJobPage;