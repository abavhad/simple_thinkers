import { useState, useEffect } from 'react';
import { getCurrentUser } from '../utils/userUtils';

function CodebaseArchitecture() {
  const user = getCurrentUser();
  const [expandedFolders, setExpandedFolders] = useState(['root', 'src', 'src/components', 'src/utils', 'src/contexts']);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Codebase structure data - must be defined before hooks that use it
  const codebaseStructure = {
    name: 'webex-playtime',
    type: 'folder',
    children: [
      {
        name: 'public',
        type: 'folder',
        description: 'Static assets and public files',
        children: [
          { name: 'index.html', type: 'file', icon: 'html', description: 'Main HTML entry point' },
          { name: 'favicon.ico', type: 'file', icon: 'image', description: 'Site favicon' },
          { name: 'manifest.json', type: 'file', icon: 'json', description: 'PWA manifest' }
        ]
      },
      {
        name: 'src',
        type: 'folder',
        description: 'Source code directory',
        children: [
          {
            name: 'components',
            type: 'folder',
            description: 'React components',
            children: [
              { name: 'DashboardLayout.js', type: 'file', icon: 'jsx', description: 'Main dashboard layout wrapper' },
              { name: 'DashboardOverview.js', type: 'file', icon: 'jsx', description: 'Dashboard overview with roadmap' },
              { name: 'ModuleLibrary.js', type: 'file', icon: 'jsx', description: 'Module library component' },
              { name: 'ModuleView.js', type: 'file', icon: 'jsx', description: 'Individual module viewer' },
              { name: 'TeamOverview.js', type: 'file', icon: 'jsx', description: 'Team structure overview' },
              { name: 'HRConnect.js', type: 'file', icon: 'jsx', description: 'HR resources and policies' },
              { name: 'SignIn.js', type: 'file', icon: 'jsx', description: 'User authentication' },
              { name: 'SignUp.js', type: 'file', icon: 'jsx', description: 'User registration' }
            ]
          },
          {
            name: 'contexts',
            type: 'folder',
            description: 'React context providers',
            children: [
              { name: 'ThemeContext.js', type: 'file', icon: 'js', description: 'Global theme management' }
            ]
          },
          {
            name: 'utils',
            type: 'folder',
            description: 'Utility functions',
            children: [
              { name: 'userUtils.js', type: 'file', icon: 'js', description: 'User authentication helpers' }
            ]
          },
          {
            name: 'data',
            type: 'folder',
            description: 'Data models and constants',
            children: [
              { name: 'dummyUsers.js', type: 'file', icon: 'js', description: 'Mock user data' }
            ]
          },
          { name: 'App.js', type: 'file', icon: 'jsx', description: 'Main application component' },
          { name: 'index.js', type: 'file', icon: 'js', description: 'Application entry point' },
          { name: 'index.css', type: 'file', icon: 'css', description: 'Global styles' },
          { name: 'App.css', type: 'file', icon: 'css', description: 'App-specific styles' }
        ]
      },
      {
        name: 'package.json',
        type: 'file',
        icon: 'json',
        description: 'Project dependencies and scripts'
      },
      {
        name: 'README.md',
        type: 'file',
        icon: 'md',
        description: 'Project documentation'
      },
      {
        name: '.gitignore',
        type: 'file',
        icon: 'config',
        description: 'Git ignore rules'
      }
    ]
  };

  const toggleFolder = (folderPath) => {
    setExpandedFolders(prev => 
      prev.includes(folderPath) 
        ? prev.filter(p => p !== folderPath)
        : [...prev, folderPath]
    );
  };

  // Auto-expand folders when searching
  const getAllParentPaths = (item, path = '', parents = []) => {
    const currentPath = path ? `${path}/${item.name}` : item.name;
    if (item.type === 'folder' && item.children) {
      item.children.forEach(child => {
        if (child.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          parents.push(currentPath);
        }
        getAllParentPaths(child, currentPath, parents);
      });
    }
    return parents;
  };

  // Expand matching folders when search changes - must be called before early return
  useEffect(() => {
    if (!user || !searchQuery) return;
    
    const matchingParents = [];
    codebaseStructure.children.forEach(item => {
      getAllParentPaths(item, 'root', matchingParents);
    });
    setExpandedFolders(prev => [...new Set([...prev, ...matchingParents])]);
  }, [searchQuery, user]);

  const isExpanded = (folderPath) => expandedFolders.includes(folderPath);

  // Early return after all hooks
  if (!user) {
    return null;
  }

  const getFileIcon = (iconType) => {
    const icons = {
      jsx: 'code',
      js: 'javascript',
      css: 'css',
      json: 'data_object',
      html: 'html',
      md: 'description',
      image: 'image',
      config: 'settings'
    };
    return icons[iconType] || 'description';
  };

  const getFileColor = (iconType) => {
    const colors = {
      jsx: 'text-blue-500',
      js: 'text-yellow-500',
      css: 'text-blue-400',
      json: 'text-emerald-500',
      html: 'text-orange-500',
      md: 'text-slate-500',
      image: 'text-pink-500',
      config: 'text-slate-400'
    };
    return colors[iconType] || 'text-slate-400';
  };

  const renderTree = (item, level = 0, path = '', isLast = false, parentPath = '') => {
    const currentPath = path ? `${path}/${item.name}` : item.name;
    const isFolder = item.type === 'folder';
    const expanded = isExpanded(currentPath);
    const isHovered = hoveredItem === currentPath;
    
    // Filter by search query
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (!matchesSearch && searchQuery) {
      // Check if any children match
      if (isFolder && item.children) {
        const hasMatchingChild = item.children.some(child => 
          child.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (!hasMatchingChild) return null;
      } else {
        return null;
      }
    }

    return (
      <div key={currentPath} className="relative">
        {/* Folder/File Item */}
        <div
          className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all ${
            isFolder ? 'cursor-pointer' : 'cursor-default'
          } group ${
            isHovered ? 'bg-primary/10 border border-primary/30 shadow-sm' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
          }`}
          style={{ paddingLeft: `${level * 28 + 12}px` }}
          onMouseEnter={() => setHoveredItem(currentPath)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => isFolder && toggleFolder(currentPath)}
        >
          {/* Horizontal connector line */}
          {level > 0 && (
            <>
              {/* Vertical line from parent */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-600"
                style={{ 
                  left: `${level * 28 + 4}px`,
                  top: '0px',
                  bottom: isLast ? '50%' : '0px'
                }}
              ></div>
              {/* Horizontal line to item */}
              <div 
                className="absolute top-1/2 h-0.5 bg-slate-300 dark:bg-slate-600"
                style={{ 
                  left: `${level * 28 + 4}px`,
                  width: '12px',
                  transform: 'translateY(-50%)'
                }}
              ></div>
            </>
          )}
          
          {/* Expand/Collapse Icon */}
          {isFolder && (
            <span className={`material-symbols-outlined text-base transition-all ${
              expanded ? 'text-primary rotate-90' : 'text-slate-500'
            }`}>
              chevron_right
            </span>
          )}
          
          {/* Folder/File Icon */}
          <span className={`material-symbols-outlined text-xl transition-colors ${
            isFolder 
              ? expanded ? 'text-primary' : 'text-primary/70'
              : getFileColor(item.icon)
          }`}>
            {isFolder ? (expanded ? 'folder_open' : 'folder') : getFileIcon(item.icon)}
          </span>
          
          {/* Name */}
          <span className={`text-sm font-medium transition-colors ${
            isFolder 
              ? 'text-slate-900 dark:text-white font-bold' 
              : 'text-slate-700 dark:text-slate-300'
          } ${isHovered ? 'text-primary' : ''}`}>
            {item.name}
          </span>
          
          {/* Description Badge */}
          {isHovered && item.description && (
            <span className="ml-auto text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm animate-fadeIn">
              {item.description}
            </span>
          )}
        </div>

        {/* Children */}
        {isFolder && expanded && item.children && (
          <div className="relative ml-0">
            {item.children.map((child, index) => 
              renderTree(child, level + 1, currentPath, index === item.children.length - 1, currentPath)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
          Codebase Architecture
        </h2>
        <p className="text-slate-500 text-base font-medium max-w-2xl">
          Explore the repository structure and understand how components are organized. Click folders to expand and see their contents.
        </p>
      </div>

      {/* Interactive Folder Tree */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg p-8 mb-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">schema</span>
            Repository Structure
          </h3>
          <div className="flex items-center gap-4 flex-wrap">
            {/* Search */}
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <button
              onClick={() => setExpandedFolders(['root', 'src', 'src/components', 'src/utils', 'src/contexts', 'src/data', 'public'])}
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">unfold_more</span>
              Expand All
            </button>
            <button
              onClick={() => setExpandedFolders([])}
              className="text-xs font-bold text-slate-500 hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">unfold_less</span>
              Collapse All
            </button>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800 min-h-[500px] overflow-auto">
          <div className="relative">
            {/* Root folder */}
            <div className="mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl text-primary">folder</span>
                <span className="text-lg font-bold text-slate-900 dark:text-white">{codebaseStructure.name}</span>
                <span className="text-xs text-slate-500">(root)</span>
              </div>
            </div>

            {/* Tree structure */}
            <div className="space-y-0.5">
              {codebaseStructure.children.map((item, index) => 
                renderTree(item, 0, 'root', index === codebaseStructure.children.length - 1, 'root')
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">info</span>
          File Type Legend
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-500">code</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">JSX/React</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-yellow-500">javascript</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">JavaScript</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-400">css</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">CSS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-500">data_object</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">JSON</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-orange-500">html</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">HTML</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500">description</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">Markdown</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">folder</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">Folder</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-400">settings</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">Config</span>
          </div>
        </div>
      </div>

      {/* Key Directories Info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl">code</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">src/components</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            All React components are organized here. Each component is self-contained with its own logic and styling.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-xl p-6 border border-emerald-500/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="size-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-xl">settings</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">src/contexts</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            React Context providers for global state management like theme, user authentication, etc.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="size-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-xl">build</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white">src/utils</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reusable utility functions and helpers used across the application.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CodebaseArchitecture;
