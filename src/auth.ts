export type User = {
    id: number;
    email: string;
    role: 'Admin' | 'Guest';
}

const testUser = {
    id: '1',
    email: 'test@email.com',
    role: 'Guest'
}

export const getUser = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const token = generateToken();
    return [200, { token, currentUser: testUser }];
} 

export const login = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const token = generateToken();
    return [200, { token, currentUser: testUser }];
}

const generateToken = () => {
    return Math.random().toString(36).substring(2);
}