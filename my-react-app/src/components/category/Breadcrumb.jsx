import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ items = [] }) => {
  const defaultItems = [
    { label: 'Home', href: '/', current: false },
    { label: 'Casual', href: '/casual', current: true }
  ];

  const breadcrumbItems = items.length > 0 ? items : defaultItems;

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          )}
          {item.current ? (
            <span className="font-medium text-gray-900">{item.label}</span>
          ) : (
            <a 
              href={item.href} 
              className="hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;