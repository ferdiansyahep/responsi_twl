import { useEffect, useState } from "react";
import dua from "../../assets/images/profile-2.jpg";
import tiga from "../../assets/images/profile-3.jpg";
import empat from "../../assets/images/profile-4.jpg";
import plus from "../../assets/images/plus.png";
import Orders from "./Orders";

const Main = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(Orders);
  }, []);

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="analyse">
        <div className="sales">
          <div className="status">
            <div className="info">
              <h3>Tersedia</h3>
              <h1>81</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>81%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="visits">
          <div className="status">
            <div className="info">
              <h3>Pinjam</h3>
              <h1>19</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>19%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="searches">
          <div className="status">
            <div className="info">
              <h3>Total</h3>
              <h1>100</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>+21%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="new-users">
        <h2>Buku Terbaru</h2>
        <div className="user-list">
          <div className="user">
            <img src={dua} alt="profile-2" />
            <h2>Jack</h2>
            <p>54 Min Ago</p>
          </div>
          <div className="user">
            <img src={tiga} alt="profile-3" />
            <h2>Amir</h2>
            <p>3 Hours Ago</p>
          </div>
          <div className="user">
            <img src={empat} alt="profile-4" />
            <h2>Ember</h2>
            <p>6 Hours Ago</p>
          </div>
          <div className="user">
            <img src={plus} />
            <h2>More</h2>
            <p>New User</p>
          </div>
        </div>
      </div>

      <div className="recent-orders">
        <h2>History</h2>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Number</th>
              <th>Payment</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.productName}</td>
                <td>{order.productNumber}</td>
                <td>{order.paymentStatus}</td>
                <td
                  className={
                    order.status === "Declined"
                      ? "danger"
                      : order.status === "Pending"
                      ? "warning"
                      : "primary"
                  }
                >
                  {order.status}
                </td>
                <td className="primary">Details</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="#">Show All</a>
      </div>
    </main>
  );
};

export default Main;
