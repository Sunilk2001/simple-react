import { useState } from "react"
import Card from "./card";
import Alert from "./alert";

const Day2 = () => {

    const [variable, setVariable] = useState('');
    const [variable1, setVariable1] = useState('');

    const onSubmitClick = () => {
        setVariable1(variable);
        console.log(variable);
        if (variable === 'card') {
            console.log('Card')
        } else if (variable === 'alert') {
            console.log('alert')
        }
    }

    // if (variable1 === 'card') {
    //     return <Card />
    // }

    return (
        <div className="mt-3">
            <input type="text" value={variable} onChange={(event) => setVariable(event.target.value)} />
            <button onClick={onSubmitClick}>onSubmitClick</button>
            {/* {variable1 === 'card' ? <Card /> : variable1 === 'alert' ? <Alert /> : ''} */}
            {variable1 === 'card' && <Card />}
            {variable1 === 'alert' && <Alert />}
        </div>
    )
}

export default Day2