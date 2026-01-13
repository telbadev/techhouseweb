// services/json/json_service.js
class JsonService {
    static async loadDatabase(FILE) {
        try {
            const res = await fetch(FILE);
            if (!res.ok) throw new Error(`Failed to fetch ${FILE}`);
            return await res.json();
        } catch (err) {
            console.error('JSON fetch error:', err);
            return [];
        }
    }

    static saveDatabase(FILE, data) {
        console.warn('saveDatabase: Browserda yozib bo‘lmaydi');
    }
}

export default JsonService;
