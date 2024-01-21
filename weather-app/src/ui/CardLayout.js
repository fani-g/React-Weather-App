const CardLayout = (props) => {
    return (
        <div className="container p-4">
            <div className="row justify-content-center align-items-center">
                {props.children}
            </div>
        </div>
    );
}
 
export default CardLayout;