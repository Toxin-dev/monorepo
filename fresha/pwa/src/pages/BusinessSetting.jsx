import { Card, CardItem } from "../component/Card";
export function BusinessSettingPage() {
  return (
      <div className="business-setting-content">
        <div className="page-content__left">
          <Card title="Account setup">
            <CardItem
              title="Resources"
              description="Set up bookable resource such as rooms and equipment and assign them to services"
            />
            <CardItem
              title="Online booking"
              description="Adust your business info and profile images displayed online"
            />
            <CardItem
              title="Locations"
              description="Manage multiple outlets for your business"
            />
          </Card>
          <Card title={"Services"}>
            <CardItem
              title="Services menu"
              description="Add, edit and delete the types of services available for appointment bokings"
            />
            <CardItem
              title="Vouchers"
              description="Add, edit and delete the types of vouchers available for sale"
            />
            <CardItem
              title="Memberships"
              description="Add, edit and delete multi session memberships available for sale"
            />
            <CardItem
              title="Voucher settings"
              description="Choose your voucher expiry period and upsell your service and memberships"
            />
          </Card>
        </div>
        <div className="page-content__right">
          <Card title={"Clients"}>
            <CardItem
              title={"Client notifications"}
              description="Review message sent to clients about their appointments"
            />
            <CardItem
              title={"Referral sources"}
              description="Set up custom source to track how clients found your business"
            />
            <CardItem
              title={"Cancellation reasons"}
              description="Track why clients did not arrive for their appointments"
            />
          </Card>
          <Card title={"Sales"}>
            <CardItem
              title="Receipt sequencing"
              description="Configure details displayed on sales recipts issued to tyour clients"
            />
            <CardItem
              title={"Taxes"}
              description="Manage tax rates that apply to items sold at checkout"
            />
            <CardItem
              title={"Service charges"}
              description="Manage any extra charges that apply to services and items sold at checkout"
            />
            <CardItem
              title={"Tips"}
              description="Manage tipping settings for your business"
            />
            <CardItem
              title={"Payment types"}
              description="Set up manual payment types for use durig checkout"
            />
          </Card>
          <Card title={"Team"}>
            <CardItem
              title={"Team members"}
              description="Add, edit and delete your team memebers"
            />
            <CardItem
              title={"Working hours"}
              description="Manage working hours of your team members"
            />
            <CardItem
              title={"Permissions"}
              description="Configure level of access to Fresha for each of your team member"
            />
            <CardItem
              title={"Commissions"}
              description="Set up the calculation of commissions for team members"
            />
          </Card>
        </div>
      </div>
  );
}
