import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { MapPin, Star } from 'lucide-react';

const Home: React.FC = () => {
  const destinations = [
    {
      name: 'Himachal Pradesh',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      activities: ['Trekking', 'Rock Climbing', 'River Rafting'],
      rating: 4.9
    },
    {
      name: 'Nepal Himalayas',
      image: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      activities: ['Mountain Expeditions', 'Cultural Immersion', 'Wildlife Safari'],
      rating: 4.8
    },
    {
      name: 'Bhutan Valleys',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      activities: ['Monastery Visits', 'Hiking', 'Photography'],
      rating: 4.9
    }
  ];

  return (
    <div>
      <Hero />
      <Features />
      
      {/* Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular <span className="text-gradient">Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the mighty Himalayas to serene valleys, explore breathtaking locations that offer the perfect blend of adventure and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="h-5 w-5 text-primary-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {destination.activities.map((activity, actIndex) => (
                      <span 
                        key={actIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of young explorers who have transformed their lives through our outdoor learning programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              View All Camps
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
