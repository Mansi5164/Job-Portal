import TalentCard from "../FindTalent/TalentCard";
import {talents} from "../Data/TalentData"

const RecommendedTalent = () =>{
    return <div>
        <div className="text-xl font-semibold mb-5">Recommend Talent</div>
        <div className="flex flex-col flex-wrap gap-5">
            {
            talents.map((talent, index) =>index<4 && <TalentCard key={index} {...talent} />
            )}
        </div>
    </div>
}

export default RecommendedTalent;