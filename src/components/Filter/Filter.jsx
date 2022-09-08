import { nanoid } from "nanoid";
import {Input, Label, FormStyled} from 'components/Form/Form.styled'


export default function Filter({value, onChange}) {
    const filterId = nanoid();
    return (
        <FormStyled>
        <Label htmlFor="">
            Find contacts by name
        </Label>
            <Input
                id={filterId}   
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
                autoComplete="off"
                />
        </FormStyled>
    )
}