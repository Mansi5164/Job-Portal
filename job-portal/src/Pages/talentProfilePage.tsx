import { Divider,Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import {Link} from 'react-router-dom';
import Profile from '../TalentProfile/Profile';
import {profile} from '../Data/TalentData';
import RecommendedTalent from '../TalentProfile/RecommendTalent';

const talentProfilePage = () => {
    return <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            {/* <Divider size="xs"/> */}
               <Link className='my-4 inline-block' to="/find-talent">
                    <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" variant="light" >Back</Button>
                </Link>
            {/* <Divider size="xs"/> */}
            <div className='flex gap-5 '>
                <Profile {...profile}/>
                <RecommendedTalent />
            </div>
        </div>
}

export default talentProfilePage;