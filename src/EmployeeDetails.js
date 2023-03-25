import { useEffect, useState } from "react";

const EmployeeDetails = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlZGI5MjJjYy02ODU4LTQxMDMtODYwZC0yN2YxMGY3MmFmNWUifQ.N_shBX0Pa5VIeJGIU4Ybz6ykFCk4Crlw7nfCEzxKAr8';
  const apiUrl = 'https://paix.appian.community/suite/webapi/appianEndpoint';
  
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      });
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error.message);
      console.log(error)
    }
  };
   useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>{props.selectedEmployee}</p>
      <p>{data}</p>
    </div>
  );
};
export default EmployeeDetails;
