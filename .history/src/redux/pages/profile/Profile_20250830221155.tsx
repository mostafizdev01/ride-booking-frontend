import { useState } from 'react';
import { Camera, Save, User, Mail, MapPin, Phone, Calendar } from 'lucide-react';
import CommonLayout from '@/components/layout/CommoLayOut';

export const Profile = () => {
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        location: 'New York, USA',
        phone: '+1 (555) 123-4567',
        bio: 'UX Designer with 5+ years of experience creating beautiful and functional interfaces.',
        dob: '1990-05-15'
    });

    const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80');
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target?.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        // In a real app, you would save data to an API here
        console.log('Saving user data:', userData);
        setIsEditing(false);
        alert('Profile updated successfully!');
    };

    const handleCancel = () => {
        // Reset form or fetch original data
        setIsEditing(false);
    };

    return (
        <CommonLayout>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        {/* Header */}
                        <div className="px-6 py-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                            <h1 className="text-3xl font-bold">User Profile</h1>
                            <p className="mt-2 opacity-90">Manage your personal information and preferences</p>
                        </div>

                        {/* Profile Content */}
                        <div className="px-6 py-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Left Column - Profile Image */}
                                <div className="md:w-1/3 flex flex-col items-center">
                                    <div className="relative">
                                        <img
                                            src={profileImage}
                                            alt="Profile"
                                            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                                        />
                                        {isEditing && (
                                            <label htmlFor="profileImage" className="absolute bottom-3 right-3 bg-blue-600 p-3 rounded-full text-white cursor-pointer shadow-md hover:bg-blue-700 transition-colors">
                                                <Camera size={20} />
                                                <input
                                                    type="file"
                                                    id="profileImage"
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                />
                                            </label>
                                        )}
                                    </div>

                                    <div className="mt-6 text-center">
                                        {isEditing ? (
                                            <div className="space-y-4">
                                                <button
                                                    onClick={handleSave}
                                                    className="flex items-center justify-center w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                                                >
                                                    <Save size={18} className="mr-2" />
                                                    Save Changes
                                                </button>
                                                <button
                                                    onClick={handleCancel}
                                                    className="text-gray-600 hover:text-gray-800 transition-colors"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => setIsEditing(true)}
                                                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
                                            >
                                                Edit Profile
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Right Column - Profile Details */}
                                <div className="md:w-2/3">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Personal Information</h2>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="flex items-center text-sm font-medium text-gray-700">
                                                    <User size={16} className="mr-2" />
                                                    Full Name
                                                </label>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={userData.name}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    />
                                                ) : (
                                                    <p className="text-gray-900">{userData.name}</p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="flex items-center text-sm font-medium text-gray-700">
                                                    <Mail size={16} className="mr-2" />
                                                    Email Address
                                                </label>
                                                {isEditing ? (
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={userData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    />
                                                ) : (
                                                    <p className="text-gray-900">{userData.email}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="flex items-center text-sm font-medium text-gray-700">
                                                    <Phone size={16} className="mr-2" />
                                                    Phone Number
                                                </label>
                                                {isEditing ? (
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={userData.phone}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    />
                                                ) : (
                                                    <p className="text-gray-900">{userData.phone}</p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="flex items-center text-sm font-medium text-gray-700">
                                                    <Calendar size={16} className="mr-2" />
                                                    Date of Birth
                                                </label>
                                                {isEditing ? (
                                                    <input
                                                        type="date"
                                                        name="dob"
                                                        value={userData.dob}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    />
                                                ) : (
                                                    <p className="text-gray-900">{userData.dob}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="flex items-center text-sm font-medium text-gray-700">
                                                <MapPin size={16} className="mr-2" />
                                                Location
                                            </label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={userData.location}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            ) : (
                                                <p className="text-gray-900">{userData.location}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Bio
                                            </label>
                                            {isEditing ? (
                                                <textarea
                                                    name="bio"
                                                    value={userData.bio}
                                                    onChange={handleInputChange}
                                                    rows={4}
                                                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            ) : (
                                                <p className="text-gray-900">{userData.bio}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CommonLayout>
    );
};