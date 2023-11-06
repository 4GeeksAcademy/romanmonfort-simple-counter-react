import React from "react";
import Proptypes from 'prop-types'



//create your first component
const Secoundcounter = (props) => {
	return (
		<div className="container ">
			<div className="row bg-dark text-white text-center ">
				<div className="col d-flex align-items-center justify-content-center">
					<i className="far fa-clock"></i>
				</div>
				<div className="col d-flex align-items-center justify-content-center">
					<h1 className="">{Math.floor((props.seconds) / 36000)}</h1>
				</div>
				<div className="col d-flex align-items-center justify-content-center">
					<h1 className="">{Math.floor((props.seconds) / 3600) % 10}</h1>
				</div>
				<div className="col-1 d-flex align-items-center justify-content-center">:</div>
				<div className="col d-flex align-items-center justify-content-center">
					<h1 className="">{Math.floor(((props.seconds) / 600) % 6)}</h1>
				</div>
				<div className="col d-flex align-items-center justify-content-center">
					<h1 className="">{Math.floor((props.seconds) / 60) % 10}</h1>
				</div>
				<div className="col-1 d-flex align-items-center justify-content-center">:</div>
				<div className="col d-flex align-items-center justify-content-center">
					<h1 className="" MaxLength="1" >{Math.floor(((props.seconds) / 10) % 6)}</h1>
				</div>
				<div className="col d-flex align-items-center justify-content-center">
					<h1 className="">{Math.floor((props.seconds) % 10)}</h1>
				</div>


			</div>
		</div>


	);
};

Secoundcounter.propTypes = {
	seconds: Proptypes.number
}


export default Secoundcounter;
