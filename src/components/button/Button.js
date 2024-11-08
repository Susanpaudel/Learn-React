import './Button.modules.css';
import {Link} from 'react-router-dom';
function Button(props){
    return(
        <Link to={`product-single/${props.product_id}`} className="btn btn-primary">View Details</Link>
    );
}
export default Button