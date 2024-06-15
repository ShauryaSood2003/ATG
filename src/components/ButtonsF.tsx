
const ButtonsF = () => {
    return (
        <div className="d-flex my-2 align-items-center">
           
            <button className="btn btn-outline-secondary" aria-label="write-post">
                Write Post
                <Down/>
            </button>
                
           
            <button className="btn btn-primary ms-2 d-flex align-items-center" aria-label="Join group">
                <Friends/>
                Join Group
            </button>
        </div>
    );
};
const Friends=()=>{
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="20" height="20" stroke="currentColor" className="size-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
  </svg>
}
const Down=()=>{
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="20" height="20" stroke="currentColor" className="size-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
  
}

export default ButtonsF;
