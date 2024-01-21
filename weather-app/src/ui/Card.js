const Card = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-5 ">
            <div className="card bg-light m-2 shadow">
                {props.children}
            </div>  
        </div>  
    );
}
 
export default Card;