import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Plus, BarChart3 } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Add', href: '/add', icon: Plus },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
];

const MobileNav: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <nav className="flex justify-around">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center py-3 px-4 text-xs font-medium transition-colors duration-200 ${
                isActive ? 'text-blue-600' : 'text-gray-700'
              }`
            }
          >
            <item.icon className="h-5 w-5 mb-1" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;