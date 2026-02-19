import { useState } from "react";
import StarDivider from "@/components/StarDivider";

const Contact = () => {
  const [form, setForm] = useState({ userName: "", userAge: "", userEmail: "", userPassword: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-[calc(100vh-72px)]">
      <StarDivider title="Contact Section" variant="dark" />
      <div className="max-w-2xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {(["userName", "userAge", "userEmail", "userPassword"] as const).map((field) => (
            <input
              key={field}
              name={field}
              type={field === "userPassword" ? "password" : field === "userEmail" ? "email" : "text"}
              placeholder={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full border-b border-border bg-transparent py-3 px-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          ))}
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-2 rounded font-semibold hover:opacity-90 transition-opacity"
          >
            send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
