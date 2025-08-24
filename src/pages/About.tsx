import React from "react";
import { Users, Target, Award, Globe, Heart, Lightbulb } from "lucide-react";

const About: React.FC = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Lead Instructor",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      experience: "15+ years",
      specialization: "Mountain Expeditions",
    },
    {
      name: "Priya Sharma",
      role: "Program Director",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      experience: "12+ years",
      specialization: "Outdoor Education",
    },
    {
      name: "Tenzin Norbu",
      role: "Cultural Guide",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      experience: "10+ years",
      specialization: "Himalayan Culture",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description:
        "Every program is designed with clear learning objectives and personal growth goals.",
    },
    {
      icon: Heart,
      title: "Compassionate",
      description:
        "We care deeply about each participant's journey and well-being.",
    },
    {
      icon: Globe,
      title: "Sustainable",
      description:
        "Committed to responsible tourism and environmental conservation.",
    },
    {
      icon: Lightbulb,
      title: "Innovative",
      description:
        "Constantly evolving our methods to provide cutting-edge outdoor education.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Mountain landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Our <span className="text-primary-400">Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 max-w-4xl mx-auto">
            From humble beginnings in the Indian Himalayas to becoming a trusted
            partner in outdoor education across three countries. We've
            transformed over 10,000 young minds through unforgettable
            adventures.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Meet Our Team
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-lg font-medium transition-all duration-200 text-lg flex items-center gap-2">
              <Award className="h-5 w-5" />
              Our Achievements
            </button>
          </div>

          {/* Floating Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center floating-element">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                15+
              </div>
              <div className="text-sm text-gray-300">Years of Excellence</div>
            </div>
            <div className="text-center floating-element">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                10K+
              </div>
              <div className="text-sm text-gray-300">Lives Transformed</div>
            </div>
            <div className="text-center floating-element">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                500+
              </div>
              <div className="text-sm text-gray-300">Adventures Led</div>
            </div>
            <div className="text-center floating-element">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                3
              </div>
              <div className="text-sm text-gray-300">Countries Served</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008 by a group of passionate educators and
                  adventure enthusiasts, I-xplore began with a simple yet
                  powerful vision: to transform young minds through meaningful
                  outdoor experiences.
                </p>
                <p>
                  What started as small trekking expeditions in the Indian
                  Himalayas has evolved into comprehensive outdoor learning
                  programs spanning across India, Nepal, and Bhutan. We've
                  guided over 10,000 young explorers on journeys that have
                  shaped their character, built their confidence, and deepened
                  their connection with nature.
                </p>
                <p>
                  Today, I-xplore stands as a trusted partner for schools,
                  colleges, and organizations seeking to provide their students
                  with transformative educational experiences beyond the
                  classroom.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="I-xplore team in action"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape every
              experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of educators, guides, and adventure
              specialists are passionate about creating meaningful outdoor
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center p-8">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {member.experience}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-green-100">
              Numbers that tell our story of transformation and growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-green-200">Students Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-green-200">Programs Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-green-200">Partner Schools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-green-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Certifications & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <Award className="h-8 w-8 text-primary-600" />
              <span className="font-semibold">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Award className="h-8 w-8 text-primary-600" />
              <span className="font-semibold">Adventure Tourism Certified</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Award className="h-8 w-8 text-primary-600" />
              <span className="font-semibold">
                Environmental Excellence Award
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
