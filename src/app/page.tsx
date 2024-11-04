"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltNodeType extends HTMLDivElement {
  vanillaTilt?: {
    destroy: () => void;
  };
}

function Tilt({ children }: { children: React.ReactNode }) {
  const tiltRef = useRef<TiltNodeType>(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 10,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
        scale: 1.05
      });

      return () => {
        if (tiltNode.vanillaTilt) {
          tiltNode.vanillaTilt.destroy();
        }
      };
    }
  }, []);

  return (
      <div ref={tiltRef} className="w-full">
        {children}
      </div>
  );
}

export default function Home() {
  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-[#F05023] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-8 mb-4">
              <div>
                <h2 className="text-4xl font-bold mb-4">Welcome to UTRGV Computer Science Confidence</h2>
                <p className="text-xl">Building confidence and overcoming imposter syndrome in computer science.</p>
              </div>
              <Image
                  src="/images/v-logo2.png"
                  alt="UTRGV Logo"
                  width={300}
                  height={100}
                  className="object-contain"
              />
            </div>
            <Link href="/resources">
              <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-[#F05023] hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Explore Resources
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/resources#imposter-syndrome">
              <Tilt>
                <Card className="border-[#F05023] border-2 bg-white/80">
                  <CardHeader>
                    <CardTitle className="text-[#F05023]">
                      Overcoming Imposter Syndrome
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black">
                      Learn strategies to overcome self-doubt and build confidence in your programming journey.
                    </p>
                  </CardContent>
                </Card>
              </Tilt>
            </Link>

            <Link href="/resources#growth-mindset">
              <Tilt>
                <Card className="border-[#F05023] border-2 bg-white/80">
                  <CardHeader>
                    <CardTitle className="text-[#F05023]">
                      Developing Growth Mindset
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black">
                      Discover how to cultivate a mindset that embraces challenges and learns from mistakes.
                    </p>
                  </CardContent>
                </Card>
              </Tilt>
            </Link>

            <Link href="/resources#programming-tips">
              <Tilt>
                <Card className="border-[#F05023] border-2 bg-white/80">
                  <CardHeader>
                    <CardTitle className="text-[#F05023]">
                      Tips for New Programmers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black">
                      Get practical advice and resources to help you succeed in your computer science studies.
                    </p>
                  </CardContent>
                </Card>
              </Tilt>
            </Link>
          </div>
        </div>
      </div>
  );
}