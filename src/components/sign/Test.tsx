
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import DeskTop from "./DeskTop";

const Test = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Open Modal
            </button>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: '55%' }}>
                    <div className="modal-content">
                        <div className="modal-header  text-center">
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
    );
};

export default Test;
