import { useEffect, useState } from "react";

const EmployeeDetails = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://paix.appian.community/suite/webapi/appianEndpoint",
          {
            method: 'GET',
            headers: {
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlZGI5MjJjYy02ODU4LTQxMDMtODYwZC0yN2YxMGY3MmFmNWUifQ.N_shBX0Pa5VIeJGIU4Ybz6ykFCk4Crlw7nfCEzxKAr8",
              "Content-Type": "application/json",
              'Access-Control-Request-Method': 'GET',
              "Access-Control-Allow-Origin": 'https://papaya-strudel-5d6793.netlify.app',
              'Access-Control-Request-Headers': 'Authorization, Content-Type'
              
              
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

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
