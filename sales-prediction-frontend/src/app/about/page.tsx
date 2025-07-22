export default function AboutPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat p-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-8 text-center drop-shadow-lg">
          About the Sales Prediction Project
        </h1>

        <p className="text-gray-800 text-lg mb-6 text-center">
          This project uses cutting-edge Machine Learning to forecast product sales based on ad budgets
          for TV, Radio, and Newspaper.
        </p>

        <div className="bg-white/90 p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            🔧 Technologies Used
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>⚡ Python & FastAPI for blazing fast backend</li>
            <li>🤖 ML Models: XGBoost, Random Forest, Linear Regression</li>
            <li>🧠 Trained using Advertising Budget Dataset</li>
            <li>💻 Frontend: Next.js 15, Tailwind CSS, ShadCN UI</li>
          </ul>
        </div>

        <p className="text-gray-700 text-center font-medium italic">
          🚀 Developed with passion during a Data Science Internship by <strong>Abubakar</strong>.
        </p>
      </div>
    </main>
  );
}
