import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold">
              MMS
            </div>
          </div>
          <h1 className="text-3xl font-bold text-green-800">Marzook Model School</h1>
          <p className="text-gray-600 mt-2">School Management Portal</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials to access the portal</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Your username" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Your password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button asChild className="w-full bg-green-600 hover:bg-green-700">
              <Link href="/dashboard/admin">Login</Link>
            </Button>
            <div className="mt-4 text-sm text-center text-gray-500">
              <Link href="#" className="text-green-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 Marzook Model School. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
