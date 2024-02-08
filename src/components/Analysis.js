import React, { useState, useEffect } from 'react';
import "./Anilysis.css";
import deletedata from '../assets/material-symbols_delete.png';
import editdata from '../assets/Vector (1).png';
import sharedata from '../assets/Vector.png';
import axios from 'axios';

// const Analysis = () => {
//   const [quizData, setQuizData] = useState([
//     { id: 1, quizName: 'hah', createdOn: '1/16/2024', impression: 1 },
//     { id: 2, quizName: 'jhiuh', createdOn: '1/16/2024', impression: 2 },
//     { id: 3, quizName: 'gkuhjh', createdOn: '1/21/2024', impression: 0 },
//   ]);

//   const [editedData, setEditedData] = useState({
//     id: null,
//     quizName: '',
//     createdOn: '',
//     impression: null,
//   });

//   useEffect(() => {
//     const newQuizData = [
//       { id: 4, quizName: 'New Quiz 1', createdOn: '1/22/2024', impression: 3 },
//       { id: 5, quizName: 'New Quiz 2', createdOn: '1/22/2024', impression: 4 },
//     ];

//     addNewQuizData(newQuizData);
//   }, []);
const Analysis = () => {
  const [quizData, setQuizData] = useState([]);
  const [editedData, setEditedData] = useState({
    id: null,
    quizName: '',
    createdAt: '',
    impression: null,
  });

  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/quiz');
      setQuizData(response.data.quizzes);
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  };


  // const handleDelete = (index) => {
  //   const updatedQuizData = [...quizData];
  //   updatedQuizData.splice(index, 1);
  //   setQuizData(updatedQuizData);
  // };
  const handleDelete = async (id) => {
    try {
      const updatedQuizData = await axios.delete(`http://localhost:4000/api/v1/quiz/${id}`);
      fetchQuizData();
      updatedQuizData.splice(id, 1);
    } catch (error) {
      console.error('Error deleting quiz:', error);
    }
  };

  const handleEdit = (row) => {
    setEditedData(row);
  };

  // const handleUpdate = () => {
  //   const updatedQuizData = quizData.map((row) =>
  //     row.id === editedData.id ? editedData : row
  //   );
  //   setQuizData(updatedQuizData);
  //   setEditedData({
  //     id: null,
  //     quizName: '',
  //     createdOn: '',
  //     impression: null,
  //   });
  // };
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/api/v1/quiz/${editedData.id}`, editedData);
      fetchQuizData();
      setEditedData({
        id: null,
        quizName: '',
        createdAt: '',
        impression: null,
      });
    } catch (error) {
      console.error('Error updating quiz:', error);
    }
  };
   console.log(quizData)
  // Function to handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleShare = (quizName) => {
    console.log(`Sharing link for quiz: ${quizName}`);
    alert('Link copied successfully!');
  };

  const addNewQuizData = (newData) => {
    setQuizData([...quizData, ...newData]);
  };

  return (
    <div>
      <div className="Dashboard_subContainer__k+h33">
        <div className="Dashboard_analyticsScreen__Y3Mwp">
          <h1 className="Dashboard_analyticsHeading__uT3Da">Quiz Analytics</h1>
          {quizData.length === 0 ? (
            <p>No quizzes created.</p>
          ) : (
            <>
              <table className="Dashboard_analyticsTable__T4MBV">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Quiz Name</th>
                    <th>Created on</th>
                    <th>Impression</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {quizData.map((row, index) => (
                    <tr key={row.id}>
                      <td>{index + 1}</td>
                      <td>
                        {row.id === editedData.id ? (
                          <input
                            type="text"
                            name="quizName"
                            value={editedData.quizName}
                            onChange={handleChange}
                          />
                        ) : (
                          <span>{row.quizName}</span>
                        )}
                      </td>
                      <td>
                        {row.id === editedData.id ? (
                          <input
                            type="text"
                            name="createdOn"
                            value={editedData.createdOn}
                            onChange={handleChange}
                          />
                        ) : (
                          <span>{row.createdOn}</span>
                        )}
                      </td>
                      <td>
                        {row.id === editedData.id ? (
                          <input
                            type="number"
                            name="impression"
                            value={editedData.impression}
                            onChange={handleChange}
                          />
                        ) : (
                          <span>{row.impression}</span>
                        )}
                      </td>
                      <td>
                        {row.id === editedData.id ? (
                          <button onClick={() => handleUpdate(row)}>Update</button>
                        ) : (
                          <img src={editdata} alt="Edit" onClick={() => handleEdit(row)} />
                        )}
                      {/* </td>
                      <td> */}
                        <img src={deletedata} alt="Delete" onClick={() => handleDelete(row._id)} />
                        <img src={sharedata} alt="Share" onClick={() => handleShare(row.quizName)} />
                      </td>
                      <td style={{ cursor: 'pointer', textDecoration: 'underline' }}>Question Wise Analysis</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Analysis;
