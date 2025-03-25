import React from 'react';

interface TopBarProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const TopBar: React.FC<TopBarProps> = ({ searchQuery, setSearchQuery }) => {
    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
            />
        </div>
    );
};

export default TopBar;
