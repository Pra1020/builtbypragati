import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin({ setIsLoggedIn }) {
  const [hireRequests, setHireRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchHireRequests();
  }, []);

  const fetchHireRequests = async () => {
    try {
      const res = await fetch('http://localhost:5000/hireMeRequests', {
        credentials: 'include', // Important for session-based auth
      });

      if (!res.ok) {
        throw new Error('Unauthorized or server error');
      }

      const data = await res.json();
      if (Array.isArray(data)) {
        setHireRequests(data);
      } else {
        setHireRequests([]);
      }
    } catch (err) {
      console.error(err);
      setError('You are not authorized to view this page. Please login.');
      setHireRequests([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/hireMeRequests/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (res.ok) {
      setHireRequests(hireRequests.filter((item) => item.id !== id));
    }
  };

  const handleLogout = async () => {
    await fetch('http://localhost:5000/logout', {
      method: 'POST',
      credentials: 'include',
    });
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="admin-page text-start p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-light">👤 Admin Dashboard - Hire Me Requests</h2>
        <button className="btn btn-warning" onClick={handleLogout}>Logout</button>
      </div>

      {loading ? (
        <p className="text-light">Loading...</p>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : hireRequests.length === 0 ? (
        <p className="text-light">No hire requests found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover bg-white">
            <thead className="table-primary">
              <tr>
                <th>Company</th>
                <th>Person</th>
                <th>Email</th>
                <th>Post</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {hireRequests.map((req) => (
                <tr key={req.id}>
                  <td>{req.companyName}</td>
                  <td>{req.personName}</td>
                  <td>{req.email}</td>
                  <td>{req.post}</td>
                  <td>{req.message}</td>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(req.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Gradient Background */}
      <style>{`
        .admin-page {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #add8e6, #fbc2eb, #7ec8e3);
        }
      `}</style>
    </div>
  );
}

export default Admin;
