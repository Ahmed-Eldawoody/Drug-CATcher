import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

export default function Sreen3() {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    countryCode,
    operationCountries,
    companyName,
    objective,
    more
  } = useContext(Context);
  return (
    <div>
      <h1>Some one Will Call you Soon</h1>
      <Link to="/">Home</Link>
      <br />
      <br />
      <br />
      <br />
      <h3>Name: {`${firstName} ${lastName}`}</h3>
      <br />
      <h3>Email: {email}</h3>
      <br />
      <h3>Phone: {`${countryCode}-${phoneNumber}`}</h3>
      <br />
      <div>
        <h2>Countries:</h2>
        {operationCountries.map((count) => {
          return <h3>{count.label}</h3>;
        })}
      </div>
      <br />
      <h3>Company Name: {companyName.label}</h3>
      <br />

      <div>
        <h2>objective:</h2>
        {objective.map((ob) => {
          return <h3>{ob.label}</h3>;
        })}
      </div>
      <br />

      <h3>{more}</h3>
    </div>
  );
}
