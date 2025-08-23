import RideHistory from "@/components/modules/rider/RideHistory";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RideHistoryPage = () => {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Ride History
                    </CardTitle>
                    <CardDescription>View and manage your past rides</CardDescription>
                </CardHeader>
                <CardContent>
                    <RideHistory />
                </CardContent>
            </Card>
        </div>
    );
};

export default RideHistoryPage;