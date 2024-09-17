import React from "react";

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">Hello!! I&apos;m Ayush</h1>
            <p className="text-lg mb-4">
                I&apos;m a passionate and skilled developer with experience in various technologies.
            </p>
            <p className="text-lg mb-6">
                I&apos;m currently looking for exciting opportunities to apply my skills and contribute to innovative projects.
            </p>
            <p className="text-lg font-semibold">
                If you&apos;re looking for someone who is dedicated, proactive, and eager to learn, I&apos;d love to hear from you!
            </p>
            <p className="text-lg font-bold mt-4">
                <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">
                    Hire me
                </a>
            </p>
        </div>
    );
};

export default About;
