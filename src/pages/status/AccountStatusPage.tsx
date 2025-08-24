import { Link } from "react-router"
import { AlertTriangle, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

const AccountStatusPage = () => {

  const user = {
    id: "123",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "user",
    status: "active",
  }
  const handleLogout = () => {
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <p className="text-center">Please log in to view your account status.</p>
            <Button asChild className="w-full mt-4">
              <Link to="/login">Login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const getStatusInfo = () => {
    switch (user.status) {
      case "blocked":
        return {
          title: "Account Blocked",
          description: "Your account has been temporarily blocked due to policy violations.",
          variant: "destructive" as const,
          icon: <AlertTriangle className="h-5 w-5" />,
        }
      case "suspended":
        return {
          title: "Account Suspended",
          description: "Your account has been suspended pending review.",
          variant: "destructive" as const,
          icon: <AlertTriangle className="h-5 w-5" />,
        }
      default:
        return {
          title: "Account Active",
          description: "Your account is in good standing.",
          variant: "default" as const,
          icon: null,
        }
    }
  }

  const statusInfo = getStatusInfo()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Account Status</CardTitle>
          <CardDescription>Information about your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert variant={statusInfo.variant}>
            {statusInfo.icon}
            <AlertDescription className="ml-2">
              <strong>{statusInfo.title}</strong>
              <br />
              {statusInfo.description}
            </AlertDescription>
          </Alert>

          {(user.status === "blocked" || user.status === "suspended") && (
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">To resolve this issue, please contact our support team:</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>support@rideshare.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-RIDE</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-muted rounded-md">
                <p className="text-xs text-muted-foreground">
                  <strong>Account Details:</strong>
                  <br />
                  Name: {user.name}
                  <br />
                  Email: {user.email}
                  <br />
                  Role: {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Button onClick={handleLogout} variant="outline" className="w-full bg-transparent">
              Logout
            </Button>
            <Button asChild variant="ghost" className="w-full">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AccountStatusPage
