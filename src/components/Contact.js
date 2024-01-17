// components/ContactUs.js
export default function ContactUs() {
  return (
      <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-gray-200 my-8">Kontaktieren Sie uns</h2>
          <div className="grid md:grid-cols-2 gap-8">
              <div>
                  <h3 className="text-xl font-semibold text-gray-400 mb-4">Kontaktdetails</h3>
                  <p className="text-gray-200 mb-2"><strong>Telefon:</strong> +49 123 456 7890</p>
                  <p className="text-gray-200 mb-2"><strong>Email:</strong> kontakt@nextgensolutions.de</p>
                  <p className="text-gray-200 mb-2"><strong>Adresse:</strong> Musterstraße 1, 12345 Musterstadt, Deutschland</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold text-gray-400 mb-4">Standort</h3>
                  {/* Replace this div with your embedded map or an image of the map */}
                  <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                      <p className="text-gray-700">Kartenplatzhalter</p>
                  </div>
              </div>
          </div>
      </div>
  );
}
