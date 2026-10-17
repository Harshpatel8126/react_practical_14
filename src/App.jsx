
import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    gender: "",
    city: "",
  });

  const [student, setStudent] = useState(null);

  // Update input values
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // Submit form
  function handleSubmit(e) {
    e.preventDefault();
    setStudent({ ...form });
  }

  // Reusable input styling
  const inputStyle =
    "w-full border border-slate-200 rounded-xl px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-violet-400";

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <header className="bg-gradient-to-r from-violet-700 to-indigo-600 text-white p-8 md:p-10">
          <p className="text-violet-200 text-sm font-bold uppercase tracking-widest">
            Student Portal • Registration 2026
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold mt-3">
            🎓 Join Our Campus
          </h1>

          <p className="text-violet-100 mt-3">
            Your journey towards a brighter future starts here.
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-8 p-6 md:p-10">

          {/* Registration Form */}
          <section className="md:col-span-3">
            <h2 className="text-2xl font-bold text-slate-800">
              Student Registration
            </h2>

            <p className="text-slate-500 text-sm mt-2 mb-6">
              Fill in your details to register.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="font-semibold text-sm">
                  Full Name
                </label>
                <input
                  className={inputStyle}
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-sm">
                  Email Address
                </label>
                <input
                  className={inputStyle}
                  type="email"
                  name="email"
                  placeholder="student@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-sm">
                  Phone Number
                </label>
                <input
                  className={inputStyle}
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  maxLength={10}
                  title="Enter a 10-digit phone number"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-sm">
                  Select Course
                </label>
                <select
                  className={inputStyle}
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose your course</option>
                  <option value="BCA">BCA</option>
                  <option value="BBA">BBA</option>
                  <option value="B.Com">B.Com</option>
                  <option value="MCA">MCA</option>
                  <option value="MBA">MBA</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-sm">
                  Gender
                </label>
                <select
                  className={inputStyle}
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">
                    Prefer not to say
                  </option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-sm">
                  City
                </label>
                <input
                  className={inputStyle}
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl shadow-lg transition"
              >
                Register Student →
              </button>

              <button
                type="button"
                onClick={() => {
                  setForm({
                    name: "",
                    email: "",
                    phone: "",
                    course: "",
                    gender: "",
                    city: "",
                  });
                  setStudent(null);
                }}
                className="w-full border border-slate-200 hover:bg-slate-50 py-3 rounded-xl font-semibold"
              >
                Clear Form
              </button>
            </form>
          </section>

          {/* Registration Preview */}
          <aside className="md:col-span-2">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sticky top-6">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-violet-100 flex items-center justify-center text-4xl">
                  {student ? "🎉" : "👨‍🎓"}
                </div>

                <h2 className="text-xl font-extrabold mt-4">
                  {student ? "Registration Successful!" : "Student Preview"}
                </h2>

                <p className="text-sm text-slate-500 mt-2">
                  {student
                    ? "Your details have been submitted."
                    : "Your submitted details will appear here."}
                </p>
              </div>

              {student && (
                <div className="mt-6 space-y-4">
                  {[
                    ["Full Name", student.name],
                    ["Email", student.email],
                    ["Phone", student.phone],
                    ["Course", student.course],
                    ["Gender", student.gender],
                    ["City", student.city],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="border-b border-slate-200 pb-3"
                    >
                      <p className="text-xs text-slate-500">{label}</p>
                      <p className="font-semibold text-slate-800 break-words mt-1">
                        {value}
                      </p>
                    </div>
                  ))}

                  <div className="bg-emerald-50 text-emerald-700 rounded-xl p-3 text-center font-semibold text-sm">
                    ✓ Submitted successfully
                  </div>
                </div>
              )}

              {!student && (
                <div className="mt-6 bg-violet-100 rounded-xl p-4 text-sm text-violet-800">
                  💡 <strong>Tip:</strong> Complete all fields and click
                  Register Student to see your confirmation card.
                </div>
              )}
            </div>
          </aside>
        </div>

        <footer className="bg-slate-950 text-slate-400 text-center p-4 text-sm">
          Student Portal • Built with React useState & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}
