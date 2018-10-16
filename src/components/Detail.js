import React from 'react';

const Detail = ({id, name, price, imageUrl}) => {
  return (<div>
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <td>{id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>${price}</td>
        </tr>
      </tbody>
    </table>
    <img src={imageUrl} alt="Car"/>
  </div>);
};

export default Detail;
