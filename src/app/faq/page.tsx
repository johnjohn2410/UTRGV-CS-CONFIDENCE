import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
    const faqs = [
        {
            question: "What is imposter syndrome?",
            answer: "Imposter syndrome is a psychological pattern where individuals doubt their skills and accomplishments, feeling like they don't deserve their success. It's particularly common in technical fields like computer science."
        },
        {
            question: "How can I overcome feeling behind in my programming skills?",
            answer: "Focus on your own progress rather than comparing yourself to others. Set small, achievable goals, celebrate your victories, and remember that everyone learns at their own pace. Utilize university resources like tutoring and study groups."
        },
        {
            question: "What resources are available if I'm struggling?",
            answer: "UTRGV offers various resources including peer tutoring, academic counseling, and programming workshops. You can join study groups, coding clubs, and seek help from professors during office hours."
        },
        {
            question: "How do I develop a growth mindset?",
            answer: "A growth mindset can be developed by viewing challenges as opportunities to learn, embracing mistakes as learning experiences, and focusing on the process rather than just the outcome. Regular practice and persistence are key."
        },
        {
            question: "What should I do if I'm falling behind in my classes?",
            answer: "First, don't panic - it's a common experience. Reach out to your professors early, attend office hours, and consider forming study groups. The UTRGV tutoring center offers specialized help for CS courses."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-3xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8 text-[#F05023]">Frequently Asked Questions</h1>
                <p className="text-xl mb-8 text-[#F05023]">Find answers to common questions about dealing with imposter syndrome and building confidence in computer science.</p>

                <div className="border-2 border-[#F05023] rounded-lg p-6">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left hover:text-[#F05023] text-[#F05023]">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}