import { Button } from "../../../ui-components/button";
import { Card } from "../../../ui-components/card";

export const Dashboard = () => {
  return (
    <div className="p-4 space-y-4">
      <Card>
        <h2 className="text-xl font-bold">Dashboard</h2>
        <p>Welcome to your dashboard</p>
        <Button>Click Me</Button>
      </Card>
    </div>
  );
};
