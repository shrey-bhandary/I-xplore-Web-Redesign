import React from 'react';
import { Mountain, Users, Award, Shield, Compass, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Mountain,
      title: 'Expert-Led Adventures',
      description: 'Professional guides with years of experience in outdoor education and adventure sports.'
    },
    {
      icon: Users,
      title: 'Small Group Experience',
      description: 'Intimate group sizes ensure personalized attention and meaningful connections.'
    },
    {
      icon: Award,
      title: 'Certified Programs',
      description: 'All our programs are certified and follow international safety standards.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive safety protocols and emergency procedures for all activities.'
    },
    {
      icon: Compass,
      title: 'Unique Destinations',
      description: 'Explore hidden gems across India, Nepal, and Bhutan with local insights.'
    },
    {
      icon: Heart,
      title: 'Life-Changing Impact',
      description: 'Programs designed to build confidence, leadership, and environmental awareness.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-gradient">I-xplore</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another travel company. We're your partners in creating transformative outdoor experiences that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card p-8 text-center group hover:bg-primary-50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;