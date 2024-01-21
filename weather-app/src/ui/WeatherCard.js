const WeatherCard = (props) => {
    return (
        <div className="container-lg">
              <div className='row justify-content-center'>
                <div className='col-lg-12 col-md-6 text-center p-5'>
                    {props.children}
                </div>
              </div>
        </div>
    );
}
 
export default WeatherCard;