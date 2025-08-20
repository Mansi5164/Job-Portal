import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import { useState } from "react";
import { MonthPickerInput } from '@mantine/dates';
import { Checkbox, Textarea,Button } from "@mantine/core";

const ExpInput = (props:any)=>{
    const select = fields;
    const [startDate,setstartDate] = useState<Date | null>(new Date());
    const [endDate,setEndDate] = useState<Date | null>(new Date());
    const [checked,setChecked] = useState(false);
    const [desc,setDesc] = useState("As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.");

    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold"> {props.add?"Add" : "Edit"} Experience</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />

        <Textarea withAsterisk label="Summary" value={desc} placeholder="Enter summary..." autosize minRows={3} onChange={(event) => setDesc(event.currentTarget.value)}/>
            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput withAsterisk label="Start date" maxDate={endDate || undefined}
                placeholder="Pick date"
                value={startDate}
                onChange={(value) => setstartDate(value ? new Date(value) : null)}
                />
                <MonthPickerInput disabled={checked} withAsterisk label="End date" minDate={startDate || undefined} maxDate={new Date()}
                placeholder="Pick date"
                value={endDate}
                onChange={(value) => setEndDate(value ? new Date(value) : null)}
                />
            </div>
            <Checkbox checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} autoContrast label="Currently Working here"/>
                <div className="flex gap-5">
                                    <Button onClick={()=>props.setEdit(false)} variant="outline" color="brightSun.4" >Save</Button>
                                    <Button onClick={()=>props.setEdit(false)}  variant="light" color="red.8" >Cancel</Button>
                                </div>
    </div>
}

export default ExpInput;