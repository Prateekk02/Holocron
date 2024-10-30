interface HeaderProps{
    label:string
}

export const Heading = ({label} :HeaderProps) =>{
    return (<>
        <h1 className="text-3xl text-center font-bold text-black">{label}</h1>

    </>)
}