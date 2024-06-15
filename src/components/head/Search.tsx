

const Search = () => {
    return (
        <form className="d-flex bg-light" style={{ width: '360px', borderRadius: '21px', border: '1px solid #ced4da', overflow: 'hidden' }}>
            <button className="btn" type="submit" style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem' }}>
                <img 
                    alt="Search" 
                    src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png" 
                    width="22" 
                    height="22" 
                />
            </button>
            <input 
                className="form-control border-0 bg-light " 
                type="search" 
                placeholder="Search for your favorite groups in ATG" 
                aria-label="Search"
                style={{ boxShadow: 'none' }}
            />
        </form>
    );
}

export default Search;
