import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

/*
Component of a coupon on list page.
Referenced from the tutorial on https://medium.com/free-code-camp/crud-using-react-41d047224e26
*/

const Coupon = ({
  id,
  couponcode,
  condition,
  discountpercentage,
  maxdiscount,
  date,
  handleRemoveCoupon
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="coupon">
      <Card.Body>
        <Card.Title className="copoun-ti">{couponcode}</Card.Title>
        <div className="copoun-de">
          <div>Condition: {condition}</div>
          <div>Maximum_Amount_OFF: {maxdiscount} </div>
          <div>Discount_Percentage: {discountpercentage} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="outline-secondary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="outline-danger" onClick={() => handleRemoveCoupon(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Coupon;
