const USERS_DB = [
  { id: 1, username: 'superadmin1', password: 'super123', role: 'superusuario', name: 'Carlos Rodríguez' },
  { id: 2, username: 'superadmin2', password: 'super456', role: 'superusuario', name: 'María González' },
  { id: 3, username: 'admin1', password: 'admin123', role: 'administrador', name: 'Juan Pérez' },
  { id: 4, username: 'admin2', password: 'admin456', role: 'administrador', name: 'Ana Martínez' },
  { id: 5, username: 'user1', password: 'user123', role: 'usuario', name: 'Luis Torres' },
  { id: 6, username: 'user2', password: 'user456', role: 'usuario', name: 'Sofia Ramírez' }
];

function authenticateUser(username, password) {
  const user = USERS_DB.find(u => u.username === username && u.password === password);
  if (user) {
    const { password, ...userWithoutPassword } = user;
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    return userWithoutPassword;
  }
  return null;
}

function getCurrentUser() {
  const userData = localStorage.getItem('currentUser');
  return userData ? JSON.parse(userData) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}