
interface HeaderProps{
    label:string,
    author:string,
    designation:string
}

export const Quote = ({label, author, designation}:HeaderProps) => {
    return(<>

        <div className="flex flex-col justify-center h-screen bg-slate-200 shadow-lg items-center">
            <div className="flex justify-center">
                <div className="max-w-lg">
                    <div className="text-2xl font-bold">"{label}"</div>
                    <div className="text-left text-lg font-semibold">{author}</div>   
                    <div className="text-left text-slate-400">{designation}</div>
                </div>
            </div>
          
        </div>

    </>

    )
}