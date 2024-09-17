import React from "react";

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg mb-2">Feel free to reach out to me via email or WhatsApp:</p>
            <div className="text-lg">
                <p>Email: <a href="mailto:katiyarayush02@gmail.com" className="text-blue-500 hover:underline">katiyarayush02@gmail.com</a></p>
                <p>WhatsApp: <a href="https://wa.me/916267208453" className="text-green-500 hover:underline">6267208453</a></p>
            </div>
            <p className="mt-4 text-gray-600">Looking forward to hearing from you!</p>
        </div>
    );
};

export default Contact;
