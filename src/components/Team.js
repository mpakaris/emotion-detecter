export default function TeamSection() {
  const teamMembers = [
    {
        name: "Alexander Schmidt",
        role: "CEO",
        image: "https://i.postimg.cc/sBTWG99C/Bildschirmfoto-2024-01-08-um-17-09-41.png", // Replace with actual image path
        description: "Ein charismatischer Leader mit einer beeindruckenden Erfolgsbilanz in der Tech-Branche, bekannt für seine visionäre Denkweise."
    },
    {
        name: "Dr. Maria Lopez",
        role: "CTO",
        image: "https://i.postimg.cc/8Js6RJtJ/Bildschirmfoto-2024-01-08-um-17-09-47.png", // Replace with actual image path
        description: "Eine brillante Technologin mit einem tiefen Verständnis für Softwareentwicklung und künstliche Intelligenz, leitet unsere Technologieinitiativen."
    },
    {
        name: "Jonas Weber",
        role: "Entwickler",
        image: "https://i.postimg.cc/DJDbBvMC/Bildschirmfoto-2024-01-08-um-17-09-53.png", // Replace with actual image path
        description: "Ein hochtalentierter Entwickler mit einem scharfen Sinn für Design und Benutzerfreundlichkeit, Schlüssel zur Schaffung unserer Produkte."
    },
    {
        name: "Sophia Müller",
        role: "Marketing",
        image: "https://i.postimg.cc/67WRQ1Zh/Bildschirmfoto-2024-01-08-um-17-10-35.png", // Replace with actual image path
        description: "Eine kreative und strategische Denkerin, die unsere Marke und Botschaften mit Leidenschaft und Kreativität kommuniziert."
    },
    {
        name: "Max Fischer",
        role: "Vertrieb",
        image: "https://i.postimg.cc/LJBL2MJX/Bildschirmfoto-2024-01-08-um-17-10-43.png", // Replace with actual image path
        description: "Ein erfahrener Sales-Profi, der eng mit unseren Kunden zusammenarbeitet, um die bestmögliche Lösung zu bieten."
    }
  ];

  return (
      <div className="container mx-auto my-10 px-4 py-12 bg-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Unser Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white mb-8 rounded-lg shadow-lg overflow-hidden">
                      <img src={member.image} alt={`Bild von ${member.name}`} className="w-full h-64 object-cover"/>
                      <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                          <p className="text-blue-600 font-semibold">{member.role}</p>
                          <p className="text-gray-600 mt-4">{member.description}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}
