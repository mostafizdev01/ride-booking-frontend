import RideBookingForm from "@/components/modules/rider/RideBookingForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RideRequest = () => {
    return (
         <div  className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Book a New Ride</CardTitle>
              <CardDescription>Enter your pickup and destination to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <RideBookingForm />
            </CardContent>
          </Card>
        </div>
    );
};

export default RideRequest;