import {Link} from "react-router-dom";
import "./contribution.css"
function Contribution() {

    const check = {
        margin:"20px",
        color:"white",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '40vh',
    }
    return (
        <section>
            <div className={""} style={check}>
                <h3>Currently working on this page</h3>
                <p>Mean while checkout <Link to={"https://github.com/ajaynegi45/Uttarakhand-Culture-Preservation-Project"} style={{color: "#FF9800", textDecoration:"underline"}}>Github</Link></p>
            </div>
        </section>
    );
}

export default Contribution;