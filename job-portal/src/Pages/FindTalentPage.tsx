import SearchBar from "../FindTalent/SearchBar";
import { Divider } from '@mantine/core';
import Talents from "../FindTalent/Talents";

const FindTalentPage = () => {
    return <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] ">
               
                <SearchBar />
                <Divider size="xs" mb="10" />
                <Talents />
        </div>
}

export default FindTalentPage;