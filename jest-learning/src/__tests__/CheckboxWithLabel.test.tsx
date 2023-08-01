import { fireEvent, render} from "@testing-library/react"
import CheckboxWithLabel from '@/components/Checkbox'

it('Checkbox with label changes text after click', ()=>{
    const {queryByLabelText, getByLabelText} = render(
        <CheckboxWithLabel labelOff={"off"} labelOn={"On"}/>
    )

    expect(queryByLabelText(/off/i)).toBeTruthy()

    fireEvent.click(getByLabelText(/off/i))

    expect(queryByLabelText(/On/i)).toBeTruthy()
})