import { Divider ,Tabs,Avatar} from "@mantine/core";
import {IconMapPin,IconBriefcase} from '@tabler/icons-react';
import AboutComp from '../CompanyPage/Company';

const Company = () => {
    return <div className="w-3/4">
    <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt=""/>
                <img className="w-36 h-36 rounded-3xl bg-mine-shaft-950 top-7 absolute left-5 border-mine-shaft-950 border-8 p-2 " src="/Icons/Google.png" alt=""/>
    
                <div className="px-3 mt-12">
                    
                    <div className='text-3xl font-semibold flex justify-between'>Google
                        <Avatar.Group>
                        <Avatar src="avatar.png" />
                        <Avatar src="avatar1.png" />
                        <Avatar src="avatar2.png" />
                        <Avatar>+5</Avatar>
                        </Avatar.Group>
                    </div>
                    <div className='text-xl flex gap-1 items-center'><IconBriefcase className="h-5 w-5" stroke={1.5}/>Software Engineer</div>
                    <div className='flex gap-1 text-lg items-center text-mine-shaft-400'>
                    <IconMapPin className="h-5 w-5"stroke={1.5}/>new york , UNited states
                    </div>
                </div>
                <Divider my="xl"/>
                <div>
                    <Tabs variant="outline" radius="lg" defaultValue="about" >
                        <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data_active='true']]:text-bright-sun-400">
                            <Tabs.Tab value="about">About</Tabs.Tab>
                            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                            <Tabs.Tab value="employees">Employees</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="about"><AboutComp /></Tabs.Panel>
                        <Tabs.Panel value="jobs">Second panel</Tabs.Panel>
                        <Tabs.Panel value="employees">Emp</Tabs.Panel>
                    </Tabs>
                </div>
        </div>
    </div>
}

export default Company;