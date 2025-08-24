import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  Clock,
  Filter,
  Search,
} from "lucide-react";

const Camps: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const camps = [
    {
      id: 1,
      title: "Himalayan Base Camp Trek",
      location: "Himachal Pradesh, India",
      duration: "7 Days",
      groupSize: "12-15",
      difficulty: "Moderate",
      price: "₹25,000",
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      dates: ["March 15-21", "April 12-18", "May 10-16"],
      highlights: [
        "High altitude trekking",
        "Leadership challenges",
        "Cultural immersion",
      ],
      category: "trekking",
    },
    {
      id: 2,
      title: "Nepal Cultural Expedition",
      location: "Kathmandu Valley, Nepal",
      duration: "10 Days",
      groupSize: "15-20",
      difficulty: "Easy",
      price: "₹35,000",
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      dates: ["February 20-29", "March 25-April 3", "April 20-29"],
      highlights: [
        "Monastery visits",
        "Local community interaction",
        "Traditional crafts",
      ],
      category: "cultural",
    },
    {
      id: 3,
      title: "Bhutan Happiness Journey",
      location: "Thimphu & Paro, Bhutan",
      duration: "8 Days",
      groupSize: "10-12",
      difficulty: "Easy",
      price: "₹45,000",
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      dates: ["March 5-12", "April 8-15", "May 3-10"],
      highlights: [
        "Gross National Happiness philosophy",
        "Dzong architecture",
        "Meditation practices",
      ],
      category: "cultural",
    },
    {
      id: 4,
      title: "River Rafting Adventure",
      location: "Rishikesh, India",
      duration: "5 Days",
      groupSize: "16-20",
      difficulty: "Moderate",
      price: "₹18,000",
      rating: 4.7,
      image:
        "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      dates: ["March 10-14", "April 15-19", "May 12-16"],
      highlights: ["White water rafting", "Team building", "Yoga sessions"],
      category: "adventure",
    },
    {
      id: 5,
      title: "Wildlife Conservation Camp",
      location: "Chitwan, Nepal",
      duration: "6 Days",
      groupSize: "12-15",
      difficulty: "Easy",
      price: "₹28,000",
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      dates: ["February 25-March 2", "April 5-10", "May 20-25"],
      highlights: [
        "Wildlife tracking",
        "Conservation projects",
        "Jungle safari",
      ],
      category: "wildlife",
    },
    {
      id: 6,
      title: "Rock Climbing Expedition",
      location: "Manali, India",
      duration: "4 Days",
      groupSize: "8-10",
      difficulty: "Challenging",
      price: "₹22,000",
      rating: 4.6,
      image:
        "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      dates: ["March 20-23", "April 25-28", "May 15-18"],
      highlights: ["Technical climbing", "Safety training", "Mountain rescue"],
      category: "adventure",
    },
  ];

  const filters = [
    { id: "all", label: "All Camps" },
    { id: "trekking", label: "Trekking" },
    { id: "cultural", label: "Cultural" },
    { id: "adventure", label: "Adventure" },
    { id: "wildlife", label: "Wildlife" },
  ];

  const filteredCamps = camps.filter((camp) => {
    const matchesFilter =
      selectedFilter === "all" || camp.category === selectedFilter;
    const matchesSearch =
      camp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      camp.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Moderate":
        return "bg-yellow-100 text-yellow-800";
      case "Challenging":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Adventure activities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Adventure <span className="text-primary-400">Camps</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 max-w-4xl mx-auto">
            From Himalayan treks to cultural expeditions, discover life-changing
            adventures across India, Nepal, and Bhutan. Each camp is designed to
            challenge, inspire, and transform young explorers.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              View All Camps
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-lg font-medium transition-all duration-200 text-lg flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Explore Destinations
            </button>
          </div>

          {/* Adventure Categories Preview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center floating-element">
              <div className="w-16 h-16 bg-primary-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏔️</span>
              </div>
              <div className="text-sm text-gray-300">Trekking</div>
            </div>
            <div className="text-center floating-element">
              <div className="w-16 h-16 bg-primary-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎭</span>
              </div>
              <div className="text-sm text-gray-300">Cultural</div>
            </div>
            <div className="text-center floating-element">
              <div className="w-16 h-16 bg-primary-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏃</span>
              </div>
              <div className="text-sm text-gray-300">Adventure</div>
            </div>
            <div className="text-center floating-element">
              <div className="w-16 h-16 bg-primary-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🦁</span>
              </div>
              <div className="text-sm text-gray-300">Wildlife</div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
            <div className="floating-element">
              <div className="text-2xl font-bold text-primary-400">6</div>
              <div className="text-xs text-gray-300">Camp Types</div>
            </div>
            <div className="floating-element">
              <div className="text-2xl font-bold text-primary-400">3</div>
              <div className="text-xs text-gray-300">Countries</div>
            </div>
            <div className="floating-element">
              <div className="text-2xl font-bold text-primary-400">4.8</div>
              <div className="text-xs text-gray-300">Avg Rating</div>
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

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search camps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedFilter === filter.id
                        ? "bg-primary-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}>
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Camps Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCamps.map((camp) => (
              <div key={camp.id} className="card overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={camp.image}
                    alt={camp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{camp.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                        camp.difficulty
                      )}`}>
                      {camp.difficulty}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {camp.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{camp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{camp.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">
                        {camp.groupSize} participants
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Highlights:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {camp.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Available Dates:
                    </h4>
                    <div className="space-y-1">
                      {camp.dates.map((date, index) => (
                        <div
                          key={index}
                          className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-3 w-3 mr-2" />
                          {date}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-primary-600">
                      {camp.price}
                    </div>
                    <button className="btn-primary text-sm px-4 py-2">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCamps.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                No camps found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSelectedFilter("all");
                  setSearchTerm("");
                }}
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We offer customized programs tailored to your group's specific needs
            and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Request Custom Program</button>
            <button className="btn-secondary">Download Full Catalog</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Camps;
