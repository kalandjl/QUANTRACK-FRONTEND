"use client";
import { FC } from "react";
import Image from "next/image";

const AboutTeam: FC = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-stone-300 space-y-32">
            {/* About Us Section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-4">About Us</h2>
                    <p className="text-lg text-stone-400">
                        Quantrack is on a mission to transform how non-profit organizations and volunteers collaborate. 
                        We provide a transparent, efficient, and user-friendly platform to track engagement, celebrate contributions, and empower communities.
                        By leveraging technology, we make it easier for organizations to recognize volunteer efforts and for volunteers to see their impact in real-time. 
                        Our goal is to build a thriving ecosystem where giving back is as rewarding as it is impactful.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="https://t3.ftcdn.net/jpg/04/24/52/00/240_F_424520074_lvSa6lBHnJ0ma8ugyjiR2AZ52YYh9NOl.jpg"
                        alt="About Us"
                        width={400}
                        height={300}
                        className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-lg shadow-lg"
                        layout="intrinsic"
                    />
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
                        Our Mission: <br /> <span className="text-stone-300">Empowering Organizations, Recognizing Volunteers</span>
                    </h2>
                    <p className="text-lg text-stone-400">
                        Our mission is to bridge the gap between volunteers and non-profits by making engagement tracking effortless and meaningful. 
                        We ensure every volunteer’s time is valued, recorded, and acknowledged—driving greater participation in causes that matter.
                        Beyond just tracking hours, we want to create a culture of appreciation and accountability, where volunteers feel seen, and organizations can operate more efficiently. 
                        Quantrack is here to redefine the future of volunteerism with smart, intuitive tools.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="https://t3.ftcdn.net/jpg/04/24/52/00/240_F_424520074_lvSa6lBHnJ0ma8ugyjiR2AZ52YYh9NOl.jpg"
                        alt="our Mission"
                        width={400}
                        height={300}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                        layout="intrinsic"
                    />
                </div>
            </div>

            {/* Our Story Section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-4">Our Story</h2>
                    <p className="text-lg text-stone-400">
                        Quantrack was born out of a need for greater accountability in volunteer work. 
                        Seeing the struggle of non-profits to track engagement and impact, we built a platform that automates participation records, 
                        offers transparency, and fosters long-term commitment.
                        Quantrack was born out of a simple conversation—on Reddit. Strangers from different backgrounds, 
                        united by a shared belief in the power of volunteering, found each other in an online forum.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src="https://t3.ftcdn.net/jpg/04/24/52/00/240_F_424520074_lvSa6lBHnJ0ma8ugyjiR2AZ52YYh9NOl.jpg"
                        alt="our Story"
                        width={400}
                        height={300}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                        layout="intrinsic"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutTeam;
