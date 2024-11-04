import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Stories() {
    const stories = [
        {
            name: "Maria Rodriguez",
            year: "Senior",
            story: "When I first started CS, I felt completely overwhelmed. Everyone seemed to know so much more than me. But I learned that everyone starts somewhere, and now I'm preparing for my dream internship at a major tech company.",
            initials: "MR"
        },
        {
            name: "James Chen",
            year: "Junior",
            story: "I had no prior programming experience and thought I'd never catch up. Through persistence and help from mentors, I discovered that everyone faces challenges differently. Now I help other students as a peer tutor.",
            initials: "JC"
        },
        {
            name: "Sarah Martinez",
            year: "Graduate",
            story: "Imposter syndrome hit me hard in my junior year. I almost switched majors, but the support from faculty and peers helped me realize that my struggles were normal and temporary. Now I work as a software engineer.",
            initials: "SM"
        },
        {
            name: "David Park",
            year: "Sophomore",
            story: "Being the first in my family to study computer science was intimidating. I felt like I didn't belong. But joining coding clubs and participating in hackathons helped me find my community and build confidence.",
            initials: "DP"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8 text-[#F05023]">Student Stories</h1>
                <p className="text-xl mb-8 text-[#F05023]">Read about the experiences of your fellow UTRGV Computer Science students and alumni.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stories.map((story, index) => (
                        <Card key={index} className="flex flex-col border-[#F05023] border-2 hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Avatar className="bg-[#F05023] text-white">
                                    <AvatarFallback>{story.initials}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-[#F05023]">{story.name}</CardTitle>
                                    <p className="text-sm text-gray-500">{story.year}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">{story.story}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}