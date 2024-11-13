import React from 'react';

export default function TeamSection() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      bio: "With 15 years in the beauty industry, Sarah leads our mission to bring premium cosmetics to South Africa.",
    },
    {
      name: "David Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      bio: "David ensures smooth operations and maintains our high standards of service delivery.",
    },
    {
      name: "Lisa Ndlovu",
      role: "Beauty Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
      bio: "Our resident beauty expert, Lisa brings extensive knowledge of skincare and cosmetics.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-gray-900">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-500">
            The passionate individuals behind LUXE Cosmetics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
                <p className="text-pink-600 mb-4">{member.role}</p>
                <p className="text-gray-500">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}