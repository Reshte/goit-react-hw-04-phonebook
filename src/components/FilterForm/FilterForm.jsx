import { PropTypes } from 'prop-types';
import {Input, Label, Wrapper} from './FilterForm.styled'

export const FilterForm = ({ value, onChange }) => {
       return (
        <Wrapper>
            <Label htmlFor="">Find contacts name
                <Input type="text" value={value} onChange={onChange} />
            </Label>
        </Wrapper>
    )
}

FilterForm.proptype ={
    value:PropTypes.array,
    onChange:PropTypes.func,
}