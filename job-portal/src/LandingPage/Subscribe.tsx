import { Button,TextInput } from "@mantine/core";

const Subscribe = () => {
    return <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl pb-5">

            <div className="text-4xl w-2/5 mb-3 text-center font-semibold text-mine-shaft-100">Never Wants to Miss any<span className="text-bright-sun-400">JobNews?</span></div>
            <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
                <TextInput 
                    className="[&_input]:text-mine-shaft-100 font-semibold"
                    variant="unstyled"
                    placeholder="Your@gmail.com"
                    size="xl"
                />
                <Button className="!rounded-lg" size="lg" color="brightSun.4" variant="filled">Subscribe</Button>
            </div>
    </div>
}

export default Subscribe;