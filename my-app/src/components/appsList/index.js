import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon3.png"
import icon4 from "../../images/icon4.png"
function AppsList() {
    return (
        <>
            <ul>
                <li>
                    <img src={icon1} />
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </li>
                <li>
                    <img src={icon2} />
                    <h3>Component</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </li>
                <li>
                    <img src={icon3} />
                    <h3>Single Way</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </li>
                <li>
                    <img src={icon4} />
                    <h3>JSX</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </li>
            </ul>
        </>
    )
}
export default AppsList;