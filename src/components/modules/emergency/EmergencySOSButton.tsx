import { useState, useEffect } from "react"
import { AlertTriangle, Phone, MapPin, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { toast } from "sonner"

const EmergencySOSButton = () => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [isGettingLocation, setIsGettingLocation] = useState(false)

  // Get current location
  const getCurrentLocation = (): Promise<{ latitude: number; longitude: number; address: string }> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported"))
        return
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          // Mock reverse geocoding - in real app, use Google Maps API
          const address = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
          resolve({ latitude, longitude, address })
        },
        (error) => reject(error),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
      )
    })
  }

  // Handle SOS activation
  const handleSOSActivation = async () => {
    setIsGettingLocation(true)
    try {
      const currentLocation = await getCurrentLocation()



      toast.success("🚨 Emergency SOS Activated! Help is on the way.")
      setShowConfirmDialog(false)
    } catch (error) {
      toast.error("Failed to get location. SOS activated with last known location.")
     
      
    } finally {
      setIsGettingLocation(false)
    }
  }

  // Handle SOS deactivation
  const handleSOSDeactivation = () => {
    toast.success("Emergency SOS deactivated. Stay safe!")
  }

  // Handle SOS cancellation
  const handleSOSCancellation = () => {
    toast.info("Emergency SOS cancelled.")
  }

  // Countdown for confirmation
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000)
    } else if (countdown === 0 && showConfirmDialog) {
      handleSOSActivation()
    }
    return () => clearTimeout(timer)
  }, [countdown, showConfirmDialog ,])

  // Update location periodically when SOS is active
  useEffect(() => {
    let locationTimer: NodeJS.Timeout
    if (isActive) {
      locationTimer = setInterval(async () => {
        try {
          const currentLocation = await getCurrentLocation()
        } catch (error) {
          console.error("Failed to update location:", error)
        }
      }, 30000) // Update every 30 seconds
    }
    return () => clearInterval(locationTimer)
  }, [isActive])

  if (isActive) {
    return (
      <Card className="border-red-500 bg-red-50 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-5 w-5 animate-pulse" />
            Emergency SOS Active
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-red-600">
            <Shield className="h-4 w-4" />
            <span>Emergency services have been notified</span>
          </div>

          {location && (
            <div className="flex items-start gap-2 text-sm text-red-600">
              <MapPin className="h-4 w-4 mt-0.5" />
              <span>{location.address}</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-red-600">
            <Clock className="h-4 w-4" />
            <span>Active since {new Date(sosHistory[0]?.timestamp).toLocaleTimeString()}</span>
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSOSDeactivation}
              className="border-green-500 text-green-700 hover:bg-green-50 bg-transparent"
            >
              I'm Safe Now
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSOSCancellation}
              className="border-gray-500 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              Cancel SOS
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => setShowConfirmDialog(true)}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 shadow-lg"
      >
        <AlertTriangle className="h-5 w-5 mr-2" />
        Emergency SOS
      </Button>

      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="h-5 w-5" />
              Emergency SOS Confirmation
            </DialogTitle>
            <DialogDescription>
              This will immediately alert emergency services and your emergency contacts with your current location.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">What happens next:</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Emergency services will be contacted</li>
                <li>• Your location will be shared</li>
                <li>• Emergency contacts will be notified</li>
                <li>• Continuous location tracking will begin</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Emergency Contacts:</h4>
              <div className="space-y-1">
                {emergencyContacts.map((contact) => (
                  <div key={contact.id} className="flex items-center gap-2 text-sm text-amber-700">
                    <Phone className="h-3 w-3" />
                    <span>
                      {contact.name} - {contact.phone}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {countdown > 0 && (
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">{countdown}</div>
                <p className="text-sm text-red-600">Activating SOS in {countdown} seconds...</p>
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                onClick={() => {
                  setShowConfirmDialog(false)
                  setCountdown(0)
                }}
                className="flex-1"
                disabled={isGettingLocation}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => setCountdown(5)}
                className="flex-1"
                disabled={countdown > 0 || isGettingLocation}
              >
                {isGettingLocation
                  ? "Getting Location..."
                  : countdown > 0
                    ? `Activating (${countdown})`
                    : "Activate SOS"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EmergencySOSButton
