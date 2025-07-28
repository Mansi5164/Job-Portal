import { useNavigate} from 'react-router-dom';
import {Button, Divider} from '@mantine/core';
import {IconArrowLeft} from '@tabler/icons-react';
import Company from '../CompanyPage/Company';

const CompanyPage = () => {
    const navigate = useNavigate();
    return <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Divider size="xs"/>
                <Button leftSection={<IconArrowLeft size={20}/>} my="md" color="brightSun.4" onClick={()=>navigate(-1)} variant="light" >Back</Button>
             
            <div className='flex gap-5 '>
                <Company />
            </div>
        </div>
}

export default CompanyPage;