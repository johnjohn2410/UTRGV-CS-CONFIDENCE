import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Resources() {
    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8 text-[#F05023]">Resources</h1>

                <div className="space-y-16">
                    {/* Imposter Syndrome Section */}
                    <section id="imposter-syndrome">
                        <h2 className="text-2xl font-semibold mb-4 text-[#F05023]">Overcoming Imposter Syndrome</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="border-[#F05023] border-2 hover:shadow-lg transition-shadow bg-white/90">
                                <CardHeader>
                                    <CardTitle className="text-[#F05023]">Understanding Imposter Syndrome</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-black font-medium">Learn about what causes imposter syndrome and how to recognize its signs. Discover common patterns and experiences shared by computer science students.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-[#F05023] border-2 hover:shadow-lg transition-shadow bg-white/90">
                                <CardHeader>
                                    <CardTitle className="text-[#F05023]">Coping Strategies</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-black font-medium">Practical techniques for managing and overcoming imposter syndrome, including peer support, mentorship, and professional development opportunities.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Growth Mindset Section */}
                    <section id="growth-mindset">
                        <h2 className="text-2xl font-semibold mb-4 text-[#F05023]">Developing a Growth Mindset</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="border-[#F05023] border-2 hover:shadow-lg transition-shadow bg-white/90">
                                <CardHeader>
                                    <CardTitle className="text-[#F05023]">Growth vs Fixed Mindset</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-black font-medium">Understanding the difference between growth and fixed mindsets and their impact on your learning journey in computer science.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-[#F05023] border-2 hover:shadow-lg transition-shadow bg-white/90">
                                <CardHeader>
                                    <CardTitle className="text-[#F05023]">Building Resilience</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-black font-medium">Learn how to bounce back from setbacks and use them as learning opportunities. Develop strategies for persistent growth.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Programming Tips Section */}
                    <section id="programming-tips">
                        <h2 className="text-2xl font-semibold mb-4 text-[#F05023]">Tips for New Programmers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="border-[#F05023] border-2 hover:shadow-lg transition-shadow bg-white/90">
                                <CardHeader>
                                    <CardTitle className="text-[#F05023]">Getting Started</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-black font-medium">Essential resources and tips for beginning your programming journey, including recommended tutorials and learning paths.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-[#F05023] border-2 hover:shadow-lg transition-shadow bg-white/90">
                                <CardHeader>
                                    <CardTitle className="text-[#F05023]">Study Strategies</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-black font-medium">Effective methods for learning and retaining programming concepts, including practice exercises and project-based learning.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}