import "./index.css"

const Dashboard = () => {
    const getCustmerDetails = JSON.parse(localStorage.getItem("productDetails"))
     
    let totalbalance = 0
    if (getCustmerDetails !== null) {
        getCustmerDetails.map((item) => {
            return   totalbalance += item.dealPrice * item.quantity
          })
    }
      
    
     
    return (
    <div className="dashboard-container">
        <div className="dashboard-item">
            <div>
                <h3>Total balance</h3>
                <img className="totalBalance-img" alt="totalBalance" src="https://res.cloudinary.com/dqkjtjb9x/image/upload/v1741330869/balance-10_bba2aj.png" />
            </div>
            <h2 className="counts">{totalbalance}</h2>
        </div>
        <div className="dashboard-item">
            <div>
                <h3>Total Products</h3>
                <img className="totalBalance-img" alt="totalproducts" src="https://res.cloudinary.com/dqkjtjb9x/image/upload/v1741331751/2652218_h5srmh.png" />
            </div>
            <h2 className="counts">0</h2>
        </div>
        <div className="dashboard-item">
            <div>
                <h3>Total Invoices</h3>
                <img className="totalBalance-img" alt="totalinvoices" src="https://res.cloudinary.com/dqkjtjb9x/image/upload/v1741331982/4306907_synjwh.png" />
            </div>
            <h2 className="counts">0</h2>
        </div>
    </div>
)
}

export default Dashboard