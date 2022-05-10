import Sidebar from "./components/sidebar/Sidebar";
import {Table} from "react-bootstrap";
import './admin.scss'
const Admin = () => {
    return(
        <div className="home">
            <Sidebar />
            <div className="homeContainer">

                <div className="charts">
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    )



}
export default Admin