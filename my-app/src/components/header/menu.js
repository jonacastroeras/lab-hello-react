import logo from '../../images/ironhack-logo-xs.png';
import menu from '../../images/menu-top-xs.png';
function Menu() {
    return (
        <div class="menu">
            <img src={logo} alt="Ironhack Logo" />
            <img src={menu} alt="Ironhack Menu" />
        </div>
    )
}
export default Menu;