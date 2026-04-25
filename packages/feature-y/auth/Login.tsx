import * as React from "react";
import { Button, Card, Input, Label } from "@repo/ui-components";

export const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="p-6 w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <div className="space-y-2">
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
        </div>

        <div className="space-y-2">
          <Label>Password</Label>
          <Input type="password" placeholder="Enter your password" />
        </div>

        <Button className="w-full">Login</Button>
      </Card>
    </div>
  );
};
