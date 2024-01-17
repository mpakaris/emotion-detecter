// components/ProductSection.js
export default function Products() {
  const products = [
      {
          name: "HealthSync",
          price: "5.000 Euro",
          description: "Ein fortschrittliches Patientenmanagementsystem, das die Effizienz in Krankenhäusern und Kliniken verbessert, durch nahtlose Integration von Patientendaten, Terminkoordination und Ressourcenmanagement."
      },
      {
          name: "MediTrack",
          price: "3.000 Euro",
          description: "Ein innovatives Gerät zur Fernüberwachung von Patienten, das Ärzten ermöglicht, wichtige Gesundheitsdaten wie Herzfrequenz, Blutdruck und Blutzucker in Echtzeit zu überwachen."
      },
      {
          name: "PharmaInsight",
          price: "8.000 Euro",
          description: "Eine bahnbrechende Software zur Analyse und Vorhersage von Medikamententrends mit KI-gestützten Algorithmen, die Pharmaunternehmen bei der Entwicklung effektiverer Medikamente unterstützt."
      }
  ];

  return (
      <div className="container mx-auto px-10 bg-gray-800 rounded-lg py-10 my-10">
          <h2 className="text-3xl font-bold text-center text-gray-200 my-10">Unsere Produkte</h2>
          <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <span className="text-lg font-semibold text-black">{product.price}</span>
                  </div>
              ))}
          </div>
      </div>
  );
}
