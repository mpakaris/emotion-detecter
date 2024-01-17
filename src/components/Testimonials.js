export default function Testimonials() {
  const testimonials = [
      {
          name: "Dr. Thomas Müller",
          role: "Klinikleiter",
          image: "https://i.postimg.cc/56SXTSYd/Bildschirmfoto-2024-01-08-um-16-56-59.png", // Replace with actual image path
          text: "Ich leite eine große Klinik und bin absolut begeistert von HealthSync. Wir haben bemerkt, wie dieses System die Effizienz in unserer Klinik revolutioniert hat, indem es die Verwaltung vereinfacht und die Patientenbetreuung verbessert. Ich würde HealthSync jeder medizinischen Einrichtung wärmstens empfehlen."
      },
      {
          name: "Dr. Sarah Aborta",
          role: "Leitende Ärztin",
          image: "https://i.postimg.cc/K1c123BK/Bildschirmfoto-2024-01-08-um-16-57-04.png", // Replace with actual image path
          text: "Als Hausarzt habe ich  MediTrack in meiner Praxis eingesetzt. Dieses Gerät hat mir geholfen, meine Patienten mit chronischen Erkrankungen besser zu überwachen und zu betreuen. Für mich ist MediTrack ein wesentlicher Bestandteil meiner täglichen Arbeit."
      },
      {
          name: "Markus Testo",
          role: "Apotheker",
          image: "https://i.postimg.cc/cKr6KqD0/Bildschirmfoto-2024-01-08-um-16-57-10.png", // Replace with actual image path
          text: "Ich bin beeindruckt von der präzisen Marktanalyse, die PharmaInsight bietet. Für jeden in der Pharmaindustrie ist PharmaInsight meiner Meinung nach unverzichtbar."
      },
      {
          name: "Laura Becker",
          role: "Krankenschwester",
          image: "https://i.postimg.cc/QF6HxNJf/Bildschirmfoto-2024-01-08-um-16-57-17.png", // Replace with actual image path
          text: "Ich arbeite als Krankenschwester und habe HealthSync in meiner Abteilung verwendet. Obwohl ich mit der Funktionalität des Produkts zufrieden bin, war ich vom Kundenservice enttäuscht. Er könnte reaktiver und hilfreicher sein."
      },
      {
          name: "Michaela Schröder",
          role: "Physiotherapeutin",
          image: "https://i.postimg.cc/hfBJ25G1/Bildschirmfoto-2024-01-08-um-16-57-24.png", // Replace with actual image path
          text: "Ich habe MediTrack ausprobiert, fand das Gerät jedoch unzuverlässig und nicht intuitiv in der Anwendung. Ich plane daher nicht, in Zukunft weiterhin mit diesen Produkten zu arbeiten."
      }
  ];

  return (
      <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">Kundenstimmen</h2>
          <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                      <img src={testimonial.image} alt={`Bild von ${testimonial.name}`} className="w-16 rounded-full mb-4 mx-auto"/>
                      <h3 className="text-xl font-semibold text-center text-gray-900">{testimonial.name}</h3>
                      <p className="text-lg text-center mb-4 text-gray-800 font-bold">{testimonial.role}</p>
                      <p className="text-gray-600 text-sm">{testimonial.text}</p>
                  </div>
              ))}
          </div>
      </div>
  );
}
