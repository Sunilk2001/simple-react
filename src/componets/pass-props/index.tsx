import { useState } from "react"
import HelloWorld from "../hello-world";

const PassProps = ({ handleProps }: { handleProps: (data: string) => void }) => {

    const [value, setValue] = useState<string>('');
    const [storeData, setStoreData] = useState('');

    return (
        <div className="row">
            <div className="col-md-3">
                <label className="form-label">Write something</label><br />
                <input className="form-control" type="text" value={value} onChange={(event) => {
                    // console.log('event ::', event.target.value)
                    const newValue = event.target.value;
                    setValue(newValue)
                }} />
            </div>
            <div className="col-md-12 mt-1">
                <label htmlFor="">&nbsp;</label>
                <button className="btn btn-success" onClick={() => {
                    handleProps(value)
                    setStoreData(value)
                }}>
                    Click me
                </button>
            </div>

            <HelloWorld data={storeData} />
        </div>
    )
}

export default PassProps