import React, {useState} from 'react';

const useSelect = (initState, options) => {

    //custom hook state
    const [state, setState] = useState(initState);

    const NewsSelect =  () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
            >
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );

    return [state, NewsSelect];
}
 
export default useSelect;