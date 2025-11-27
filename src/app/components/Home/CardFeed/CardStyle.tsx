import React from "react";
import { MessageCircle, Eye, MoreVertical } from "lucide-react";

const CardStyle = ({ title, subtitle, description, comments, views }) => {
  return (
    <div className="w-full bg-white rounded-2xl p-5 shadow-sm relative hover:shadow-md transition-all">

      {/* Floating Icon */}
      <button className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
        <MoreVertical size={18} />
      </button>

      {/* Header */}
      <div className="mb-3">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
        <div className="flex items-center gap-1">
          <MessageCircle size={16} className="text-gray-500" />
          <span className="text-sm text-gray-600">{comments}</span>
        </div>

        <div className="flex items-center gap-1">
          <Eye size={16} className="text-gray-500" />
          <span className="text-sm text-gray-600">{views}</span>
        </div>
      </div>
    </div>
  );
};

export default CardStyle;
