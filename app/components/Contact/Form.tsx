import { Send } from "lucide-react";
export default function Form() {
    return (
        <form className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4 w-full">
            <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none"
            />
            <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none"
            />
            <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none"
            />
            <textarea
                placeholder="Your Message"
                rows={5}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none"
            ></textarea>
            <button
                type="submit"
                className="
                 text-white bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500  hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 cursor-pointer shadow-lg
                 font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300 flex items-center justify-center gap-2"
            >
                <Send className="text-white w-6 h-6" />   Send Message
            </button>
        </form>
    );
}
