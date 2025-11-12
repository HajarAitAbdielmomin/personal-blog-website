export const getBlogs = async () => {
    try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        if (data.success) return data.blogs;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error
    }
}