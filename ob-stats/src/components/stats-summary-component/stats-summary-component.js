import React from 'react';
import { PropTypes } from 'prop-types';
import './stats-summary-component.css';

const StatDisplay = ({ title, amount }) => (
  <div className="stats-summary flex column align-center">
    <div className="fnt-accent3">{title}</div>
    <div className="padSm fnt-accent2 clr-accent3 fnt-huge-unless-mobile">
      {amount || 'loading...'}
    </div>
  </div>
);

const StatsSummaryComponent = ({
  totalListings,
  totalMerchants,
  totalVendors
}) => (
  <div className="stats-summary flex row justify-space-around align-stretch padSm">
    <StatDisplay title="Listings" amount={totalListings} />
    <StatDisplay title="Merchants" amount={totalMerchants} />
    <StatDisplay title="Vendors" amount={totalVendors} />
  </div>
);

StatsSummaryComponent.propTypes = {
  totalListings: PropTypes.number,
  totalMerchants: PropTypes.number,
  totalVendors: PropTypes.number
};

export default StatsSummaryComponent;
