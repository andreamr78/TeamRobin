export const getSavedDestinationsIds = () => {
    const savedDestinationIds = localStorage.getItem('saved_destinations')
      ? JSON.parse(localStorage.getItem('saved_destinations')!)
      : [];
  
    return savedDestinationIds;
  };
  
  export const saveDestinationIds = (destinationsIdArr: string[]) => {
    if (destinationsIdArr.length) {
      localStorage.setItem('saved_destinations', JSON.stringify(destinationsIdArr));
    } else {
      localStorage.removeItem('saved_destinations');
    }
  };
  
  export const removeDestinationId = (TravelId: string) => {
    const savedDestinationsIds = localStorage.getItem('saved_destinations')
      ? JSON.parse(localStorage.getItem('saved_destinations')!)
      : null;
  
    if (!TravelId) {
      return false;
    }
  
    const updatedSavedDestinationsIds = savedDestinationsIds?.filter((savedDestinationsIds: string) => savedDestinationsIds !== TravelId);
    localStorage.setItem('saved_destinations', JSON.stringify(updatedSavedDestinationsIds));
  
    return true;
  };