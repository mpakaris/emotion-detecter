export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col items-center">
                  <p className="text-lg font-semibold">NextGen Solutions</p>
                  <p className="text-sm mt-2">
                      © {currentYear} NextGen Solutions. Alle Rechte vorbehalten.
                  </p>
                  <div className="mt-4">
                      <a href="/impressum" className="text-sm text-gray-300 hover:text-gray-100 mr-4">Impressum</a>
                      <a href="/datenschutz" className="text-sm text-gray-300 hover:text-gray-100 mr-4">Datenschutz</a>
                      <a href="/kontakt" className="text-sm text-gray-300 hover:text-gray-100">Kontakt</a>
                  </div>
              </div>
          </div>
      </footer>
  );
}
