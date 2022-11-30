import { BiBarChart, BiBarChartSquare, BiCalendar,BiStopwatch} from "react-icons/bi";
import { FaChartBar, FaChartLine } from "react-icons/fa";
import { Card } from "../component/Card";
import Layout from "../component/common/Layout";

export function HomePage(props) {
    return <Layout>
        <div className="home-grid">
            <Card title={'Recent sales'} >
                <HomeCard title={'No Sales Data'} icon={<FaChartLine />} subtitle='Make some appointments for sales data to appear' />
            </Card>
            <Card title={'Upcoming appointments'}>
                <HomeCard title={'Upcoming appointments'} icon={<FaChartBar />} subtitle={'Make some appointments for schedule data to appear'} />
            </Card>
            <Card title={'Appointments activity'}>
                <HomeCard icon={<BiStopwatch />} title={'No recent activity'} subtitle={'Visit the calendar section to add some appointments'} />
            </Card>
            <Card title={'Today\'s next appointments'}>
                <HomeCard icon={<BiCalendar />} title={"No Appointments Today"} subtitle={"Visit the calendar section to add some appointments"} />
            </Card>
            <Card title={'Top services'}>
                <HomeCard icon={<BiBarChart />} title={"No sales this month"} subtitle={"Create some sales for sales data to appear"} />
            </Card>
            <Card title={'Top team member'}>
                <HomeCard icon={<BiBarChartSquare />} title="No sales this month" subtitle={"Create some sales for sales data to appear"} />
            </Card>
        </div>
    </Layout >
}

function HomeCard({ title, icon, subtitle }) {
    return <div className="home-card__body">
        <div className="home-card__icon">{icon}</div>
        <h2 className="home-card__title">{title}</h2>
        <p className="home-card__subtitle">{subtitle}</p>
    </div>
}