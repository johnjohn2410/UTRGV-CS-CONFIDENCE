import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-3xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8 text-[#F05023]">Contact Us</h1>
                <p className="text-xl mb-8 text-[#F05023]">Get in touch with our support team for any questions or concerns.</p>

                <Card className="border-[#F05023] border-2 mb-8">
                    <CardHeader>
                        <CardTitle className="text-[#F05023]">Send us a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[#F05023]">Name</label>
                                <Input
                                    type="text"
                                    placeholder="Your name"
                                    className="border-[#F05023] focus:ring-[#F05023] focus:border-[#F05023]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-[#F05023]">Email</label>
                                <Input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="border-[#F05023] focus:ring-[#F05023] focus:border-[#F05023]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-[#F05023]">Message</label>
                                <Textarea
                                    placeholder="How can we help you?"
                                    className="h-32 border-[#F05023] focus:ring-[#F05023] focus:border-[#F05023]"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-[#F05023] text-white hover:bg-[#F05023]/90"
                            >
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-[#F05023] border-2">
                        <CardHeader>
                            <CardTitle className="text-[#F05023]">Support Hours</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                            <p className="text-gray-700">Weekend: Closed</p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#F05023] border-2">
                        <CardHeader>
                            <CardTitle className="text-[#F05023]">Other Ways to Reach Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700">Email: support@utrgv.edu</p>
                            <p className="text-gray-700">IT Support: (123) 456-7890</p>
                            <p className="text-gray-700">Office: EENGR 3.2XX</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}