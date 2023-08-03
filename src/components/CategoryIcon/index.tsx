import React from "react";

interface CategoryIconProps {
  url: string;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ url }) => {
  return <img src={url} alt="Category icon" />;
};

export default CategoryIcon;
