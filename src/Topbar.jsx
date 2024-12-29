import link1 from './App'
import './Topbar.css'
const topbar = () => {
    return (
        <div className="topbar">
            <div className="banner">
    <a href="#"><img src="./src/images/konachan.png" alt="banner"/></a>
        </div>
        <div className="top-links">
            <a href="">My account</a>
            <a href="">Posts</a>
            <a href="">Comments</a>
            <a href="">Notes</a>
            <a href="">Artists</a>
            <a href="">Tags</a>
            <a href="">Explicit</a>
            <a href="">Pools</a>
            <a href="">Wiki</a>
            <a href="">Forum</a>
            <a href="">Help</a>
            <a href="">More </a>
        </div>
        </div>
    );
}
 
export default topbar;