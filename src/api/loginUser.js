export function createUser() {
    
    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email: 'tetete', username: 'testusername', password: 'testpassword', role: 'teacher'})
    };

}