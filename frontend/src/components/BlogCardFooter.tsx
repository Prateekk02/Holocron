interface BlogCardFooterProps{
    content: string
}

export const BlogCardFooter = ({content} : BlogCardFooterProps) =>{
    return<>
        <div className="grid grid-cols-12 ">
            <div className="col-span-2 text-slate-500 p-3 ml-5 rounded-2xl text-sm">{Math.ceil(content.length/100)} min read</div>    
            <div className="col-span-7"></div>
            <div className="col-span-1">
                <button data-tooltip-target="tooltip-bookmark" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:scale-125 transition-all duration-500 cursor-pointer">
                    <svg className="w-5 h-5 mb-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"></path>
                    </svg>
                        <span className="sr-only">Bookmark</span>
                </button>
            </div>
            <div className="col-span-1">
                <button data-tooltip-target="tooltip-bookmark" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:scale-125 transition-all duration-500 cursor-pointer">
                    <svg className="w-5 h-5 mb-1" xmlns="http://www.w3.org/2000/svg"  width="100" height="100" viewBox="0 0 100 100" id="minus">
                        <g id="_x37_7_Essential_Icons">
                            <path id="Minus" d="M72 50c0 1.1-.9 2-2 2H30c-1.1 0-2-.9-2-2s.9-2 2-2h40c1.1 0 2 .9 2 2zm16 0c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z"></path>
                        </g>
                        <g id="Info">
                            <path id="BORDER" fill="#00F" d="M1364-1210V474H-420v-1684h1784m8-8H-428V482h1800v-1700z"></path>
                        </g>
                    </svg>
                        <span className="sr-only">Report</span>
                </button>
            </div>
            <div className="col-span-1">
                <button data-tooltip-target="tooltip-bookmark" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:scale-125 transition-all duration-500 cursor-pointer">
                    <svg className="w-5 h-5 mb-1"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="menu">
                        <circle cx="8.02" cy="32" r="4" fill="#010101"></circle>
                        <circle cx="32.16" cy="32" r="4" fill="#010101"></circle>
                        <circle cx="55.98" cy="32" r="4" fill="#010101"></circle>
                    </svg>
                    <span className="sr-only">Menu</span>
                </button>  
            </div>
        </div>    
                   
    </>
}