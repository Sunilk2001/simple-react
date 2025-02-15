const HelloWorld = ({ data }: { data: string }) => {

    return (
        <div className="mt-5">
            Hello :: <strong>{data}</strong>
        </div>
    )
}

export default HelloWorld