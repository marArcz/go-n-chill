export const tmdbImage = (path:string | null,size='original') => {
    return `https://image.tmdb.org/t/p/${size}/${path}`
}

export function formatDate(dateString:string) {
    // Parse the date string into a Date object
    const date = new Date(dateString);

    // Array of month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Extract year, month, and day
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()]; // Get the month name from the array
    const day = date.getDate(); // Get the day of the month

    // Format as "Month Day, Year"
    return `${month} ${day}, ${year}`;
}
