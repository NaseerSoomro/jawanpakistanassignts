function Input(props: any) {
    console.log(props.inputChange);
    return (
        <div>
            {/* <input onChange={props.inputChange}> </input> */}
            <input className="mb-2" placeholder={props.placeholder} onChange={props.inputChange}/>
        </div>
    )
}

export default Input; 