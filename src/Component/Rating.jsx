/* eslint-disable react/prop-types */


const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const starIcons = [];

  // Create an array of full star icons with yellow color
  for (let i = 0; i < fullStars; i++) {
    starIcons.push(
      <svg
        key={i}
        className="w-4 h-4 text-yellow-300 mr-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
        aria-hidden="true"
      >
        <path
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
        />
      </svg>
    );
  }

  // Add a half star icon with yellow color if needed
  if (hasHalfStar) {
    starIcons.push(
      <svg
        key="half"
        className="w-4 h-4 text-yellow-300 mr-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
        aria-hidden="true"
      >
        <path
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
        />
      </svg>
    );
  }

  // Create an array of empty star icons with gray color for the remaining stars
  for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
    starIcons.push(
      <svg
        key={`empty-${i}`}
        className="w-4 h-4 text-gray-300 mr-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
        aria-hidden="true"
      >
        <path
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
        />
      </svg>
    );
  }

  return <div className="flex items-center">{starIcons}</div>;
};

export default Rating;
