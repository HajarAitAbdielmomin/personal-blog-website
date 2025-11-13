export const sendEmail = async (values: any) => {
    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        });
        const data = await response.json();
        return data.success
    } catch (error) {
        console.error('Error :', error);
    }
}