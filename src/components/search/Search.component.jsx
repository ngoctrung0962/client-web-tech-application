import {forwardRef, useEffect} from "react";
function Search(props, ref) {
    
    const handleCloseBtnSearch = () =>{
        const btnClose = document.querySelector(".search-model");
        btnClose.style.display = "none";
    }
    return (
        <div className="search-model" ref={ref}>
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="search-close-switch" onClick={handleCloseBtnSearch}>+</div>
                <form className="search-model-form">
                    <input type="text" id="search-input" placeholder="Search here....." />
                </form>
            </div>
        </div>
    )
}

export default forwardRef(Search);