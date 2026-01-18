import { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setStatus("Message sent successfully!");
      } else {
        setStatus(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | My Website</title>
        <meta
          name="description"
          content="Contact us for inquiries, feedback, or support."
        />
      </Head>

      <h1 className="text-center text-4xl md:text-6xl font-bold mb-10">
        Contact Us
      </h1>

      <div className="flex justify-center">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-600">
              {status}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
