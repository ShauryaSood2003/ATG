import DeskTop from "./sign/DeskTop"

const SignToggle=({text}:{text:string})=>{
    return(
        <div>
            {
                
                text=="header"?
                <p className="fw-bold text-primary text-decoration-underline " data-bs-toggle="modal" data-bs-target="#exampleModal">It's Free!</p>
                :
                <button className="rounded-circle p-4 d-block d-lg-none btn btn-danger position-fixed bottom-0 end-0 m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <Pen/>
                </button>

            }

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h5 className="modal-title text-success fs-6" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <DeskTop/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
const Pen=()=>{
    return <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
  </svg>
  
}
export default SignToggle;