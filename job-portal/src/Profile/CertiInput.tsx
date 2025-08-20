import { TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import { Button } from "@mantine/core";
import { MonthPickerInput } from '@mantine/dates';
import {useState} from "react";

const CertiInput = (props:any)=>{
    const select = fields;
    const [issueDate , setIssueDate] = useState<string | null>(null);
    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">Add Certificate</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput label="Title" withAsterisk placeholder="Enter title"/>
            <SelectInput {...select[1]} />
        </div>

        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput withAsterisk label="Issue date" maxDate={new Date()} placeholder="Pick date"  value={issueDate} onChange={setIssueDate} valueFormat="MM/YYYY"  />
            <TextInput label="Certificate Id" withAsterisk placeholder="Enter Certificate Id"/>
        </div>

        <div className="flex gap-5">
            <Button onClick={()=>props.setEdit(false)} variant="outline" color="brightSun.4" >Save</Button>
            <Button onClick={()=>props.setEdit(false)}  variant="light" color="red.8" >Cancel</Button>
        </div>
    </div>
}

export default CertiInput;