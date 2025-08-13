import React from 'react'
import { Play } from 'lucide-react'
import youtube1 from '../../assets/componets-bg/youtubecarousel1.png'
import youtube2 from '../../assets/componets-bg/youtubecarousel2.png'

const Feature = () => {
  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Function to get YouTube thumbnail URL
  const getYouTubeThumbnail = (videoUrl) => {
    const videoId = getYouTubeVideoId(videoUrl);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  // Video data with YouTube links (can be null for default images)
  const carouselData = [
    {
      id: 1,
      youtubeUrl: null, // Use default image
      defaultImage: youtube1,
      title: "Professional Car Detailing"
    }
  ];

  // Function to render video thumbnail with fallback
  const renderVideoThumbnail = (item) => {
    const youtubeThumbnail = getYouTubeThumbnail(item.youtubeUrl);
    const thumbnailSrc = youtubeThumbnail || item.defaultImage;

    const handleVideoClick = () => {
      if (item.youtubeUrl) {
        window.open(item.youtubeUrl, '_blank');
      }
    };

    return (
      <div
        className="relative cursor-pointer group h-64 w-full"
        onClick={handleVideoClick}
      >
        <img
          src={thumbnailSrc}
          alt={item.title}
          className="w-full  object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
          onError={(e) => {
            // Fallback to default image if YouTube thumbnail fails to load
            e.target.src = item.defaultImage;
          }}
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-16 px-2">
      <div className='flex items-center gap-32 justify-between max-w-7xl mx-auto'>
        <div className='flex flex-col items-start gap-8 max-w-lg'>
          <h1 className='text-4xl md:text-5xl font-bold font-bebas text-white mb-8'>
            Experience the Craft<br/> Straight from the Studio <br/> <span className='text-custom-red'>Where Passion Meets Precision</span>
          </h1>
          <button className='bg-custom-red border-custom-red text-white font-bold px-8 py-2 text-lg border-2 rounded-md hover:bg-red-700 transition-colors'>
            View more
          </button>
        </div>

        {/* Video Section */}
        <div className='flex gap-6'>
          {carouselData.map((item) => (
            <div key={item.id} className='w-80'>
              {renderVideoThumbnail(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feature