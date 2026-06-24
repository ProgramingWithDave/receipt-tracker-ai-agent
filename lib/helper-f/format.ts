
// Helper function to format file size
export function formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 bytes"

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

// Helper function to format currency
export function formatCurrency(amount: number, currency: string = ""): string {
    return `${amount.toFixed(2)}${currency ? `${currency}` : ""} `;
}