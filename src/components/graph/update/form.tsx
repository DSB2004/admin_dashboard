import Wrapper from "../../selectbox/wrapper"
import Input from "../../input/border_input"
import { useWidget } from "../../../context/useWidget"
import { FormEvent } from "react"
import { WidgetType } from "../../../types"
import Button from "../../button/border_button"
export default function Form({ closeAction, element }: { closeAction: Function, element: WidgetType }) {
    const { updateWidget } = useWidget()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const title = formData.get("title") as string;
        const type = formData.get("type") as string
        updateWidget({ key: element.key, title, element: type })
        closeAction()
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col mx-4 ">
                <div className="flex justify-between  gap-3 items-center my-3">
                    <span className="text-xs font-semibold hidden md:inline">Title</span>
                    <Input name="title" placeholder="Widget Title..." className="w-full md:w-80 " required defaultValue={element.title} />
                </div>

                <div className="flex justify-between  gap-3 items-center my-3">
                    <span className="text-xs font-semibold hidden md:inline">Type</span>
                    <Wrapper className="w-full md:w-80 " required name="type" defaultValue={element.element}>
                        <>
                            <option value="">Select Type</option>
                            <option value="BAR">Bar Chart</option>
                            <option value="PIE">Pie Chart</option>
                            <option value="LINE">Line Chart</option>
                            <option value="AREA">Area Chart</option></>
                    </Wrapper>
                </div>



                <div className='flex justify-end items-center my-3'>
                    <Button className='p-2  bg-yellow-500' type="submit">Add Widget</Button>
                    <Button type='button' className='p-2 text-white bg-black' onClick={() => closeAction()}>Cancel</Button>
                </div>
            </div>
        </form>
    )
}
