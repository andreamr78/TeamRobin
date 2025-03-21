import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopBar from '../components/TopBar';
import InfoCards from '../components/InfoCards';

const HomePage = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 3;

    const fetchCards = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/destinations', {
                params: { page: currentPage, limit: itemsPerPage, search: searchQuery }
            });
            setCards(response.data.destinations);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch data');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCards();
    }, [currentPage, searchQuery]);

    const handleNextPage = () => setCurrentPage((prev) => prev + 1);
    const handlePreviousPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <TopBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <InfoCards cards={cards} />
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <button onClick={handlePreviousPage} disabled={currentPage === 1} style={{ marginRight: '10px' }}>
                    Previous
                </button>
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>
    );
};

export default HomePage;
