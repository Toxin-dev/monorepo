import { AccountSetupMessage } from "../component/AccountSetupMessage";
import { FilterBar } from "../component";
export function ClientManagePage(props) {
  return (
    <>
      <AccountSetupMessage
        title={"Set up your Fresha profile for clients to book online"}
        subTitle={"Free up time and your clients self-booking online 24/7."}
      />
      <FilterBar />
      <table className="table client">
        <thead className="table__head">
          <tr>
            <th>Client name</th>
            <th>Mobile number</th>
            <th>Gender</th>
            <th>Reviews</th>
            <th>Total sales</th>
          </tr>
        </thead>
        <tbody className="table__body">
          <tr>
            <td>
              <div className="client-profile">
                <div className="client-profile__img">J</div>
                <div>
                  <p className="name">client name</p>
                  <p className="email">rakshak1998@gmail.com</p>
                </div>
              </div>
            </td>
            <td>mobile number</td>
            <td>male</td>
            <td>good work</td>
            <td>$ 200</td>
          </tr>
          <tr>
            <td>
              <div className="client-profile">
                <div className="client-profile__img">J</div>
                <div>
                  <p className="name">client name</p>
                  <p className="email">rakshak1998@gmail.com</p>
                </div>
              </div>
            </td>

            <td>mobile number</td>
            <td>male</td>
            <td>good work</td>
            <td>$ 200</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
